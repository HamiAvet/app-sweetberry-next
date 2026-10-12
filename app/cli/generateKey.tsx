// Import the crypto module for generating random bytes
import crypto from "crypto";

// Function to generate a random 32-byte hexadecimal key
export default function generateKey() {
    // Generate and return the random key
    return crypto.randomBytes(32).toString("hex");
}