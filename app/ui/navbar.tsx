"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useLanguage from "@/app/hooks/useLanguage";

// Navbar link component with hover effect
function NavbarLink({ href, children }: { href: string, children: React.ReactNode }) {
    // State to track hover status
    const [hovered, setHovered] = useState(false);

    // Render the link with hover effect
    return (
        <li className="relative cursor-pointer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Link href={href}>{children}</Link>
            <span className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-[#DE5260] transition-transform duration-300 ease-in-out" style={{ transform: hovered ? "scaleX(1)" : "scaleX(0)"}}></span>
        </li>
    );
}

// Main Navbar component
export default function Navbar() {
    // Get the user's language preference
    const language = useLanguage();

    // Render the navigation bar
    return <>
        <nav className="absolute w-full bg-[#FBE5E4] px-4 py-6 border-b border-[#e9bbbbc6] z-40">
            <div className="flex flex-row items-center justify-between mx-30">
                <a href="/" className="flex flex-row items-center space-x-2 gap-2">
                    <Image src="/images/sweetberry-logo.png" alt="Sweetberry" width={40} height={40} />
                    <h1 className="text-3xl text-[#0B0001] font-cormorant-garamond">
                        SWEETBERRY
                    </h1>
                </a>

                <ul className="flex flex-row items-center space-x-4 gap-8 text-[#0B0001] font-cormorant-garamond font-medium text-lg">
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
        </nav>
    </>
}