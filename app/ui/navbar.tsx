"use client";

import Link from "next/link";
import Image from "next/image";

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

                <ul className="
                    flex
                    flex-row
                    items-center 
                    space-x-4
                    gap-8
                    text-[#0B0001]
                    font-cormorant-garamond
                    font-medium
                    text-lg">
                    <li className="
                        decoration-none
                        h-8
                        flex
                        flex-col
                        justify-space-between
                        items-center">
                        <Link href="/">Home</Link>
                        <div className="
                            w-full
                            h-0.5
                            bg-[#DE5260]
                            ">
                                
                        </div>
                    </li>
                    <li className="
                        decoration-none
                        h-8
                        flex
                        flex-col
                        justify-space-between
                        items-center">
                        <Link href="">Products</Link>
                    </li>
                    <li className="
                        decoration-none
                        flex
                        flex-col
                        items-center
                        justify-start
                        gap-2">
                        <Link href="">About</Link>
                    </li>
                    <li className="
                        decoration-none">
                        <Link href="">Contact</Link>
                    </li>
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