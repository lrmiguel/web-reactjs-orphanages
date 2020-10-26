import api from "./api";

interface LoginData {
    email: string;
    password: string;
}

export interface LoginResponse {
    data: {
        user: {
            name: string;
            email: string;
        },
        token: string;
    }
}

export default function signIn(login: LoginData): Promise<LoginResponse> {
    return api.post("login", login);
}