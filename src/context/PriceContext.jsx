import { createContext, useContext, useReducer, useState } from "react";

const useCounter = () => useContext(CounterContext)
const CounterContext = createContext();


const CounterProvider = ({children}) => {
count [state.dispatch] = useReducer(reducerFun,{counter:0})





    return(
        <CounterContext.Provider>
            {children}
        </CounterContext.Provider>
    )
}

export {CounterProvider,useCounter};