"use client";

// Import React hooks
import { useState } from "react";

// Import type definitions for registration errors
import type { RegistrationErrors } from "@/app/type/errors";

// Import custom hooks
import useLanguage from "@/app/hooks/useLanguage";

// Import UI components
import Navbar from "@/app/ui/navbar";

// Import icons from lucide-react
import { UserRound, Mail, Lock, MoveRight, Eye, EyeClosed, CircleAlert } from "lucide-react";

// Registration page component
export default function Register() {
    // Get the current language from the custom hook
    const language = useLanguage();

    // State for handling hover effects on links and buttons
    const [isLink1Hovering, setIsLink1Hovering] = useState(false);
    const [isLink2Hovering, setIsLink2Hovering] = useState(false);
    const [isLink3Hovering, setIsLink3Hovering] = useState(false);

    // State for handling confirm password input
    const [isButtonHovering, setIsButtonHovering] = useState(false);

    // State for handling password visibility toggle
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    // State for handling confirm password visibility toggle
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // State for handling registration errors
    const [errors, setErrors] = useState<RegistrationErrors>({
        usernameError: "",
        emailError: "",
        passwordError: "",
        confirmPasswordError: "",
        agreementError: ""
    });

    // Handler for updating registration errors
    const handleFormSubmit = async (event: React.SubmitEvent) => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Optionally, you can set a loading state here to indicate that the form is being submitted

        // Clear previous errors before submitting the form
        setErrors({
            usernameError: "",
            emailError: "",
            passwordError: "",
            confirmPasswordError: "",
            agreementError: ""
        });
        
        try {
            // Get the form data from the submitted form
            const formData = new FormData(event.currentTarget as HTMLFormElement);

            // Append the user's language preference to the form data
            formData.append('language', language || 'en');

            // Convert the form data to a plain object for easier handling
            const data = Object.fromEntries(formData);

            // Convert the plain object to JSON for sending in the request body
            const JSONData = JSON.stringify(data);

            // Send the registration request to the server with the JSON data
            const response = await fetch("/api/auth/register", {
                // Specify the HTTP method for the registration request
                method: "POST",
                // Specify the headers for the registration request
                headers: {
                    "Content-Type": "application/json"
                },
                // Specify the body of the registration request
                body: JSONData
            });

            // Parse the JSON response from the server
            const result = await response.json();

            // Check the response status to determine if the registration was successful
            if (response.status === 201 || response.ok) {
                // Handle successful registration (e.g., redirect to login page or show success message)
                alert(language === "fr" ? "Inscription réussie !" :
                      language === "es" ? "¡Registro exitoso!" :
                      language === "de" ? "Erfolgreich registriert!" :
                      language === "it" ? "Registrazione riuscita!" :
                      language === "ru" ? "Регистрация прошла успешно!" :
                      "Registration successful!");
            } else {
                // Handle registration errors (e.g., display error messages to the user)
                if (result.errors) {
                    // If there are errors in the response, update the state with the error messages so they can be displayed to the user
                    setErrors({
                        usernameError: result.errors.usernameError || "",
                        emailError: result.errors.emailError || "",
                        passwordError: result.errors.passwordError || "",
                        confirmPasswordError: result.errors.confirmPasswordError || "",
                        agreementError: result.errors.agreementError || ""
                    });
                }
            }
        } catch (error) {
            // Handle any errors that occurred during the registration request
            console.error("Error submitting form:", error);
        }
    };

    // Render the registration page UI
    return (
        <div>
            <Navbar />
            <main className="flex flex-col min-h-screen items-center justify-start bg-[#FCE9EA]">
                <header className="flex flex-col-reverse items-center justify-center gap-8 w-full md:flex-row md:items-stretch md:gap-0">
                    <div className="flex flex-col items-center justify-center gap-4 w-full min-w-0 md:w-[45%] px-4 pt-0 pb-8 md:pt-28 md:min-h-screen">
                        <div className="w-full max-w-xl bg-[#FCE9EA] border border-[#D64C5A4C] px-8 py-4 rounded-lg">
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
                                                placeholder={language === "fr" ? "Nom d'utilisateur" :
                                                language === "es" ? "Nombre de usuario" :
                                                language === "de" ? "Benutzername" :
                                                language === "it" ? "Nome utente" :
                                                language === "ru" ? "Имя пользователя" :
                                                "Username"}
                                                className={`bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] ${errors.usernameError ? 'border-red-600' : ''} py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-200`}
                                            
                                                /* Default value for testing purposes */
                                                defaultValue="TestUser"
                                            />
                                        </div>
                                        {errors.usernameError && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <CircleAlert size={16} />
                                                {errors.usernameError}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700">
                                            {language === "fr" ? "Adresse e-mail" :
                                            language === "es" ? "Correo electrónico" :
                                            language === "de" ? "E-Mail-Adresse" :
                                            language === "it" ? "Indirizzo email" :
                                            language === "ru" ? "Электронная почта" :
                                            "Email"}
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
                                                type="text"
                                                autoComplete="email"
                                                placeholder={language === "fr" ? "Adresse e-mail" :
                                                language === "es" ? "Correo electrónico" :
                                                language === "de" ? "E-Mail-Adresse" :
                                                language === "it" ? "Indirizzo email" :
                                                language === "ru" ? "Электронная почта" :
                                                "Email"}
                                                className={`bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] ${errors.emailError ? 'border-red-600' : ''} py-2 pl-10 pr-4 focus:border-[#d64c5aa1] focus:outline-none transition duration-200`}
                                            
                                                /* Default value for testing purposes */
                                                defaultValue="test@example.com"
                                            />
                                        </div>
                                        {errors.emailError && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <CircleAlert size={16} />
                                                {errors.emailError}
                                            </p>
                                        )}
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

                                                placeholder={language === "fr" ? "Mot de passe" :
                                                language === "es" ? "Contraseña" :
                                                language === "de" ? "Passwort" :
                                                language === "it" ? "Password" :
                                                language === "ru" ? "Пароль" :
                                                "Password"}
                                                className={`bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] ${errors.passwordError ? 'border-red-600' : ''} py-2 pl-10 pr-12 focus:border-[#d64c5aa1] focus:outline-none transition duration-300 ease-in-out`}
                                            
                                                /* Default value for testing purposes */
                                                defaultValue="TestPassword-123"
                                            />
                                            {!isPasswordVisible ? (
                                                <Eye
                                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-700 bg-[#FEF5F5]"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsPasswordVisible(true)}
                                                />
                                            ) : (
                                                <EyeClosed
                                                    className="cursor-pointer absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 text-text-gray-700 bg-[#FEF5F5]"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsPasswordVisible(false)}
                                                />
                                            )}
                                        </div>
                                        {errors.passwordError && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <CircleAlert size={16} />
                                                {errors.passwordError}
                                            </p>
                                        )}
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
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                type={isPasswordVisible ? "text" : "password"}
                                                autoComplete="currentPassword"

                                                placeholder={language === "fr" ? "Confirmer votre mot de passe" :
                                                language === "es" ? "Confirmar contraseña" :
                                                language === "it" ? "Conferma password" :
                                                language === "ru" ? "Подтвердите пароль" :
                                                "Confirm Password"}
                                                onInput={() => setErrors(prev => ({ ...prev, confirmPasswordError: '' }))}
                                                className={`bg-[#FEF5F5] block w-full rounded-lg border-2 border-[#D64C5A55] ${errors.confirmPasswordError ? 'border-red-600' : ''} py-2 pl-10 pr-12 focus:border-[#d64c5aa1] focus:outline-none transition duration-300 ease-in-out`}
                                                /* Default value for testing purposes */
                                                defaultValue="TestPassword-123"
                                            />
                                            {!isConfirmPasswordVisible ? (
                                                <Eye
                                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-700 bg-[#FEF5F5]"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsConfirmPasswordVisible(true)}
                                                />
                                            ) : (
                                                <EyeClosed
                                                    className="cursor-pointer absolute right-3 top-[calc(50%+2px)] -translate-y-1/2 text-text-gray-700 bg-[#FEF5F5]"
                                                    size={22}
                                                    aria-hidden="true"
                                                    onClick={() => setIsConfirmPasswordVisible(false)}
                                                />
                                            )}
                                        </div>
                                        {errors.confirmPasswordError && (
                                            <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                                <CircleAlert size={16} />
                                                {errors.confirmPasswordError}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-4 flex items-start gap-2">
                                        <input type="checkbox" id="agreement" name="agreement" onInput={() => setErrors(prev => ({ ...prev, agreementError: '' }))} className={`mt-1 h-4 w-4 shrink-0 accent-[#D64C5A] ${errors.agreementError ? "outline-2 outline-red-600 outline-offset-2" : ""} cursor-pointer focus:ring-2 focus:ring-[#D64C5A]/40`} />
                                        <label htmlFor="agreement" className="min-w-0 text-sm font-medium leading-5 text-gray-700">
                                            {language === "fr" ? (
                                                <span className="text-sm leading-5">J&apos;accepte les{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">conditions d&apos;utilisation</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}et la{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">politique de confidentialité</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>) :
                                            language === "es" ? (
                                                <span className="text-sm leading-5">Acepto los{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">términos y condiciones</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}y la{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">política de privacidad</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "de" ? (
                                                <span className="text-sm leading-5">Ich akzeptiere die{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">Allgemeinen Geschäftsbedingungen</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}und die{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">Datenschutzrichtlinie</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "it" ? (
                                                <span className="text-sm leading-5">Accetto i{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">termini e condizioni</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}e la{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">politica sulla privacy</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            language === "ru" ? (
                                                <span className="text-sm leading-5">Я принимаю{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">условия использования</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}и{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">политику конфиденциальности</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            ) :
                                            (
                                                <span className="text-sm leading-5">I accept the{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink1Hovering(true)} onMouseLeave={() => setIsLink1Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">terms of use</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink1Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                    {" "}and the{" "}
                                                    <div className="relative inline-block text-sm" onMouseEnter={() => setIsLink2Hovering(true)} onMouseLeave={() => setIsLink2Hovering(false)}>
                                                        <a href="#" className="text-[#DE5260]">privacy policy</a>
                                                        <span className={`absolute right-0 -bottom-1 h-0.5 w-${isLink2Hovering ? 'full' : '0'} origin-right rounded-full bg-[#DE5260] transition-all duration-300 ease-in-out`}></span>
                                                    </div>
                                                </span>
                                            )}
                                        </label>
                                    </div>
                                    {errors.agreementError && (
                                        <div
                                            role="alert"
                                            className="
                                                flex items-center gap-2
                                                border-l-2 border-red-600
                                                pl-3 py-1
                                                text-sm text-red-600
                                            "
                                        >
                                            <CircleAlert size={16} className="shrink-0" />
                                            <p>{errors.agreementError}</p>
                                        </div>
                                    )}
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
                                    <div className="w-full flex justify-center flex-col items-center xs:flex-row md:flex-col min-[55.0625rem]:flex-row gap-1 mb-4">
                                        <p className="text-md text-[#0B0001] text-center">
                                            {language === "fr" ? "Vous avez déjà un compte ?" :
                                            language === "es" ? "¿Ya tienes una cuenta?" :
                                            language === "de" ? "Haben Sie bereits ein Konto?" :
                                            language === "it" ? "Hai già un account?" :
                                            language === "ru" ? "У вас уже есть аккаунт?" :
                                            "Already have an account?"}
                                        </p>
                                        <div className="relative w-fit" onMouseEnter={() => setIsLink3Hovering(true)} onMouseLeave={() => setIsLink3Hovering(false)}>
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