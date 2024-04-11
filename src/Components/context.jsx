

import React, { useContext, useReducer, useEffect } from "react"
const AppContext = React.createContext();
import reducer from "./reducer";

let api = "https://hn.algolia.com/api/v1/search?";

const initialState={
    isLoading : true,
    query : "",
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
    };

    // The remove the post 
    const removePost=(post_id)=>{
        dispatch({ type: "REMOVE_POST", payload : post_id })
    }

    const searchData=(data)=>{
        dispatch({type : "SEARCH_POST", payload : data})
        // {console.log(data)}
    }
    

    useEffect(()=>{
        getApiData(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query])

    return(
        <AppContext.Provider value={{...state, removePost, searchData}}>
            {children}
        </AppContext.Provider>
    )
}

// create the custom hook 
const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};