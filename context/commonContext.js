import React from "react";
import { createContext, useReducer } from "react";
import commmonReducer from "./commonReducer";

const commonContext = createContext();

const initialState = {
    category: {
        icon_url: "https://via.placeholder.com/150",
        name: "Loading...",
        description: "Loading...",
    }
};

const CommonProvider = ({ children }) => {

    const [state, dispatch] = useReducer(commmonReducer, initialState);

    const setCategory = (result) => {
        dispatch({
            type: "SET_CATEGORY",
            payload: { result },
        });
    }

    const value = {
        ...state,
        setCategory,
    };


    return (
        <commonContext.Provider value={value}>
            {children}
        </commonContext.Provider>
    );
};

export default commonContext;
export { CommonProvider };