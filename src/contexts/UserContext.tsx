/*
* Задание 1

Напишите свою реализацию компонента AuthProvider, который бы показывал экран авторизации,
если пользователь не авторизован, и основной контент приложения, если пользователь авторизован.

Кроме информации о пользователе (поле user) компонент должен экспортировать в контекст метод logout
для очистки состояния и выхода обратно на экран авторизации.

Для авторизации можно использовать статичные значения для логина и пароля.

Дополнительно можно обработать ситуацию с неправильными логином и/или паролем.
*/

import {createContext, ReactNode, useContext} from "react";

import {useCurrentUser} from "../application";
import {AuthContextType} from "../domain";

const initialAuthContext: AuthContextType = {
    currentUser: null,
    login: () => {
    },
    logout: () => {
    },
};

export const AuthContext = createContext<AuthContextType>(initialAuthContext);
AuthContext.displayName = 'AuthContextName';

export const useAuthContext = () => {
    const auth = useContext(AuthContext);

    if (auth === undefined) {
        throw new Error('Not in AuthContext')
    }

    return auth;
};

interface Props {
    children: ReactNode;
}

export const AuthContextProvider = ({children}: Props) => {
    const {currentUser, login, logout} = useCurrentUser();

    return (
        <AuthContext.Provider value={{currentUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
