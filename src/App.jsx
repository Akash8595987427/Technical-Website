import React from "react";
import "./App.css"
import Title from "./Components/Title";
import Search from "./Components/Search";
import Prev_Next_Button from "./Components/Prev_Next_Button";



const App=()=>{
  return (
    <>
    <div className="section w-full h-auto bg-blue-100">
      <Title/>
      <Prev_Next_Button/>
      <Search/> 
    </div>
    </>
  )
}

export default App;