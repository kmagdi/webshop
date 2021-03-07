import React, {createContext,useContext,useReducer} from 'react';
//preparind data layer
export const StateContext=createContext();//ez egy objektum
//build the provider: wrap our components
export const StateProvider=({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    )
//this is how we can use it inside of component
export const useStateValue=()=>useContext(StateContext)