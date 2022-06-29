/*
Задание 2

Напишите глобальный таймер на основе хука useTimer, который мы сегодня рассмотрели.
Если приложение оборачивается в TimerProvider, то хук выдает общее значение из контекста.
А если вне провайдера, то создает изолированный таймер.
*/

import {createContext, ReactNode, useContext} from "react";
import useTimer from "../hooks/useTimer";

interface TimerContextType {
    count: number;
    start: () => void;
    stop: () => void;
}

export const TimerContext = createContext<TimerContextType | null>(null);

export const useTimerContext = () => {
    const timer = useContext(TimerContext);

    const newTimer = useTimer();

    if (!timer) {
        return newTimer;
    }

    return timer;
};

interface Props {
    children: ReactNode;
}

export const TimerContextProvider = ({children}: Props) => {
    const timer = useTimer();

    return (
        <TimerContext.Provider value={timer}>
            {children}
        </TimerContext.Provider>
    );
};