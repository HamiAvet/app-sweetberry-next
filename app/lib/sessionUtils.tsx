// Import all necessary modules for jose (JavaScript Object Signing and Encryption)
import * as jose from "jose";
import { cookies } from "next/headers";

// Import type definitions for the User object
import type { User } from "@/app/type/data.tsx"

// Get the secret session key from environment variables and encode it as a Uint8Array
const secret = new TextEncoder().encode(process.env.JOSE_SECRET);

// Get the issuer, audience, and expiration time from environment variables
const issuer = process.env.JOSE_ISSUER as string;
const audience = process.env.JOSE_AUDIENCE as string;
const expirationTime = Number(process.env.JOSE_EXPIRATION_TIME);

// Function to encode a user session into a JWT
export async function encodeUserSession(userId: User["userId"]) {
    // Attempt to create and encrypt a JWT for the given user ID
    try {
        // Create a new JWT with the user ID as the payload
        const jwt = await new jose.EncryptJWT({"userId": userId })
        .setProtectedHeader({ alg: process.env.JOSE_ALG as string, enc: process.env.JOSE_ENC as string })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime(`${expirationTime}s`)
        .encrypt(secret);
        
        // Return the encrypted JWT to the caller
        return jwt;
    } catch (error) {
        // Log the error and return it to the caller
        console.error("Error encoding user session:", error);
        return error;
    }
}

// Function to decode a user session from a JWT
export async function decodeUserSession(jwt: string) {
    // Attempt to decode the JWT and extract the user ID from the payload
    try {
        // Decrypt the JWT using the secret key and validate the issuer and audience
        const { payload } = await jose.jwtDecrypt(jwt, secret, {
            issuer: issuer,
            audience: audience,
        });

        // Extract the user ID from the payload
        const { userId : user } = payload;

        // Return the user ID to the caller
        return user;
    } catch (error) {
        if (error instanceof jose.errors.JWTExpired) {
            console.error("JWT has expired:", error);
            return null;
        }

        // Log the error and return it to the caller
        console.error("Error decoding user session:", error);
        return error;
    }
}

/* Test function to verify user session encoding and decoding
async function verifyUserSession() {
    const userId = "1";
    const valideJwtToken = await encodeUserSession(userId);
    const invalidJwtToken = await encodeUserSession("jfd2hrk");

    const user = await decodeUserSession(`${valideJwtToken}`);
    console.log(user, userId === user);
}

verifyUserSession().then(() => {
    console.log("User session verified successfully");
}).catch((error) => {
    console.error("Error verifying user session:", error);
});*/

export async function setUserSession(userId: User["userId"]) {
    // Attempt to set the user session by encoding the user ID into a JWT and storing it in a cookie
    try {
        // Encode the user ID into a new JWT session value
        const newSessionValue = await encodeUserSession(userId) as string;
        // Get the cookie store
        const cookieStore = await cookies(); 
        // Set the sessionId cookie
        cookieStore.set('sessionId', newSessionValue, {
            maxAge: expirationTime,
        });
    } catch (error) {
        // Log the error and return it to the caller
        console.error("Error setting user session:", error);
        return error;
    }
}

export async function getUserSession() {
    // Attempt to retrieve the user session from the cookie store
    try {
        // Get the cookie store
        const cookieStore = await cookies();

        // Get the sessionId cookie value
        const cookieSessionValue = cookieStore.get('sessionId')?.value;

        // If there is no session cookie, return null
        if (!cookieSessionValue) return null;

        // Decode the session cookie to extract the user ID
        const extractedUserId = await decodeUserSession(cookieSessionValue);

        // If the extracted user ID is not valid, return null
        if (!extractedUserId) return null;

        // Return the extracted user ID to the caller
        return extractedUserId;
    } catch (error) {
        // Log the error and return it to the caller
        console.error("Error getting user session:", error);
        return error;
    }
}