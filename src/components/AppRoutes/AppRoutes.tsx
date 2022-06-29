import {Route, Routes, useNavigate, Outlet} from "react-router-dom";


import {Login, Main, NestedComponent, ProtectedRoute, TimerComponent} from '../../components';

import {useAuthContext, TimerContextProvider} from "../../contexts";
import {authorize} from "../../services";
import {User} from "../../domain";

const AppRoutes = () => {
    const {currentUser, login} = useAuthContext();

    const navigate = useNavigate();

    // не знаю, как более грамотно организовать код
    const loginUser = (userData: User) => {
        const result = authorize(userData);

        if (result.username) {
            login({username: result.username});
            navigate('/', {replace: true});
        }
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRoute condition={!!currentUser?.username} fallback="/login">
                        <Main/>
                    </ProtectedRoute>
                }
            />

            <Route
                path="login"
                element={<Login onLogin={loginUser}/>}
            />

            <Route
                path="component-a"
                element={
                    <ProtectedRoute condition={!!currentUser?.username} fallback="/login">
                        <TimerContextProvider>
                            <NestedComponent/>

                            <Outlet />
                        </TimerContextProvider>
                    </ProtectedRoute>
                }
            >
                <Route
                    path="nested"
                    element={
                        // здесь устанавливается глобальный таймер для контекста, это можно увидеть в NestedComponent
                        <TimerComponent />
                    }
                />
            </Route>
        </Routes>
    )
};

export default AppRoutes;