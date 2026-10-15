// Import the pbkdf2Sync function from the Node.js crypto module for password hashing
import { pbkdf2Sync } from "node:crypto";

// Get the salt key from the environment variables
const SALT_KEY = process.env.SALT_KEY ? process.env.SALT_KEY : "";

// Define the number of iterations for PBKDF2
const hashIterations = 100000;

// Function to hash a raw password using PBKDF2 with the salt key and defined iterations
export function hashPassword(rawPassword: string): string {
    // Hash the raw password using PBKDF2 with the salt key and defined iterations
    const hashedPassword = pbkdf2Sync(rawPassword, SALT_KEY, hashIterations, 64, "sha512");
    // Convert the hashed password to a hexadecimal string before returning
    return hashedPassword.toString("hex");
}

// Function to verify if an entered password matches the stored hash
export function verifyPassword(entredPassword: string, storedHash: string): boolean {
    // Hash the entered password using PBKDF2 with the salt key and defined iterations
    const hashedPassword = pbkdf2Sync(entredPassword, SALT_KEY, hashIterations, 64, "sha512");
    // Compare the hashed entered password with the stored hash
    return hashedPassword.toString("hex") === storedHash;
}