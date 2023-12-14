export interface UserCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
}

export interface UserData {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    dob: string;
}

export interface RegistrationResponse {
    message: string;
}