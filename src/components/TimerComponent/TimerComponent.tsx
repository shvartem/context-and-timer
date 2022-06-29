import {useTimerContext} from "../../contexts";

const TimerComponent = () => {
    const {count, start, stop} = useTimerContext();

    return (
        <div>
            <p>42</p>

            <div>
                <p>Count: {count}</p>

                <button onClick={start}>Start</button>

                <button onClick={stop}>Stop</button>
            </div>
        </div>
    );
};

export default TimerComponent;
