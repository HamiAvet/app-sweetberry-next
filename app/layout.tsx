// Import type for metadata from Next.js
import type { Metadata } from "next";

// Import custom fonts from Google Fonts via Next.js
import { Inter, Cormorant_Garamond, DM_Serif_Display } from "next/font/google";

// Import global CSS styles
import "@/app/globals.css";

// Initialize custom fonts for the application
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  preload: false,
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: "400",
  preload: false,
});

// Define metadata for the application
export const metadata: Metadata = {
  title: "Sweetberry",
  description: "Delicious and healthy treats for every occasion. Indulge in our sweet and fruity delights, made with love and care.",
};

// Root layout component for the Sweetberry application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Additional logic for the root layout can be added here
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable} ${dmSerifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
