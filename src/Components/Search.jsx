import React from 'react'
import { useGlobalContext } from './context'



const Search = () => {
    const {hits, page, isLoading} = useGlobalContext();


    console.log(isLoading);
    if(isLoading){
        return(
            <h1 className='w-full text-center'>Loading...</h1>
        );
    }


    


  return (
    <>
        <div className="section w-full h-auto flex flex-col justify-start items-center py-8 gap-8">

                    {
                        hits.map((obj)=>{
                            return(
                                <div key={obj.objectID} className="container w-[60%] h-auto flex flex-col justify-center items-start bg-white py-8 px-12 gap-5 text-sm shadow-md ">
                                    <h1 className='text-2xl font-semibold'>{obj.title}</h1>
                                    <p>By {obj.author} &nbsp;  | &nbsp;  {obj.num_comments} comments</p>
                                    <div className="info w-full flex justify-between items-center">
                                        <a href={obj.url}><p>Read More</p></a>
                                        <p >Remove</p>
                                    </div>
                                     {console.log(hits)}
                                </div> 
                            )
                        })
                    }
      
                      
       
            
        
        </div>
      
    </>
  )
}

export default Search
