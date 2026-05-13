import Client from 'basic-ftp';
import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Load .env file
dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), '..', '.env') });

const FTP_HOST = process.env.FTP_HOST || '82.25.83.46';
const FTP_USER = process.env.FTP_USER || 'u814252648';
const FTP_PORT = parseInt(process.env.FTP_PORT || '21', 10);
const FTP_PASS = process.env.FTP_PASSWORD;
const REMOTE_DIR = process.env.FTP_DIR || 'public_html';
const LOCAL_DIR = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'client');

if (!FTP_PASS) {
  console.error('❌ Error: FTP_PASS environment variable not set');
  console.error('Usage: FTP_PASS=your_password npm run deploy');
  process.exit(1);
}

async function uploadDir(client, localPath, remotePath) {
  const files = readdirSync(localPath);
  
  for (const file of files) {
    const localFile = join(localPath, file);
    const remoteFile = `${remotePath}/${file}`;
    const stat = statSync(localFile);
    
    if (stat.isDirectory()) {
      try {
        await client.ensureDir(remoteFile);
      } catch (e) {
        // Dir may already exist
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
