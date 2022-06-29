import {useTimerContext} from "../contexts/TimerContext";

const NestedComponent = () => {
    const {count} = useTimerContext();

    return (
        <h3>{count}</h3>
    )
};

export default NestedComponent;