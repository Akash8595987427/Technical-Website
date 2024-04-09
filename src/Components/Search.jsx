import React, { useEffect, useState } from 'react'

const Search = () => {

    let api = "https://hn.algolia.com/api/v1/search?query=html";
    const [arr, setArr] = useState([]);

    
    const getApiData=async()=>{
        try{
            const response = await fetch("https://hn.algolia.com/api/v1/search?query=");
            const data = await response.json();
            // console.log(data.hits);
            setArr(data.hits);
            console.log(arr);
        }
        catch(err){
            console.log(err);
        }
   
    }

    useEffect(()=>{
        getApiData();
    }, [])


  return (
    <>
        <div className="section w-full h-auto flex flex-col justify-center items-center  gap-8">

            {
                arr.map((obj)=>{
                    return(
                        <div className="container w-[60%] h-auto flex flex-col justify-start items-start py-8 px-12 gap-5 text-sm shadow-2xl">
                    <h1 className='text-2xl font-semibold'>Show HN : 3D Book Images CSS Generator</h1>
                    <p>By Scastiel | 87 Comments</p>
                    <div className="info w-full flex justify-between items-center">
                        <p>Read More</p>
                        <p>Remove</p>
                    </div>
            </div>
                    )

                })
            }
            
        
        </div>
        { getApiData}
      
    </>
  )
}

export default Search
