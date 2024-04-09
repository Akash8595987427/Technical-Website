import React from 'react'

const Title = () => {
  return (
    <div className="section w-full h-[40vh] flex justify-center items-start ">
        <div className="container w-[60%] h-full flex flex-col justify-start items-center py-8 gap-4">
        <h1 className='text-2xl font-semibold'>Tech News On The Go</h1>
        <input type="text" placeholder='Enter your Search' className='w-[40%] py-1.5 px-3 rounded-md border-2 border-black' />

    </div>
    </div>
  )
}

export default Title
