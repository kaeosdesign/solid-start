# SolidStart with Drizzle ORM and Cloudflare D1

This example demonstrates how to use SolidStart with Drizzle ORM and Cloudflare D1 database in a Cloudflare Pages environment.

## Setup

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a D1 database (if not already done):
   ```
   npx wrangler d1 create solid-drizzle-db
   ```
4. Update the `wrangler.toml` file with your database ID
5. Run the setup script to prepare the local database:
   ```
   npm run setup
   ```

## Development

To start the development server with D1 database support:

```
npm run dev
```

This will:
1. Apply migrations to your local D1 database
2. Start the development server with the D1 binding available

## Database Schema

The database schema is defined in `drizzle/schema.ts` and includes:

- `Users` table with `id`, `username`, and `password` fields

## Deployment

To deploy to Cloudflare Pages:

1. Make sure your database migrations are applied to production:
   ```
   npm run db:push:prod
   ```

2. Deploy the application:
   ```
   npm run deploy
   ```

## How It Works

1. **Database Connection**: The application connects to Cloudflare D1 using Drizzle ORM in `src/api/db.ts`.

2. **Authentication**: Simple username/password authentication is implemented in `src/api/server.ts`.

3. **Cloudflare Integration**: The application is configured to work with Cloudflare Pages in `app.config.ts`.

## Troubleshooting

If you encounter issues with the D1 database binding not being found:

1. Make sure your `wrangler.toml` file has the correct database ID
2. Run `npm run setup` to ensure the local database is properly configured
3. Check the console logs for debugging information about the environment structure
