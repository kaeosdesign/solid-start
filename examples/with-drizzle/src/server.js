// This file sets up the D1 database binding for development
import { createServer } from '@solidjs/start/server';

export default function (options) {
  return createServer({
    ...options,
    fetch: async (request, env, ctx) => {
      // Make sure the D1 database is available in the request context
      if (process.env.D1_DATABASE_ID && !env.DB) {
        try {
          console.log('Creating D1 database binding with ID:', process.env.D1_DATABASE_ID);
          
          // In development mode, create a minimal mock D1 database
          // This will be replaced by Wrangler with the real D1 database
          env.DB = {
            prepare: (sql) => ({
              bind: () => ({
                all: async () => [],
                first: async () => null,
                raw: async () => null,
                run: async () => ({ success: true }),
              }),
              all: async () => [],
              first: async () => null,
              raw: async () => null,
              run: async () => ({ success: true }),
            }),
            batch: async (statements) => [],
            exec: async (sql) => ({ results: [], success: true }),
            dump: async () => new Uint8Array(),
          };
          
          console.log('Created development mode D1 database binding');
        } catch (error) {
          console.error('Failed to create D1 database binding:', error);
        }
      }
      
      // Log the available bindings for debugging
      console.log('Available bindings:', Object.keys(env));
      
      return options.fetch(request, env, ctx);
    }
  });
} 