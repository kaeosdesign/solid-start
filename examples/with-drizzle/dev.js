#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// First, ensure the database is migrated
console.log('Applying D1 migrations to local database...');
const migrateProcess = spawn('npx', ['wrangler', 'd1', 'migrations', 'apply', 'solid-drizzle-db', '--local'], {
  stdio: 'inherit',
  shell: true,
});

migrateProcess.on('close', (code) => {
  if (code !== 0) {
    console.error('Migration failed');
    process.exit(code);
  }
  
  console.log('Starting development server with vinxi...');
  
  // Start the development server with vinxi
  const devProcess = spawn('npx', ['vinxi', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      WRANGLER: 'true',
      D1_DATABASE_ID: 'deb3c5a5-0e39-499d-ae4d-fef017c933ec',
    }
  });
  
  devProcess.on('close', (code) => {
    process.exit(code);
  });
}); 