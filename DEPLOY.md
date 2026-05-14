# Hostinger Deployment Guide

## Quick Deploy to Hostinger

This repo is configured to automatically build and deploy to your Hostinger account.

### Setup (One time only)

1. Get your FTP password from Hostinger hPanel:
   - Go to hPanel → Account → FTP/SFTP
   - Copy the password for user `u814252648`

2. Create a `.env` file in the project root:
   ```
   FTP_PASS=your_password_here
   ```

### Deploy

Run this command to build and upload to Hostinger:

```bash
npm run deploy
```

That's it! The script will:
- Build your site to `dist/client`
- Connect via FTP to `82.25.83.46`
- Upload everything to the FTP root for the account

### Files Deployed

Only the contents of `dist/client/` are uploaded. The `.htaccess` rewrite rules are already included for SPA routing.

### Troubleshooting

- **"FTP_PASS environment variable not set"** → Make sure `.env` has your FTP password
- **"Connection refused"** → Check your FTP password is correct
- **404 on routes** → The `.htaccess` rules in the FTP root handle SPA routing automatically
