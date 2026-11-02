// Define the structure of registration errors for form validation
export type RegistrationErrors = {
    usernameError: string;
    emailError: string;
    passwordError: string;
    confirmPasswordError: string;
    agreementError: string;
};

// Define the structure of login errors for form validation
export type LoginErrors = {
    usernameError: string;
    passwordError: string;
};