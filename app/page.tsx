"use client";

import React from "react";

import Navbar from "./ui/navbar";

export default function Home() {
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("data", data);
  };
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen items-center justify-center bg-[#d15c5c]">
        <h1 className="text-5xl font-bold text-blue-600 font-cormorant-garamond">
            Work in progress !
        </h1>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col items-center gap-2">
            <input type="text" name="name" placeholder="Enter your name" />
            <button type="submit">Submit</button>
            <p className="mt-2 text-sm text-gray-600">
                
            </p>
        </form>
      </main>
    </>
  );
}
