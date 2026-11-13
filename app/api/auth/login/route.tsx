// Import next server response module
import { NextResponse } from "next/server";
import { getUserByUsername } from "@/app/lib/userDataUtils";
import { verifyPassword } from "@/app/lib/passwordUtils";
import type { User } from "@/app/type/data";
import useLanguage from "@/app/hooks/useLanguage";

// Define the POST request handler for login
export async function POST(request: Request) {
    try {
        const data = await request.json();

        const error = {
            usernameError: "",
            passwordError: ""
        };

        const language = useLanguage();

        if (!data.username) {
            error.usernameError = language == "fr" ? "Nom d'utilisateur requis" : 
            language == "es" ? "Nombre de usuario requerido" : 
            language == "de" ? "Benutzername erforderlich" :
            language == "it" ? "Nome utente richiesto" :
            language == "ru" ? "Имя пользователя обязательно" :
            "Username is required";
        }
        if (!data.password) {
            error.passwordError = language == "fr" ? "Mot de passe requis" : 
            language == "es" ? "Contraseña requerida" : 
            language == "de" ? "Passwort erforderlich" :
            language == "it" ? "Password richiesta" :
            language == "ru" ? "Требуется пароль" :
            "Password is required";
        }

        if (error.usernameError || error.passwordError) {
            return NextResponse.json({ success: false, error }, { status: 400 });
        }

        const result = await getUserByUsername(data.username) as User;

        console.log(result);

        if (!result) {
            error.usernameError = "User not found";
        }

        if (!verifyPassword(data.password, result.password)) {
            error.passwordError = "Invalid password";
        }

        if (error.usernameError || error.passwordError) {
            return NextResponse.json({ success: false, error }, { status: 400 });
        }


        // Return a response
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error: (error as Error).message });
    }
}