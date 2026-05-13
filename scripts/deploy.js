import { Client } from 'basic-ftp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Load .env file
dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '..', '.env') });

const FTP_HOST = process.env.FTP_HOST || '82.25.83.46';
const FTP_USER = process.env.FTP_USER || 'u814252648.adminsc';
const FTP_PORT = parseInt(process.env.FTP_PORT || '21', 10);
const FTP_PASS = process.env.FTP_PASS || process.env.FTP_PASSWORD;
const REMOTE_DIR = process.env.FTP_DIR || '.';
const LOCAL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'client');

if (!FTP_PASS) {
  console.error('❌ Error: FTP_PASS environment variable not set');
  console.error('Usage: FTP_PASS=your_password npm run deploy');
  console.error('Or set FTP_PASSWORD in .env file');
  process.exit(1);
}

function generateIndexHtml(clientDir) {
  const assetsDir = join(clientDir, 'assets');
  const files = readdirSync(assetsDir);
  
  const cssFiles = files.filter(f => f.endsWith('.css'));
  const jsFiles = files.filter(f => f.endsWith('.js'));
  
  const cssLinks = cssFiles
    .map(f => `    <link rel="stylesheet" href="/assets/${f}" />`)
    .join('\n');
  
  const jsScripts = jsFiles
    .map(f => `    <script type="module" src="/assets/${f}"><\/script>`)
    .join('\n');
  
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Scholars Cafe</title>
${cssLinks}
  </head>
  <body>
    <div id="app"></div>
${jsScripts}
  </body>
</html>
`;
  
  const indexPath = join(clientDir, 'index.html');
  writeFileSync(indexPath, html);
  console.log('📝 Generated index.html');
}

async function uploadDir(client, localPath, remotePath) {
  const files = readdirSync(localPath);
  
  // First, ensure the assets directory exists if needed
  if (remotePath && remotePath !== '.' && files.some(f => statSync(join(localPath, f)).isDirectory())) {
    try {
      await client.ensureDir(remotePath);
    } catch (e) {
      // May already exist
    }
  }
  
  for (const file of files) {
    const localFile = join(localPath, file);
    const remoteFile = remotePath && remotePath !== '.' ? `${remotePath}/${file}` : file;
    const stat = statSync(localFile);
    
    if (stat.isDirectory()) {
      try {
        await client.ensureDir(remoteFile);
      } catch (e) {
        // May already exist
      }
      await uploadDir(client, localFile, remoteFile);
    } else {
      console.log(`  📤 ${remoteFile}`);
      await client.uploadFrom(localFile, remoteFile);
    }
  }
}

async function deploy() {
  const client = new Client();
  
  try {
    // Generate index.html based on actual assets
    generateIndexHtml(LOCAL_DIR);
    
    console.log('🔗 Connecting to Hostinger FTP...');
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      port: FTP_PORT,
    });
    
    console.log(`📁 Uploading to ${REMOTE_DIR}...`);
    await uploadDir(client, LOCAL_DIR, REMOTE_DIR);
    
    console.log('✅ Deploy complete!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Deploy failed:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
