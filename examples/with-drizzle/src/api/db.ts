import { drizzle } from 'drizzle-orm/d1';
import { getRequestEvent } from "solid-js/web";

export function getDb() {
  const event = getRequestEvent();
  if (!event) {
    throw new Error("getDb must be called in a request context");
  }
  
  // Access the D1 database binding from the Cloudflare environment
  let DB;
  
  try {
    const nativeEvent = event.nativeEvent as any;
    
    // Debug the structure of the event
    console.log('Request event structure:', {
      hasEnv: !!nativeEvent.env,
      hasPlatform: !!nativeEvent.platform,
      hasContext: !!nativeEvent.context,
      envKeys: nativeEvent.env ? Object.keys(nativeEvent.env) : [],
      platformEnvKeys: nativeEvent.platform?.env ? Object.keys(nativeEvent.platform.env) : [],
      contextEnvKeys: nativeEvent.context?.env ? Object.keys(nativeEvent.context.env) : []
    });
    
    // Try to access the DB binding from different possible locations
    if (nativeEvent.env?.DB) {
      console.log('Found DB in event.nativeEvent.env');
      DB = nativeEvent.env.DB;
    } else if (nativeEvent.platform?.env?.DB) {
      console.log('Found DB in event.nativeEvent.platform.env');
      DB = nativeEvent.platform.env.DB;
    } else if (nativeEvent.context?.env?.DB) {
      console.log('Found DB in event.nativeEvent.context.env');
      DB = nativeEvent.context.env.DB;
    } else {
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
  select: () => getDb().select(),
  insert: (table: any) => getDb().insert(table),
  update: (table: any) => getDb().update(table),
  delete: (table: any) => getDb().delete(table),
};
