import React from 'react'
import data from "./data.json"
const IndusCollab = () => {
  return (
    <section className="body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col items-center">
      <h1 className="text-4xl text-center font-semibold text-indigo-950">Our Industrial Collaboration</h1>
      <div className=' flex justify-center items-center my-5 mb-20'>
            <hr className=' w-1/4  bg-indigo-900 h-[3px]'/>
            <span><i class="ri-arrow-down-s-line text-4xl text-amber-700"></i></span>
            <hr className=' w-1/4  bg-indigo-900 h-[3px]'/>
          </div>
      <div className="flex flex-wrap -m-4 items-center mx-auto">
        {data.map((item, index) => (
          <div key={index} className="lg:w-1/6 md:w-1/3 p-4 w-1/2">
            <a className="block relative h-fit rounded overflow-hidden">
              <img 
                alt={item.alt} 
                className="py-1 px-2 object-center w-full h-full block border-2 border-gray-300 shadow-sm rounded-lg
                   aspect-video  object-contain mix-blend-color-burn" 
                src={item.src} 
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default IndusCollab
