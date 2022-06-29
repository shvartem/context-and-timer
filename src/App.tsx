import Header from "./Header/Header";
import {AuthContextProvider} from "./contexts/UserContext";

import AppRoutes from './AppRoutes/AppRoutes';

import './App.css';

export interface CurrentUser {
    username: string;
}

 const App = () => {
    return (
        <AuthContextProvider>
            <div className="App">
                <Header/>

                <AppRoutes />
            </div>
        </AuthContextProvider>
    );
};

export default App;
