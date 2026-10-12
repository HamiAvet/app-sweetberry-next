import postgres from 'postgres';

const databaseUrl = process.env.POSTGRES_URL;

if (!databaseUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

const sql = postgres(databaseUrl);
