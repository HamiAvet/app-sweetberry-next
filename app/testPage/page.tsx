import { getUserSession } from "@/app/lib/sessionUtils";


export default async function TestPage() {
    const userSession = await getUserSession();

    return (
        <div>
            <a href="./">Go Back to Home</a>
            <h1>Test Page</h1>
            <p>User Session is: {JSON.stringify(userSession)}</p>
        </div>
    );
}