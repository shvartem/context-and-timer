import {useState} from "react";

import {CurrentUser} from "../App";

export const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

    const login = (userData: CurrentUser) => {
        if (userData) {
            setCurrentUser({username: userData.username});
        }
    };

    const logout = () => setCurrentUser(null);

    return {currentUser, login, logout};
};
