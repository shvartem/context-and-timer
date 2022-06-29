import {useEffect, useRef, useState} from "react";

export const useTimer = () => {
    const [count, setCount] = useState(0);

    const timerRef = useRef<NodeJS.Timer>();

    const start = () => {
        if (timerRef.current) {
            return;
        }

        timerRef.current = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
    };

    const stop = () => {
        if (!timerRef.current) {
            return;
        }

        clearInterval(timerRef.current);
        timerRef.current = undefined;
    };

    useEffect(() => {
        return () => {
            clearInterval(timerRef.current);
        };
    }, [])

    return {count, start, stop};
};