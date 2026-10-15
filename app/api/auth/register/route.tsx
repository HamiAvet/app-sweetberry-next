// Import next server response module
import { NextResponse } from "next/server";

// Import generateKey function from CLI module
import generateKey from "@/app/cli/generateKey";

// import addUser function from usersDataUtils module
import { addUser } from "@/app/lib/usersDataUtils";

// Handle POST request for user registration
export async function POST(request: Request) {
    try {
        // Parse the incoming JSON data from the request body
        const data = await request.json();

        // Initialize an error object to store validation errors for each field
        const errors = {
            usernameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
            aggregateError: ""
        };

        // Initialize the attempt count for generating a unique user ID
        let attemptCount = 0;

        // Determine the language for error messages based on the incoming data
        const language = data.language || 'en';

        // Validate the username field
        if (!data.username) {
            // If the username is not provided, set the appropriate error message based on the language
            errors.usernameError = language === "fr" ? "Le nom d'utilisateur est requis" :
                                  language === "es" ? "Se requiere nombre de usuario" :
                                  language === "de" ? "Benutzername ist erforderlich" :
                                  language === "it" ? "Nome utente richiesto" :
                                  language === "ru" ? "Требуется имя пользователя" :
                                  "Username is required";
        }

        // Validate the email field
        if (!data.email) {
            // If the email is not provided, set the appropriate error message based on the language
            errors.emailError = language === "fr" ? "L'email est requis" :
                               language === "es" ? "Se requiere correo electrónico" :
                               language === "de" ? "E-Mail ist erforderlich" :
                               language === "it" ? "Email richiesta" :
                               language === "ru" ? "Требуется электронная почта" :
                               "Email is required";
        }

        // Validate the password field
        if (!data.password) {
            // If the password is not provided, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe est requis" :
                                 language === "es" ? "Se requiere contraseña" :
                                 language === "de" ? "Passwort ist erforderlich" :
                                 language === "it" ? "Password richiesta" :
                                 language === "ru" ? "Требуется пароль" :
                                 "Password is required";
        }

        // Validate the confirm password field
        if (!data.confirmPassword) {
            // If the confirm password is not provided, set the appropriate error message based on the language
            errors.confirmPasswordError = language === "fr" ? "Veuillez confirmer votre mot de passe" :
                                        language === "es" ? "Por favor confirme su contraseña" :
                                        language === "de" ? "Bitte bestätigen Sie Ihr Passwort" :
                                        language === "it" ? "Si prega di confermare la password" :
                                        language === "ru" ? "Пожалуйста, подтвердите ваш пароль" :
                                        "Please confirm your password";
        }

        // Check if the password and confirm password fields match
        if (data.password && data.confirmPassword && data.password !== data.confirmPassword) {
            // If the password and confirm password do not match, set the appropriate error message based on the language
            errors.confirmPasswordError = language === "fr" ? "Les mots de passe ne correspondent pas" :
                                        language === "es" ? "Las contraseñas no coinciden" :
                                        language === "de" ? "Passwörter stimmen nicht überein" :
                                        language === "it" ? "Le password non corrispondono" :
                                        language === "ru" ? "Пароли не совпадают" :
                                        "Passwords do not match";
        }

        // If there are any validation errors, return a 400 response with the error messages
        if (errors.usernameError || errors.emailError || errors.passwordError || errors.confirmPasswordError) {
            // Return a 400 response with the error messages if validation fails
            return NextResponse.json({ message: "Registration failed", error: errors }, { status: 400 });
        }

        /* 
            The id generation and this validation may be replaced with a more robust mechanism 
            or with auto-incrementing IDs in the future.
        */

        // Attempt to register the user up to 3 times with a unique user ID
        for (let attemptCount = 0; attemptCount < 3; attemptCount++) {
            // Generate a unique user ID for this registration attempt
            data.userId = generateKey();

            // Attempt to add the user to the database with the generated user ID
            const result = await addUser(data);

            // Check if the user was successfully added to the database
            if (!(result instanceof Error)) {
                return NextResponse.json({ message: "Registration successful" }, { status: 201 });
            }

            // Handle specific database errors related to unique constraints
            if (result.message.includes("users_username_key")) {
                errors.usernameError = "Username already taken";
                return NextResponse.json({ message: "Registration failed", error: errors }, { status: 400 });
            }

            // Handle specific database errors related to unique constraints for the email field
            if (result.message.includes("users_email_key")) {
                errors.emailError = "Email already in use";
                return NextResponse.json({ message: "Registration failed", error: errors }, { status: 400 });
            }

            // If the error is not related to the primary key constraint, return a generic database error
            if (!result.message.includes("users_pkey")) {
                return NextResponse.json({ message: "Registration failed", error: "Database error" }, { status: 500 });
            }
        }
        // Return a generic error response if all attempts to register the user fail
        return NextResponse.json({ message: "Registration failed", error: "Unable to generate a unique user ID" }, { status: 500 });
    } catch (error) {
        // Return a 500 response if an unexpected error occurs during registration
        return NextResponse.json({ message: "Registration failed", error: String(error) }, { status: 500 });
    }
}