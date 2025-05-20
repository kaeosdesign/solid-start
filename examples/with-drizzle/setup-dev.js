#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Setting up development environment...');

// Create .dev.vars file if it doesn't exist
if (!fs.existsSync('.dev.vars')) {
  console.log('Creating .dev.vars file...');
  fs.writeFileSync('.dev.vars', 'SESSION_SECRET=supersecretkeyforsessionmanagement\n');
}

// Create the migrations directory if it doesn't exist
if (!fs.existsSync('drizzle/migrations')) {
  fs.mkdirSync('drizzle/migrations', { recursive: true });
}

// Create the initial migration if it doesn't exist
const migrationFile = path.join('drizzle/migrations', '0000_initial.sql');
if (!fs.existsSync(migrationFile)) {
  console.log('Creating initial migration file...');
  fs.writeFileSync(
    migrationFile,
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

try {
  // Apply migrations to local D1 database
  console.log('Applying migrations to local D1 database...');
  execSync('npx wrangler d1 migrations apply solid-drizzle-db --local', { stdio: 'inherit' });
  
  console.log('\nDevelopment environment setup complete!');
  console.log('\nTo run the development server with hot reload:');
  console.log('npm run dev');
  
} catch (error) {
  console.error('Error setting up development environment:', error);
  process.exit(1);
} 