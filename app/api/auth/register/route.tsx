import { NextResponse } from "next/server";

import generateKey from "@/app/cli/generateKey";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const userId = generateKey();
        body.userId = userId;
        console.log("Received registration data:", body);
        console.log("Generated user ID:", userId);

        // Handle registration logic here (e.g., save user to database)

        return NextResponse.json({ message: "Registration successful" });
    } catch (error) {
        return NextResponse.json({ message: "Registration failed", error: String(error) }, { status: 500 });
    }
}