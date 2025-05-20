#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Database ID from wrangler.toml or environment
const DB_ID = process.env.D1_DATABASE_ID || 'deb3c5a5-0e39-499d-ae4d-fef017c933ec';

// Ensure migrations directory exists
if (!fs.existsSync('drizzle/migrations')) {
  console.log('Creating migrations directory...');
  fs.mkdirSync('drizzle/migrations', { recursive: true });
}

// Ensure initial migration exists
const initialMigrationFile = 'drizzle/migrations/0000_initial.sql';
if (!fs.existsSync(initialMigrationFile)) {
  console.log('Creating initial migration...');
  fs.writeFileSync(
    initialMigrationFile,
    `CREATE TABLE users (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  username TEXT NOT NULL DEFAULT '',
  password TEXT NOT NULL DEFAULT ''
);

INSERT INTO users (username, password)
VALUES (
    'kody',
    'twixrox'
  );`
  );
}

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
  console.log('Using D1 database ID:', DB_ID);
  
  // Start the development server with vinxi
  const devProcess = spawn('npx', ['vinxi', 'dev'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      WRANGLER: 'true',
      D1_DATABASE_ID: DB_ID,
    }
  });
  
  devProcess.on('close', (code) => {
    process.exit(code);
  });
}); 