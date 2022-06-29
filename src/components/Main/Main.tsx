import {TimerComponent} from "../../components";

import {useAuthContext} from "../../contexts";


const Main = () => {
    const {currentUser} = useAuthContext();

    return (
        <>
            <h1>Hello, {currentUser?.username}</h1>

            <h2>Start editing to see some magic happen!</h2>

            {/*здесь устанавливается локальный таймер*/}
            <TimerComponent />
        </>
    );
};

export default Main;