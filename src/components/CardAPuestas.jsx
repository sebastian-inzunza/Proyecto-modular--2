import React from 'react'

function CardAPuestas({title, icon}) {
  return (
    <div className='flex'>
    <div className="bg-white shadow-md m-2 rounded-md w-8/12">
      <div className="bg-stone-800 p-3">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-3">
        <div className="max-w-xs">

          <p className="mt-4 text-gray-600 whitespace-pre-wrap max-w-200">
         
          </p>
        </div>
        <div className="mt-4"></div>
      </div>
     
    </div> 
    <div>
        <img src={"/src/asset/gifs/" + icon +".gif"} width={"150px"} alt="" />
    </div>
    </div>
    
  )
}

export default CardAPuestas