// Import next server response module
import { NextResponse } from "next/server";

// Import generateKey function from CLI module
import generateKey from "@/app/cli/generateKey";

// import addUser function from usersDataUtils module
import { addUser } from "@/app/lib/userDataUtils";

// Import setUserSession function from sessionUtils module
import { setUserSession } from "@/app/lib/sessionUtils";

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
            agreementError: ""
        };

        // Determine the language for error messages based on the incoming data
        const language = data.language || 'en';

        // Verify the username field
        if (!data.username) {
            // If the username is not provided, set the appropriate error message based on the language
            errors.usernameError = language === "fr" ? "Le nom d'utilisateur est requis" :
                                  language === "es" ? "Se requiere nombre de usuario" :
                                  language === "de" ? "Benutzername ist erforderlich" :
                                  language === "it" ? "Nome utente richiesto" :
                                  language === "ru" ? "Требуется имя пользователя" :
                                  "Username is required";
        }

        // Verify the email field
        if (!data.email) {
            // If the email is not provided, set the appropriate error message based on the language
            errors.emailError = language === "fr" ? "L'email est requis" :
                               language === "es" ? "Se requiere correo electrónico" :
                               language === "de" ? "E-Mail ist erforderlich" :
                               language === "it" ? "Email richiesta" :
                               language === "ru" ? "Требуется электронная почта" :
                               "Email is required";
        } else if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            // If the email is not valid, set the appropriate error message based on the language
            errors.emailError = language === "fr" ? "L'email n'est pas valide" :
                               language === "es" ? "Correo electrónico no válido" :
                               language === "de" ? "Ungültige E-Mail" :
                               language === "it" ? "Email non valida" :
                               language === "ru" ? "Неверный адрес электронной почты" :
                               "Email is not valid";
        }

        // Verify the password field
        if (!data.password) {
            // If the password is not provided, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe est requis" :
                                 language === "es" ? "Se requiere contraseña" :
                                 language === "de" ? "Passwort ist erforderlich" :
                                 language === "it" ? "Password richiesta" :
                                 language === "ru" ? "Требуется пароль" :
                                 "Password is required";
        } else if (data.password && data.password.length < 8) {
            // If the password is too short, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe doit contenir au moins 8 caractères" :
                                 language === "es" ? "La contraseña debe tener al menos 8 caracteres" :
                                 language === "de" ? "Das Passwort muss mindestens 8 Zeichen lang sein" :
                                 language === "it" ? "La password deve contenere almeno 8 caratteri" :
                                 language === "ru" ? "Пароль должен содержать не менее 8 символов" :
                                 "Password must be at least 8 characters long";
        } else if (data.password && !/[A-Z]/.test(data.password)) {
            // If the password does not contain an uppercase letter, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe doit contenir au moins une lettre majuscule" :
                                 language === "es" ? "La contraseña debe contener al menos una letra mayúscula" :
                                 language === "de" ? "Das Passwort muss mindestens einen Großbuchstaben enthalten" :
                                 language === "it" ? "La password deve contenere almeno una lettera maiuscola" :
                                 language === "ru" ? "Пароль должен содержать как минимум одну заглавную букву" :
                                 "Password must contain at least one uppercase letter";
        } else if (data.password && !/[0-9]/.test(data.password)) {
            // If the password does not contain a number, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe doit contenir au moins un chiffre" :
                                 language === "es" ? "La contraseña debe contener al menos un número" :
                                 language === "de" ? "Das Passwort muss mindestens eine Zahl enthalten" :
                                 language === "it" ? "La password deve contenere almeno un numero" :
                                 language === "ru" ? "Пароль должен содержать как минимум одну цифру" :
                                 "Password must contain at least one number";
        } else if (data.password && !/[a-z]/.test(data.password)) {
            // If the password does not contain a lowercase letter, set the appropriate error message based on the language
            errors.passwordError = language === "fr" ? "Le mot de passe doit contenir au moins une lettre minuscule" :
                                 language === "es" ? "La contraseña debe contener al menos una letra minúscula" :
                                 language === "de" ? "Das Passwort muss mindestens einen Kleinbuchstaben enthalten" :
                                 language === "it" ? "La password deve contenere almeno una lettera minuscola" :
                                 language === "ru" ? "Пароль должен содержать как минимум одну строчную букву" :
                                 "Password must contain at least one lowercase letter";
        }

        // Verify the confirm password field
        if (!data.confirmPassword) {
            // If the confirm password is not provided, set the appropriate error message based on the language
            errors.confirmPasswordError = language === "fr" ? "Veuillez confirmer votre mot de passe" :
                                        language === "es" ? "Por favor confirme su contraseña" :
                                        language === "de" ? "Bitte bestätigen Sie Ihr Passwort" :
                                        language === "it" ? "Si prega di confermare la password" :
                                        language === "ru" ? "Пожалуйста, подтвердите ваш пароль" :
                                        "Please confirm your password";
        }
        
        // Verify the aggregate field
        if (data.agreement != 'on') {
            // If the agreement field is not checked, set the appropriate error message based on the language
            errors.agreementError = language === "fr" ? "Veuillez cocher cette case" :
                                    language === "es" ? "Por favor marque esta casilla" :
                                    language === "de" ? "Bitte dieses Feld markieren" :
                                    language === "it" ? "Campo richiesto" :
                                    language === "ru" ? "Пожалуйста, отметьте это поле" :
                                    "Please check this box";
        }

        // Verify the password and confirm password fields matching
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
        if (errors.usernameError || errors.emailError || errors.passwordError || errors.confirmPasswordError || errors.agreementError) {
            // Return a 400 response with the error messages if validation fails
            return NextResponse.json({ message: "Registration failed", errors: errors }, { status: 400 });
        }

        
        //The id generation and this validation may be replaced with a more robust mechanism 
        //or with auto-incrementing IDs in the future.
        

        // Attempt to register the user up to 3 times with a unique user ID
        for (let attemptCount = 0; attemptCount < 3; attemptCount++) {
            // Generate a unique user ID for this registration attempt
            data.userId = generateKey();

            // Attempt to add the user to the database with the generated user ID
            const result = await addUser(data);

            // Check if the user was successfully added to the database
            if (!(result instanceof Error)) {
                // Set the user session upon successful registration
                await setUserSession(data.userId);

                // Return a successful registration response
                return NextResponse.json({ message: "Registration successful" }, { status: 201 });
            }

            // Handle specific database errors related to unique constraints
            if (result.message.includes("users_username_key")) {
                // Set the appropriate error message for the username conflict based on the user's language preference
                errors.usernameError = language === "fr" ? "Nom d'utilisateur déjà pris" :
                                        language === "es" ? "Nombre de usuario ya en uso" :
                                        language === "de" ? "Benutzername bereits vergeben" :
                                        language === "it" ? "Nome utente già in uso" :
                                        language === "ru" ? "Имя пользователя уже занято" :
                                        "Username already taken";

                // Return a response indicating the registration failed due to a username conflict
                return NextResponse.json({ message: "Registration failed", errors: errors }, { status: 400 });
            }

            // Handle specific database errors related to unique constraints for the email field
            if (result.message.includes("users_email_key")) {
                // Set the appropriate error message for the email conflict based on the user's language preference
                errors.emailError = language === "fr" ? "Email déjà utilisé" :
                                    language === "es" ? "Correo electrónico ya en uso" :
                                    language === "de" ? "E-Mail bereits verwendet" :
                                    language === "it" ? "Email già in uso" :
                                    language === "ru" ? "Электронная почта уже используется" :
                                    "Email already in use";
                // Return a response indicating the registration failed due to an email conflict
                return NextResponse.json({ message: "Registration failed", errors: errors }, { status: 400 });
            }

            // If the error is not related to the primary key constraint, return a generic database error
            if (!result.message.includes("users_pkey")) {
                // Return a generic database error if the error is not related to the primary key constraint
                return NextResponse.json({ message: "Registration failed", errors: { aggregateError: "Database error" } }, { status: 500 });
            }
        }

        // Return a generic error response if all attempts to register the user fail due to inability to generate a unique user ID
        return NextResponse.json({ message: "Registration failed", errors: { aggregateError: "Unable to generate a unique user ID" } }, { status: 500 });
    } catch (error) {
        // Return a 500 response if an unexpected error occurs during registration
        return NextResponse.json({ message: "Registration failed", errors: { aggregateError: String(error) } }, { status: 500 });
    }
}