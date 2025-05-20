// This file sets up the D1 database binding for development
import { createServer } from '@solidjs/start/server';

export default function (options) {
  return createServer({
    ...options,
    fetch: async (request, env, ctx) => {
      // Make sure the D1 database is available in the request context
      if (process.env.D1_DATABASE_ID && !env.DB) {
        try {
          // Create a D1 database binding if it doesn't exist
          const { D1Database } = await import('@cloudflare/workers-types');
          env.DB = new D1Database(process.env.D1_DATABASE_ID);
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