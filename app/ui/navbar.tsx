"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

function NavbarLink({ href, children }: { href: string, children: React.ReactNode }) {
    const [hovered, setHovered] = useState(false);

    return (
        <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            
            className="relative cursor-pointer"
        >
            <Link href={href}>{children}</Link>
            <span
                style={{
                    transform: hovered ? "scaleX(1)" : "scaleX(0)"
                }}
                className="
                    absolute
                    -bottom-1
                    left-0
                    right-0
                    h-1
                    origin-left
                    rounded-full
                    bg-[#DE5260]
                    transition-transform
                    duration-300
                    ease-in-out
                    "
            ></span>
        </li>
    );
}

export default function Navbar() {
    return <>
        <nav className="w-full 
            bg-[#FCE9EA]
            px-4
            py-6">
            <div className="flex 
                flex-row 
                items-center 
                justify-between 
                mx-30">
                <a href="/" className="flex 
                    flex-row 
                    items-center 
                    space-x-2
                    gap-2">
                    <Image src="/images/sweetberry-logo.png" alt="Sweetberry" width={40} height={40} />
                    <h1 className="text-3xl
                        text-[#0B0001] 
                        font-cormorant-garamond">
                        SWEETBERRY
                    </h1>
                </a>

                <ul 
                    className="
                        flex
                        flex-row
                        items-center 
                        space-x-4
                        gap-8
                        text-[#0B0001]
                        font-cormorant-garamond
                        font-medium
                        text-lg">
                    <NavbarLink href="#">Home</NavbarLink>
                    <NavbarLink href="#">Products</NavbarLink>
                    <NavbarLink href="#">About</NavbarLink>
                    <NavbarLink href="#">Contact</NavbarLink>
                </ul>

                <button className="
                    bg-[#DE5260] 
                    text-white 
                    font-bold 
                    px-10 
                    py-2 
                    rounded-4xl
                    cursor-pointer
                    transition
                    duration-300
                    ease-in-out
                    hover:bg-[#d73545]">
                    <Link href="/login">Login</Link>
                </button>
            </div>
        </nav>
    </>

}