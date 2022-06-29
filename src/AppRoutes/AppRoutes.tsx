import {Route, Routes, useNavigate, Outlet} from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Login from "../Login/Login";
import TimerComponent from "../TimerComponent/TimerComponent";
import NestedComponent from "../NestedComponent/NestedComponent";

import {useAuthContext} from "../contexts/UserContext";
import {TimerContextProvider} from "../contexts/TimerContext";
import {authorize, User} from "../api";

const AppRoutes = () => {
    const {currentUser, login} = useAuthContext();

    const navigate = useNavigate();

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
                        <TimerComponent />
                    }
                />
            </Route>
        </Routes>
    )
};

export default AppRoutes;