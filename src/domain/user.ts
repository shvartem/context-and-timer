export interface CurrentUser {
    username: string;
}

export interface User extends CurrentUser{
    password: string;
}

export type AuthContextType = {
    currentUser: CurrentUser | null;
    login: (authData: CurrentUser) => void;
    logout: () => void;
}
