
import React, { useState } from 'react'
import Data from "./Services.json"
import ServicePng from "../Imgs/Services.png"
const Services = () => {
  const [btn, toggle_btn] = useState(false)
  const ToggleBtn = (index) => {
    toggle_btn(btn === index ? null : index)
  }


  return (
    // <p class="text-sm text-gray-500 mt-2 text-center"></p>

    <section class="body-font px-5 py-20">
      <div class="flex flex-col text-center w-full my-3">
        <div className=' w-20 mx-auto flex justify-center items-center my-3'>
          <img src={ServicePng} alt="" className=' w-full   h-1/2' />
        </div>
        <h1 class="sm:text-3xl text-[2.7rem] font-bold tracking-wide uppercase title-font mb-4 text-indigo-900">Our Services</h1>
        <p class="lg:w-2/3 mx-auto text-lg tracking-wide font-light leading-relaxed text-gray-600">Discover how our state-of-the-art services can transform your projects.</p>
      </div>
      <div className=' flex justify-center items-center my-5 mb-20'>
            <hr className=' w-1/5  bg-amber-500 h-[3px]' />
            <span><i class="ri-arrow-down-s-line text-4xl text-indigo-800"></i></span>
            <hr className=' w-1/5  bg-amber-500 h-[3px]' />
          </div>
      {Data.map((item, index) => (

        <div key={index} class="w-full lg:w-[94%] mx-auto  my-10 mb-12 flex  justify-center flex-wrap">
          <div class="flex flex-col px-4 py-8 lg:flex-row">
            <div class="mb-10 flex h-fit w-full items-start py-5 lg:w-[60%]">
              <div class="flex w-fit flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 bg-indigo-950 hover:bg-indigo-900  rounded-lg">
                <span class="mb-2 border-b-2 font-semibold  border-amber-400 text-gray-50 uppercase text-xl">{item.month}</span>
                <span class=" font-normal leading-none text-gray-400">{item.year}</span>
              </div>
              <div class="flex-grow pl-3 ml-3 border-l-2 border-[#0a1575]">
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

            <div class=" w-3/4 lg:w-2/5 flex items-start mx-auto justify-start  lg:ml-10 mt-6">
              <video className="rounded-lg shadow-lg h-auto hover:cursor-pointer" width="100%" controls autoPlay >
                <source src={item.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

      ))}
    </section>

  )
}

export default Services
