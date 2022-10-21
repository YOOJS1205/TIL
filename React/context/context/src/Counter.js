import React, { createContext, useContext, useState } from 'react';

const counterContext = createContext();

export default function Counter() {
  return (
    <CounterProvider>
        <Value />
        <Buttons />
    </CounterProvider>
  )
}

function CounterProvider( { children }) {
    const counterState = useState(0);
    return (
        <counterContext.Provider value={counterState}>{children}</counterContext.Provider>
    )
}

function Value() {
    const [num] = useContext(counterContext);
    return <h1>{num}</h1>;
}

function Buttons() {
    const [, setNum] = useContext(counterContext);

    const onClickPlusButton = () => {
        setNum(prev => prev + 1);
    }

    const onClickMinusButton = () => {
        setNum(prev => prev - 1);
    }
    return (
        <div>
            <button onClick={onClickPlusButton}>+</button>
            <button onClick={onClickMinusButton}>-</button>
        </div>
    )
}