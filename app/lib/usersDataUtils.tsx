// Import the postgres library for database interaction
import postgres from 'postgres';

// Import the User type for type checking
import type { User } from '@/app/type/data';

// Import the hashPassword function for password hashing
import { hashPassword } from '@/app/lib/passwordUtils';

// Get the database URL from the environment variables
const databaseUrl = process.env.POSTGRES_URL;

// Throw an error if the database URL is not defined
if (!databaseUrl) {
  throw new Error("POSTGRES_URL environment variable is not defined");
}

// Create a new postgres client using the database URL
const sql = postgres(databaseUrl);

// Function to add a new user to the database
export const addUser = async (user: User) => {
  try {
    // Destructure the user object to extract individual fields
    const { userId, username, email, password, language } = user;

    // Insert the new user into the database with the provided fields and hashed password
    const inserted = await sql`
      INSERT INTO users (userId, username, email, password, language)
      VALUES (${userId}, ${username}, ${email}, ${hashPassword(password)}, ${language})`;
    
    // Return the result of the insert operation
    return inserted;
  } catch (error) {
    // Return the error if the insert operation fails
    return error;
  }
};