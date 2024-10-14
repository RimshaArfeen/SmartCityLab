

import React, { useState } from 'react';
import CoursesData from "./CoursesData.json";
import './Courses.css';

const Courses = () => {
  const [toggledCard, setToggledCard] = useState(null);

  const handleToggle = (index) => {
    setToggledCard(toggledCard === index ? null : index);
  };
 
  return (
    <>
      <section className=" text-gray-600 body-font relative ">
        <div className=" w-full h-fit flex flex-col md:flex-row justify-end  ">
          <div className='w-full h-fit flex justify-start -mt-10 lg:-mt-20' >
            <img src={TechPng} alt="" className=' w-full md:w-1/2 h-auto' />
          </div>
          <div className='md:absolute md:w-1/2 flex flex-col px-8 lg:pr-24 md:my-20 -mt-16'>
            <h1 className=' text-3xl lg:text-[3rem] text-indigo-900 font-bold tracking-wide my-3'>Our Courses</h1>
            <p className=' text-sm font-light lg:text-lg text-gray-600 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam commodi, at necessitatibus culpa totam dignissimos doloremque totam dignissimos doloremque.</p>
          </div>
        </div>

        <div className="w-full lg:w-[90%] px-5 pt-16 pb-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {CoursesData.map((item, index) => (
              <div class="p-5 md:p-8 lg:p-12 md:w-[47%] flex flex-col items-start my-3 md:m-3 border-2 border-slate-200 shadow-sm rounded-lg">
                <div class=" w-full flex justify-between pb-4 items-center border-b-2 border-amber-600">
                  <a class="inline-flex items-center w-12 h-8 md:w-14 md:h-14 bg-gray-100 justify-center rounded-full">
                    <i class={` ${item.iconUrl} text-lg md:text-[2rem] font-extralight rounded-full text-indigo-700 flex-shrink-0 object-cover object-center`}></i>
                  </a>
                  <span class="inline-block py-1 px-2 rounded uppercase bg-indigo-50 text-indigo-500 text-xs md:text-sm font-medium tracking-widest ml-4">{item.category}</span>

                </div>
                <h2 class="text-2xl title-font font-normal text-indigo-900 mt-4 mb-4">{item.title}</h2>
                <p class=" text-sm md:text-lg mb-8 text-justify">{item.description}
                  {toggledCard === index && (
                    <span>{item.readmore}</span>
                  )}
                </p>
                <div class="flex items-center flex-wrap pb-4 pt-4 border-t-2 border-gray-100 mt-auto w-full">
                  <a class=" text-xs md:text-lg text-indigo-500 inline-flex items-center hover:underline hover:underline-offset-4 hover:text-indigo-800 hover:cursor-pointer"
                    onClick={() => handleToggle(index)}>{toggledCard === index ? "Show Less" : "Read More"}
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                </div>

              </div>

            ))}
          </div>
        </div>
      </section>


    </>
  );
};

export default Courses;
