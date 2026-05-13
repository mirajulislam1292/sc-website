import { Client } from 'basic-ftp';
import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
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
  console.error('[ERROR] FTP_PASS environment variable not set');
  console.error('Usage: FTP_PASS=your_password npm run deploy');
  console.error('Or set FTP_PASSWORD in .env file');
  process.exit(1);
}

async function generateIndexHtml(clientDir) {
  const serverEntryPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'server', 'index.js');
  const serverEntry = await import(pathToFileURL(serverEntryPath).href);
  const response = await serverEntry.default.fetch(new Request('http://localhost/'));

  if (!response.ok) {
    throw new Error(`SSR render failed with status ${response.status}`);
  }

  const html = await response.text();
  const indexPath = join(clientDir, 'index.html');
  writeFileSync(indexPath, html);
  console.log('[OK] Generated SSR index.html');
}

async function uploadDir(client, localPath, remotePath) {
  const files = readdirSync(localPath);
  
  // Create all directories first
  const dirs = files.filter(f => statSync(join(localPath, f)).isDirectory());
  for (const dir of dirs) {
    const remoteFile = remotePath && remotePath !== '.' ? `${remotePath}/${dir}` : dir;
    console.log(`  [DIR] ${remoteFile}`);
    try {
      await client.mkdir(remoteFile);
    } catch (e) {
      console.log(`     (${e.message})`);
    }
  }
  
  // Upload files
  for (const file of files) {
    const localFile = join(localPath, file);
    const remoteFile = remotePath && remotePath !== '.' ? `${remotePath}/${file}` : file;
    const stat = statSync(localFile);
    
    if (stat.isDirectory()) {
      // Recursively upload directory contents
      await uploadDir(client, localFile, remoteFile);
    } else {
      console.log(`  [UP] ${remoteFile}`);
      await client.uploadFrom(localFile, remoteFile);
    }
  }
}

async function deploy() {
  const client = new Client();
  
  try {
    // Generate index.html based on actual assets
    await generateIndexHtml(LOCAL_DIR);
    
    console.log('[...] Connecting to Hostinger FTP...');
    await client.access({
      host: FTP_HOST,
      user: FTP_USER,
      password: FTP_PASS,
      port: FTP_PORT,
    });
    
    console.log(`[...] Uploading to ${REMOTE_DIR}...`);
    await uploadDir(client, LOCAL_DIR, REMOTE_DIR);
    
    console.log('[OK] Deploy complete!');
    process.exit(0);
  } catch (err) {
    console.error('[ERROR] Deploy failed:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
