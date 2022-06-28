import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { authorize, User } from './api';
import Auth from './Auth';
import ComponentA from './ComponentA';
import useUserContext from './contexts/UserContext';

export default function App() {
    const { user, setUser, UserContext } = useUserContext();

    const loginUser = (authData: User) => {
        const res = authorize(authData);

        if (res.username) {
            setUser(() => res);
        }
    };

    return (
        <BrowserRouter>
            <UserContext.Provider value={user}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="App">
                                <h1>Hello CodeSandbox</h1>

                                <h2>Start editing to see some magic happen!</h2>

                                <Link to="/auth">
                                    <p>Войти</p>
                                </Link>

                                <Link to="/component-a">
                                    <p>ComponentA</p>
                                </Link>
                            </div>
                        }
                    />

                    <Route path="/component-a" element={<ComponentA />} />

                    <Route path="/auth" element={<Auth login={loginUser} />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}
