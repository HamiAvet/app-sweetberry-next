"use client";

// Import React hooks
import { useState } from "react";

// Import custom hooks
import useLanguage from "@/app/hooks/useLanguage";

// Import UI components
import Navbar from "@/app/ui/navbar";

// Import icons from lucide-react
import { UserRound, Mail, Lock, MoveRight, Eye, EyeClosed } from "lucide-react";


// Login page component
export default function Login() {
    // Get the current language from the custom hook
    const language = useLanguage();

    // State for handling hover effects on links and buttons
    const [isLink1Hovering, setIsLink1Hovering] = useState(false);
    const [isLink2Hovering, setIsLink2Hovering] = useState(false);
    const [isLink3Hovering, setIsLink3Hovering] = useState(false);

    const [isButtonHovering, setIsButtonHovering] = useState(false);

    // State for handling password visibility toggle
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // State for handling confirm password visibility toggle
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // Render the login page UI
    return (
        <div>
            <Navbar />
            <main className="flex flex-col min-h-screen items-center justify-start bg-[#FCE9EA]">
                <header className="flex flex-col items-center justify-center gap-8 w-full md:flex-row">
                    <div className="flex flex-col items-center justify-center gap-4 w-full xs:w-1/2 px-4 md:pt-8 pt-24 md:h-screen">
                        <div className="bg-[#FCE9EA] border border-[#D64C5A4C] px-8 py-4 mt-12 rounded-lg">
                            <div className="relative text-center">
                                <h3 className="text-sm xs:text-lg xl:text-xl mb-4 font-dm-serif-display text-[#D64C5A] tracking-widest">
                                    {language === "fr" ? "Rejoignez Sweetberry" :
                                    language === "es" ? "¡Únete a Sweetberry!" :
                                    language === "de" ? "Treten Sie Sweetberry bei" :
                                    language === "it" ? "Unisciti a Sweetberry" :
                                    language === "ru" ? "Присоединяйтесь к Sweetberry" :
                                    "Join Sweetberry!"}
                                </h3>
                                <h1 className="text-4xl xs:text-5xl xl:text-7xl font-medium mt-4 mb-4 font-cormorant-garamond text-[#0B0001]">
                                    {language === "fr" ? "Inscription" :
                                    language === "es" ? "Registrarse" :
                                    language === "de" ? "Registrieren" :
                                    language === "it" ? "Iscriviti" :
                                    language === "ru" ? "Зарегистрироваться" :
                                    "Sign Up"}
                                </h1>
                                <span className="absolute left-0 right-0 h-0.5 origin-center scale-x-50 rounded-full bg-[#DE5260]"></span>
                                <p className="text-base xs:text-lg xl:text-xl text-center font-light font-inter text-[#0B0001] max-w-full mt-8">
                                    {language === "fr" ? "Créez votre compte et profitez de la douceur!" :
                                    language === "es" ? "¡Crea tu cuenta y disfruta de la dulzura!" :
                                    language === "de" ? "Erstellen Sie Ihr Konto und genießen Sie die Süße!" :
                                    language === "it" ? "Crea il tuo account e goditi la dolcezza!" :
                                    language === "ru" ? "Создайте учетную запись и наслаждайтесь сладостью!" :
                                    "Create your account and enjoy the sweetness!"}
                                </p>
                            </div>
                            <div className="mt-8">
                                <form className="space-y-6">
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
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-200"
                                            />
                                        </div>
                                    </div>
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
                                        <Mail
                                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                size={18}
                                                aria-hidden="true"
                                            />
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                placeholder={language === "fr" ? "Adresse e-mail" :
                                                language === "es" ? "Correo electrónico" :
                                                language === "de" ? "E-Mail-Adresse" :
                                                language === "it" ? "Indirizzo email" :
                                                language === "ru" ? "Электронная почта" :
                                                "Email"}
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-200"
                                            />
                                        </div>
                                    </div>
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
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-300 ease-in-out"
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
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === "fr" ? "Confirmer votre mot de passe" :
                                            language === "es" ? "Confirmar contraseña" :
                                            language === "de" ? "Passwort bestätigen" :
                                            language === "it" ? "Conferma password" :
                                            language === "ru" ? "Подтвердите пароль" :
                                            "Confirm Password"}
                                        </label>
                                        <div className="relative mt-1">
                                            <Lock
                                                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                size={18}
                                                aria-hidden="true"
                                            />
                                            <input
                                                id="confirm-password"
                                                name="confirm-password"
                                                type={isPasswordVisible ? "text" : "password"}
                                                autoComplete="current-password"
                                                required
                                                placeholder={language === "fr" ? "Confirmer votre mot de passe" :
                                                language === "es" ? "Confirmar contraseña" :
                                                language === "it" ? "Conferma password" :
                                                language === "ru" ? "Подтвердите пароль" :
                                                "Confirm Password"}
                                                className="bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-300 ease-in-out"
                                            />
                                            {!isConfirmPasswordVisible ? (
                                                <Eye
                                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-700"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsConfirmPasswordVisible(true)}
                                                />
                                            ) : (
                                                <EyeClosed
                                                    className="cursor-pointer absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 text-text-gray-700"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsConfirmPasswordVisible(false)}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end mb-4">
                                        <input type="checkbox" id="remember-me" name="remember-me" className="mr-2 h-4 w-4 accent-[#D64C5A] cursor-pointer focus:ring-2 focus:ring-[#D64C5A]/40" />
                                        <label htmlFor="remember-me" className="text-sm font-medium text-gray-700">
                                            {language === "fr" ? (
                                                <span className="flex gap-1 text-sm">J'accepte les 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">conditions d'utilisation</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    et la 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">politique de confidentialité</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>) :
                                            language === "es" ? (
                                                <span className="flex gap-1 text-sm">Acepto los 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">términos y condiciones</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    y la 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">política de privacidad</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "de" ? (
                                                <span className="flex gap-1 text-sm">Ich akzeptiere die 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">Allgemeinen Geschäftsbedingungen</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    und die 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">Datenschutzrichtlinie</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "it" ? (
                                                <span className="flex gap-1 text-sm">Accetto i 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">termini e condizioni</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    e la 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">politica sulla privacy</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "ru" ? (
                                                <span className="flex gap-1 text-sm">Я принимаю 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">условия использования</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    и 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">политику конфиденциальности</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            (
                                                <span className="flex gap-1 text-sm">I accept the 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">terms of use</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    and the 
                                                    <div className="relative text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#D64C5A]">privacy policy</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            type="submit"
                                            className="relative w-full bg-[#D64C5A] hover:bg-[#D73545] py-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out"
                                            onMouseEnter={() => setIsButtonHovering(true)} onMouseLeave={() => setIsButtonHovering(false)}
                                        >
                                            <p className="text-white text-xl font-medium">
                                                {language === "fr" ? "S'inscrire" :
                                                language === "es" ? "Registrarse" :
                                                language === "de" ? "Registrieren" :
                                                language === "it" ? "Iscriviti" :
                                                language === "ru" ? "Зарегистрироваться" :
                                                "Sign Up"}
                                            </p>
                                            <MoveRight className={`absolute right-5 top-1/2 transform -translate-y-1/2 text-white transition duration-300 ease-in-out ${isButtonHovering ? 'translate-x-2' : ''}`} />
                                        </button>
                                    </div>
                                </form>
                                <div className="w-full">
                                    <div className="flex items-center justify-between h-10">
                                        <span className="text-sm bg-[#b09393ab] h-px w-[45%]"></span>
                                        <p className="flex items-center justify-center text-sm text-[#b09393cf] w-[10%] h-px">ou</p>
                                        <span className="text-sm bg-[#ac9999ed] h-px w-[45%]"></span>
                                    </div>
                                    <div className="w-full flex justify-center gap-1 mb-4">
                                        <p className="text-md text-[#0B0001] text-center">
                                            {language === "fr" ? "Vous avez déjà un compte ?" :
                                            language === "es" ? "¿Ya tienes una cuenta?" :
                                            language === "de" ? "Haben Sie bereits ein Konto?" :
                                            language === "it" ? "Hai già un account?" :
                                            language === "ru" ? "У вас уже есть аккаунт?" :
                                            "Already have an account?"}
                                        </p>
                                        <div className="relative" onMouseEnter={() => setIsLink3Hovering(true)} onMouseLeave={() => setIsLink3Hovering(false)}>
                                            <a href="/login" className="text-[#D64C5A] text-md font-medium cursor-pointer transition-all duration-300 ease-in-out">
                                                {language === "fr" ? "Se connecter" :
                                                language === "es" ? "Iniciar sesión" :
                                                language === "de" ? "Anmelden" :
                                                language === "it" ? "Accedi" :
                                                language === "ru" ? "Войти" :
                                                "Sign In"}
                                            </a>
                                            <span className={`absolute right-0 bottom-0 h-0.5 w-${isLink3Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-3/4 md:h-screen w-full h-50 bg-[url(/images/background.png)] bg-cover bg-center"></div>
                </header>
            </main>
        </div>
    );
}