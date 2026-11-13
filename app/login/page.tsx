"use client";

// Import React hooks
import { useState } from "react";

// Import types for login errors
import type { LoginErrors } from "@/app/type/errors";

// Import custom hooks
import useLanguage from "@/app/hooks/useLanguage";

// Import UI components
import Navbar from "@/app/ui/navbar";

// Import icons from lucide-react
import { UserRound, Lock, MoveRight, Eye, EyeClosed, CircleAlert } from "lucide-react";


// Login page component
export default function Login() {
    // Get the current language from the custom hook
    const language = useLanguage();

    // State for handling hover effects on links and buttons
    const [isLinkHovering, setIsLinkHovering] = useState(false);
    const [isButtonHovering, setIsButtonHovering] = useState(false);

    // State for handling password visibility toggle
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // State for handling form errors
    const [errors, setErrors] = useState<LoginErrors>({
        usernameError: "",
        passwordError: ""
    });

    const handleFormSubmit = async (event: React.SubmitEvent) => {
        event.preventDefault();

        // Reset errors before submitting the form
        setErrors({
            usernameError: "",
            passwordError: ""
        });

        // Get form data
        const formData = new FormData(event.currentTarget as HTMLFormElement);
        
        // Convert form data to JSON
        const data = Object.fromEntries(formData);

        // Convert the form data object to a JSON string
        const JSONData = JSON.stringify(data);

        // Send the JSON data to the server via a POST request
        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        });

        const result = await response.json();
    };

    // Render the login page UI
    return (
        <div>
            <Navbar />
            <main className="flex flex-col min-h-screen items-center justify-start bg-[#FCE9EA]">
                <header className="flex flex-col-reverse items-center justify-center gap-8 w-full md:flex-row md:items-stretch md:gap-0">
                    <div className="flex flex-col items-center justify-center gap-4 w-full min-w-0 md:w-[45%] px-4 pt-0 pb-8 md:pt-28 md:min-h-screen">
                        <div className="w-full max-w-xl bg-[#FCE9EA] border border-[#D64C5A4C] px-8 py-4 rounded-lg">
                            <div className="relative text-center">
                                <h3 className="text-sm xs:text-lg xl:text-xl mb-4 font-dm-serif-display text-[#D64C5A] tracking-widest">
                                    {language === "fr" ? "Bienvenue à nouveau chez Sweetberry" :
                                    language === "es" ? "Bienvenido de nuevo a Sweetberry" :
                                    language === "de" ? "Willkommen zurück bei Sweetberry" :
                                    language === "it" ? "Bentornato a Sweetberry" :
                                    language === "ru" ? "С возвращением в Sweetberry" :
                                    "Welcome back to Sweetberry"}
                                </h3>
                                <h1 className="text-4xl xs:text-5xl xl:text-7xl font-medium mt-4 mb-4 font-cormorant-garamond text-[#0B0001]">
                                    {language === "fr" ? "Connexion" :
                                    language === "es" ? "Iniciar sesión" :
                                    language === "de" ? "Anmelden" :
                                    language === "it" ? "Accesso" :
                                    language === "ru" ? "Войти" :
                                    "Login"}
                                </h1>
                                <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-50 rounded-full bg-[#DE5260]"></span>
                                <p className="text-base xs:text-lg xl:text-xl text-center font-light font-inter text-[#0B0001] max-w-full mt-8">
                                    {language === "fr" ? "Retrouver vos douceurs préférées!" :
                                    language === "es" ? "¡Recupera tus dulces favoritos!" :
                                    language === "de" ? "Finden Sie Ihre Lieblingssüßigkeiten wieder!" :
                                    language === "it" ? "Ritrova i tuoi dolci preferiti!" :
                                    language === "ru" ? "Найдите свои любимые сладости!" :
                                    "Get back to your favorite sweets!"}
                                </p>
                            </div>
                            <div className="mt-8">
                                <form className="space-y-6" onSubmit={handleFormSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === "fr" ? "Nom d'utilisateur" :
                                            language === "es" ? "Nombre de usuario" :
                                            language === "de" ? "Benutzername" :
                                            language === "it" ? "Nome utente" :
                                            language === "ru" ? "Имя пользователя" :
                                            "Username"}
                                        </label>
                                        <div className="relative mt-1">
                                        <UserRound
                                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                size={18}
                                                aria-hidden="true"
                                            />
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                autoComplete="username"
                                                required
                                                placeholder={language === "fr" ? "Nom d'utilisateur" :
                                                language === "es" ? "Nombre de usuario" :
                                                language === "de" ? "Benutzername" :
                                                language === "it" ? "Nome utente" :
                                                language === "ru" ? "Имя пользователя" :
                                                "Username"}
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-6 focus:border-[#d64c5aa1] focus:outline-none transition duration-200"
                                            />
                                        </div>
                                    </div>
                                    {/* ADD THE ERROR MESSAGE HERE */}
                                    
                                    
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === "fr" ? "Mot de passe" :
                                            language === "es" ? "Contraseña" :
                                            language === "de" ? "Passwort" :
                                            language === "it" ? "Password" :
                                            language === "ru" ? "Пароль" :
                                            "Password"}
                                        </label>
                                        <div className="relative mt-1">
                                            <Lock
                                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                size={18}
                                                aria-hidden="true"
                                            />
                                            <input
                                                id="password"
                                                name="password"
                                                type={isPasswordVisible ? "text" : "password"}
                                                autoComplete="current-password"
                                                required
                                                placeholder={language === "fr" ? "Mot de passe" :
                                                language === "es" ? "Contraseña" :
                                                language === "de" ? "Passwort" :
                                                language === "it" ? "Password" :
                                                language === "ru" ? "Пароль" :
                                                "Password"}
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-12 focus:border-[#d64c5aa1] focus:outline-none transition duration-300 ease-in-out"
                                            />
                                            {!isPasswordVisible ? (
                                                <Eye
                                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsPasswordVisible(true)}
                                                />
                                            ) : (
                                                <EyeClosed
                                                    className="cursor-pointer absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 text-text-gray-700"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsPasswordVisible(false)}
                                                />
                                            )}
                                        </div>
                                        {/* ADD THE ERROR MESSAGE HERE */}
                                    </div>
                                    <div className="flex items-center justify-end mb-4">
                                        <div className="relative text-sm" onMouseEnter={() => setIsLinkHovering(true)} onMouseLeave={() => setIsLinkHovering(false)}>
                                            <a href="#" className="font-medium text-[#D64C5A]">
                                                {language === "fr" ? "Mot de passe oublié ?" :
                                                language === "es" ? "¿Olvidaste tu contraseña?" :
                                                language === "de" ? "Passwort vergessen?" :
                                                language === "it" ? "Hai dimenticato la password?" :
                                                language === "ru" ? "Забыли пароль?" :
                                                "Forgot your password?"}
                                            </a>
                                            <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLinkHovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                        </div>
                                    </div>
                                    {/* MAY ADD A "REMEMBER ME" CHECKBOX HERE */}
                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            className="relative w-full bg-[#D64C5A] hover:bg-[#D73545] py-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out"
                                            onMouseEnter={() => setIsButtonHovering(true)} onMouseLeave={() => setIsButtonHovering(false)}
                                        >
                                            <p className="text-white text-xl font-medium">
                                                {language === "fr" ? "Se connecter" :
                                                language === "es" ? "Iniciar sesión" :
                                                language === "de" ? "Anmelden" :
                                                language === "it" ? "Accedi" :
                                                language === "ru" ? "Войти" :
                                                "Sign In"}
                                            </p>
                                            <MoveRight className={`absolute hidden min-[290px]:inline right-5 top-1/2 transform -translate-y-1/2 text-white transition duration-300 ease-in-out ${isButtonHovering ? 'translate-x-2' : ''}`} />
                                        </button>
                                    </div>
                                </form>
                                <div className="w-full">
                                    <div className="flex items-center justify-between h-10">
                                        <span className="text-sm bg-[#b09393ab] h-px w-[45%]"></span>
                                        <p className="flex items-center justify-center text-sm text-[#b09393cf] w-[10%] h-px">ou</p>
                                        <span className="text-sm bg-[#ac9999ed] h-px w-[45%]"></span>
                                    </div>
                                    <p className="w-full mb-2 text-md text-[#0B0001] text-center">
                                        {language === "fr" ? "Pas encore de compte ?" :
                                        language === "es" ? "¿Aún no tienes una cuenta?" :
                                        language === "de" ? "Noch kein Konto?" :
                                        language === "it" ? "Non hai ancora un account?" :
                                        language === "ru" ? "Еще нет аккаунта?" :
                                        "Don't have an account yet?"}
                                    </p>
                                    <a href="/register" className="relative flex w-full items-center justify-center border border-[#D64C5A] text-[#D64C5A] text-xl font-medium py-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#bbadae16]">
                                        {language === "fr" ? "S'inscrire" :
                                        language === "es" ? "Registrarse" :
                                        language === "de" ? "Registrieren" :
                                        language === "it" ? "Iscriviti" :
                                        language === "ru" ? "Зарегистрироваться" :
                                        "Sign Up"}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative md:w-[55%] md:h-auto w-full h-80 bg-[url(/images/background.png)] bg-cover bg-center">
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none absolute bottom-0 left-0 h-12 w-full
                                bg-linear-to-b from-transparent to-[#FCE9EA]

                                md:inset-y-0 md:-left-px md:h-full md:w-30
                                md:bg-linear-to-r md:from-[#FCE9EA] md:from-10% md:to-transparent
                            "
                        />
                    </div>
                </header>
            </main>
        </div>
    );
}