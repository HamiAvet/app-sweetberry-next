"use client";

// React imports components
import Link from "next/link";
import Image from "next/image";

// React imports hooks
import { useState } from "react";

// Import custom hooks
import useLanguage from "@/app/hooks/useLanguage";

// Import icons from lucide-react
import { Menu, X } from "lucide-react";

// Navbar link component with hover effect
function NavbarLink({ href, children }: { href: string, children: React.ReactNode }) {
    // State to track hover status
    const [hovered, setHovered] = useState(false);

    // Render the link with hover effect
    return (
        <li className="relative cursor-pointer text-xl" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link href={href}>{children}</Link>
            <span className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-[#DE5260] transition-transform duration-300 ease-in-out" style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)"}}></span>
        </li>
    );
}

// Main Navbar component
export default function Navbar() {
    // Get the user's language preference
    const language = useLanguage();

    // State to track whether the menu is open or closed
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu open/closed
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Render the navigation bar
    return <>
        <nav className="absolute w-full bg-[#FBE5E4] px-4 py-6 border-b border-[#e9bbbbc6] z-10">
            <div className="flex justify-around items-center">
                <a href="/" className="flex flex-row items-center space-x-2 gap-2">
                    <Image src="/images/sweetberry-logo.png" alt="Sweetberry" width={40} height={40} />
                    <h1 className="text-3xl text-[#0B0001] font-cormorant-garamond lg:block md:hidden sm:block hidden">
                        SWEETBERRY
                    </h1>
                </a>

                <div className={`md:static absolute bg-[#FBE5E4] border-b md:border-0 border-[#e9bbbbc6] md:min-h-fit min-h-[22vh] left-0 top-[${isMenuOpen ? "9vh" : "-100vh"}] h-auto w-full md:w-auto flex flex-col gap-8 transition-top md:transition-none duration-300 ease-in-out`}>
                    <ul className="flex flex-col md:flex-row items-center gap-8 text-[#0B0001] font-cormorant-garamond font-medium text-lg">
                        <NavbarLink href="#">{
                            language === "fr" ? "Accueil" : 
                            language === "es" ? "Inicio" :
                            language === "de" ? "Startseite" :
                            language === "ru" ? "Главная" : 
                            "Home"}
                        </NavbarLink>
                        <NavbarLink href="#">{
                            language === "fr" ? "Produits" : 
                            language === "es" ? "Productos" : 
                            language === "de" ? "Produkte" :
                            language === "ru" ? "Продукты" :
                            language === "it" ? "Prodotti" :
                            "Products"}
                        </NavbarLink>
                        <NavbarLink href="#">{
                            language === "fr" ? "À propos" : 
                            language === "es" ? "Acerca de" :
                            language === "de" ? "Über uns" :
                            language === "it" ? "Informazioni" :
                            language === "ru" ? "О нас" :
                            "About"}
                        </NavbarLink>
                        <NavbarLink href="#">{
                            language === "fr" ? "Contact" : 
                            language === "es" ? "Contacto" :
                            language === "de" ? "Kontakt" :
                            language === "it" ? "Contatto" :
                            language === "ru" ? "Контакт" :
                            "Contact"}
                        </NavbarLink>
                    </ul>
                    
                </div>
                <div className="flex flex-row items-center space-x-4 gap-2 justify-end">
                    <Link href="/login" className="bg-[#DE5260] text-white font-bold px-10 py-2 rounded-4xl cursor-pointer transition duration-300 ease-in-out hover:bg-[#d73545]">{
                        language === "fr" ? "Connexion" :
                        language === "es" ? "Iniciar sesión" :
                        language === "de" ? "Anmelden" :
                        language === "it" ? "Accesso" :
                        language === "ru" ? "Войти" :
                        "Login"
                    }</Link>

                    {isMenuOpen ? (
                        <X className="md:hidden cursor-pointer text-[#DE5260]" size={30} strokeWidth={1.5} onClick={() => handleMenuToggle()} />
                    ) : (
                        <Menu className="md:hidden cursor-pointer text-[#DE5260]" size={30} strokeWidth={1.5} onClick={() => handleMenuToggle()} />
                    )}
                </div>
            </div>
        </nav>
    </>
}

/*

<div className="flex flex-row items-center justify-between mx-8">
    
    <div className="absolute flex flex-row items-center space-x-4 gap-8 w-full justify-end">
        <ul className="text-[#0B0001] font-cormorant-garamond font-medium text-lg">
        <NavbarLink href="#">{
            language === "fr" ? "Accueil" : 
            language === "es" ? "Inicio" :
            language === "de" ? "Startseite" :
            language === "ru" ? "Главная" : 
            "Home"}
        </NavbarLink>
        <NavbarLink href="#">{
            language === "fr" ? "Produits" : 
            language === "es" ? "Productos" : 
            language === "de" ? "Produkte" :
            language === "ru" ? "Продукты" :
            language === "it" ? "Prodotti" :
            "Products"}
        </NavbarLink>
        <NavbarLink href="#">{
            language === "fr" ? "À propos" : 
            language === "es" ? "Acerca de" :
            language === "de" ? "Über uns" :
            language === "it" ? "Informazioni" :
            language === "ru" ? "О нас" :
            "About"}
        </NavbarLink>
        <NavbarLink href="#">{
            language === "fr" ? "Contact" : 
            language === "es" ? "Contacto" :
            language === "de" ? "Kontakt" :
            language === "it" ? "Contatto" :
            language === "ru" ? "Контакт" :
            "Contact"}
        </NavbarLink>
    </ul>

        <div className="bg-[#DE5260] text-white font-bold px-10 py-2 rounded-4xl cursor-pointer transition duration-300 ease-in-out hover:bg-[#d73545]">
            <Link href="/login" className="w-full text-center">{
                language === "fr" ? "Connexion" :
                language === "es" ? "Iniciar sesión" :
                language === "de" ? "Anmelden" :
                language === "it" ? "Accesso" :
                language === "ru" ? "Войти" :
                "Login"
            }</Link>
        </div>
    </div>
                
</div>

*/