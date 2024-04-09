import React from "react";
import "./App.css"
import Title from "./Components/Title";
import Search from "./Components/Search";



const App=()=>{
  return (
    <>
    <div className="section w-full h-auto bg-blue-100">
      <Title/>
      <Search/> 
    </div>
    </>
  )
}

export default App;