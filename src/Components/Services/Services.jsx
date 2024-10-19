

import React, { useState } from 'react'
import Data from "./Services.json"
const Services = () => {
  const [btn, toggle_btn] = useState(false)
  const ToggleBtn = (index) => {
    toggle_btn(btn === index ? null : index)
  }


  return (
    <>


      <div className='h-32 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>
      <section class="body-font px-5 relative">
        <div className=' w-full h-fit relative  top-36 md:top-56 lg:top-28 '>
          <div class="flex flex-col w-full my-3 ">
            <h1 className=' uppercase font-bold text-4xl text-indigo-800 w-full text-center   mb-1'
              data-aos="fade-up">Our Services</h1>
            <div className='w-4/5 md:w-1/4 lg:w-1/4 mx-auto flex justify-center items-center '
            >
              <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
                data-aos="fade-left" />
              <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
                data-aos="zoom-in"></i>
              <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
            </div>
            {Data.map((item, index) => (
              <>
                <div key={index} class="w-full lg:w-[94%] mx-auto my-10 mb-2 flex  justify-center flex-wrap"
                  data-aos="fade-up">
                  <div class="flex flex-col md:px-4 py-8 lg:flex-row">
                    <div class="mb-10 flex flex-col md:flex-row h-fit w-full items-start py-5 lg:w-[60%]">
                      <div class="flex w-fit flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 mb-3 lg:mb-0 bg-indigo-950 hover:bg-indigo-900  rounded-lg">
                        <span class="mb-2 border-b-2 font-semibold  border-amber-400 text-gray-50 uppercase text-xl">{item.month}</span>
                        <span class=" font-normal leading-none text-gray-400">{item.year}</span>
                      </div>
                      <div class="flex-grow pl-3 md:ml-3 border-l-2 border-[#0a1575]">
                        <h2 class="title-font text-xs font-medium tracking-widest mb-2 my-2 uppercase text-indigo-500">{item.category}</h2>
                        <h1 class="title-font text-xl md:text-3xl font-semibold text-indigo-900 mb-2">{item.title}</h1>
                        <hr className=' w-3/4 h-[2px] bg-gray-400   mb-2 ' />
                        <p class="text-sm font-light tracking-wide text-justify text-gray-800 leading-relaxed mb-4">{item.description}
                          {btn === index && (
                            <span>{item.readMore}</span>

                          )}
                        </p>
                        <a class="text-indigo-500 inline-flex items-center hover:cursor-pointer mb-2 hover:text-indigo-800"
                          onClick={() => ToggleBtn(index)}>{btn === index ? "Show Less" : "Read More"}
                          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div class=" w-5/6 lg:w-2/5 flex items-start mx-auto justify-start  lg:ml-10 mt-6">
                      <video className="rounded-lg shadow-lg h-auto hover:cursor-pointer" width="100%" controls autoPlay >
                        <source src={item.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                <hr className=' w-3/4 mx-auto  bg-amber-500 h-[3px]'
                  data-aos="zoom-in" />

              </>
            ))}
</div>
          </div>
      </section>
    </>

  )
}

export default Services
