import type { Config } from 'drizzle-kit';

export default {
  dialect: 'sqlite',
  schema: './drizzle/schema.ts',
  out: './drizzle/migrations/',
  driver: 'd1',
  dbCredentials: {
    wranglerConfigPath: 'wrangler.toml',
    dbName: 'DB'
  }
} satisfies Config;
