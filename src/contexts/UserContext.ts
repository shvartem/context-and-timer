import React, { useState } from 'react';
import { User } from '../api';

export type UserContextType = Pick<User, 'username'>;

const initialUser: UserContextType = {
    username: '',
};

const useUserContext = () => {
    const [user, setUser] = useState<UserContextType>(initialUser);

    const UserContext = React.createContext<UserContextType>(initialUser);

    const logout = () => {
        setUser(() => initialUser);
    };

    return { user, setUser, UserContext, logout };
};

export default useUserContext;
