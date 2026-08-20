"use client";

import { useEffect, useState } from "react";

// Custom hook to get the user's language preference
export default function useLanguage() {
    // State to store the user's language preference
    const [language, setLanguage] = useState<string | null>(null);

    // Effect to get the user's language preference on component mount
    useEffect(() => {
        // Get the user's language preference from the browser
        const userLanguage = navigator.language.toLowerCase().split("-")[0];
        // Set the user's language preference in state
        setLanguage(userLanguage);
    }, []);

    // Return the user's language preference
    return language;
}