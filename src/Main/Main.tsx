import TimerComponent from "../TimerComponent/TimerComponent";
import {useAuthContext} from "../contexts/UserContext";


const Main = () => {
    const {currentUser} = useAuthContext();

    return (
        <>
            <h1>Hello, {currentUser?.username}</h1>

            <h2>Start editing to see some magic happen!</h2>

            <TimerComponent />
        </>
    );
};

export default Main;