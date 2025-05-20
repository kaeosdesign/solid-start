import { drizzle } from 'drizzle-orm/d1';
import { getRequestEvent } from "solid-js/web";
import Database from 'better-sqlite3';
import { drizzle as drizzleSqlite } from 'drizzle-orm/better-sqlite3';

export async function getDb() {
  if (process.env.NODE_ENV === 'development') {
    const sqliteDb = new Database('./dev.sqlite');
    return drizzleSqlite(sqliteDb) as any;
  }
  const event = getRequestEvent();
  if (!event) {
    throw new Error("getDb must be called in a request context");
  }
  
  // Access the D1 database binding from the Cloudflare environment
  let DB;
  
  try {
    // Handle case where cloudflare context might not exist
    const nativeEvent = event.nativeEvent as any;
    const cloudflareContext = nativeEvent?.context?.cloudflare as any;
    
    if (!cloudflareContext) {
      console.log('Cloudflare context not found in event. This might be a development environment.');
      
      // Try to access DB from process.env in development mode
      if (process.env.D1_DATABASE_ID) {
        console.log('D1_DATABASE_ID found in environment variables:', process.env.D1_DATABASE_ID);
        console.log('Using development mode database. Make sure migrations are applied.');
        
        // In development mode with vinxi, the DB should be injected by the server.js middleware
        // We'll check if it's available in the event object directly
        if (nativeEvent?.env?.DB) {
          console.log('Found DB in nativeEvent.env');
          DB = nativeEvent.env.DB;
        } else {
          console.log('DB not found in expected locations. This is expected in development mode.');
          console.log('The server.js middleware should handle DB injection.');
        }
      }
    } else {
      // Debug the structure of the event with cloudflare context
      console.log('Request event structure:', {
        hasEnv: !!cloudflareContext.env,
        hasPlatform: !!cloudflareContext.platform,
        hasContext: !!cloudflareContext.context,
        envKeys: cloudflareContext.env ? Object.keys(cloudflareContext.env) : [],
        platformEnvKeys: cloudflareContext.platform?.env ? Object.keys(cloudflareContext.platform.env) : [],
        contextEnvKeys: cloudflareContext.context?.env ? Object.keys(cloudflareContext.context.env) : []
      });
      
      // Try to access the DB binding from different possible locations
      if (cloudflareContext.env?.DB) {
        console.log('Found DB in event.nativeEvent.context.cloudflare.env');
        DB = cloudflareContext.env.DB;
      } else if (cloudflareContext.platform?.env?.DB) {
        console.log('Found DB in event.nativeEvent.context.cloudflare.platform.env');
        DB = cloudflareContext.platform.env.DB;
      } else if (cloudflareContext.context?.env?.DB) {
        console.log('Found DB in event.nativeEvent.context.cloudflare.context.env');
        DB = cloudflareContext.context.env.DB;
      }
    }
    
    // If DB is still not found, try one last approach for development mode
    if (!DB && process.env.D1_DATABASE_ID) {
      console.log('Attempting to use development mode fallback for D1');
      
      // In development, we'll rely on the server.js middleware to inject the DB
      // This is just a placeholder to avoid errors during initialization
      DB = { exec: async () => ({ results: [] }) };
    }
    
    if (!DB) {
      console.error("D1 database binding not found in any expected location");
      throw new Error("D1 database binding not found in environment");
    }
  } catch (error) {
    console.error("Error accessing DB binding:", error);
    throw new Error("Failed to access D1 database binding");
  }
  
  return drizzle(DB);
}

export const db = {
  select: () => getDb().then(db => db.select()),
  insert: (table: any) => getDb().then(db => db.insert(table)),
  update: (table: any) => getDb().then(db => db.update(table)),
  delete: (table: any) => getDb().then(db => db.delete(table)),
};
