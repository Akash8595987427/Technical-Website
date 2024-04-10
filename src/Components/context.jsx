

import React, { useContext, useReducer, useEffect } from "react"
const AppContext = React.createContext();
import reducer from "./reducer";

let api = "https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading : true,
    query : "html",
    nbPages : 0,
    page : 0,
    hits : [],
}


const AppProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);


    const getApiData=async(url)=>{
            dispatch({ type : "GET_LOADING"});
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            console.log(state);
            dispatch({
                type : "GET_API",
                payload : {
                    hits_data : data.hits,
                    page_data : data.nbPages,
                }
            })
        }
        catch(err){
            console.log(err);
        }
   
    }

    useEffect(()=>{
        getApiData(`${api}query=${state.query}&page=${state.page}`);
    }, [])

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

// create the custom hook 
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};