#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Setting up local D1 database for development...');

// Create the migrations directory if it doesn't exist
if (!fs.existsSync('drizzle/migrations')) {
  fs.mkdirSync('drizzle/migrations', { recursive: true });
}

// Create the initial migration if it doesn't exist
const migrationFile = path.join('drizzle/migrations', '0000_initial.sql');
if (!fs.existsSync(migrationFile)) {
  fs.writeFileSync(
    migrationFile,
    `CREATE TABLE users (
  id INTEGER PRIMARY KEY NOT NULL UNIQUE,
  username TEXT NOT NULL DEFAULT '',
  password TEXT NOT NULL DEFAULT ''
);`
  );
  console.log('Created initial migration file');
}

try {
  // Apply migrations to local D1 database
  console.log('Applying migrations to local D1 database...');
  execSync('npx wrangler d1 migrations apply solid-drizzle-db --local', { stdio: 'inherit' });
  
  console.log('\nLocal D1 database setup complete!');
  console.log('\nTo run the development server:');
  console.log('npm run dev');
  
} catch (error) {
  console.error('Error setting up local D1 database:', error);
  process.exit(1);
} 