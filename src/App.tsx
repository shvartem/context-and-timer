import {Header} from "./components";
import {AuthContextProvider} from "./contexts";

import {AppRoutes} from './components';

import './App.css';

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
