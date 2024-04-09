// For creating the Context api we have to create the following thing  :-
// 1. Context creation 
// 2. Provider 
// 3. consumer (but the consumer part is lengthy so we use ) -------> the useContext hook


import React from "react"
const AppContext = React.createContext();


const AppProvider = ({children})=>{
    return(
        <AppContext.Provider value={"Akash Bhandari"}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};