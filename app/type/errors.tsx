// Define the structure of registration errors for form validation
export type RegistrationErrors = {
    usernameError: string;
    emailError: string;
    passwordError: string;
    confirmPasswordError: string;
    aggregateError: string;
};