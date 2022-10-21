import React, { createContext, useContext } from 'react';

const MyContext = createContext();

export default function Components() {
  return (
    <MyContext.Provider value="hi">
        <First />
    </MyContext.Provider>
  )
}

function First() {
    return (
        <Second />
    )
}

function Second() {
    return (
        <Third />
    )
}

function Third() {
    const useMyContext = useContext(MyContext);

    return (
        <div>I'm Third + {useMyContext}</div>
    )
}