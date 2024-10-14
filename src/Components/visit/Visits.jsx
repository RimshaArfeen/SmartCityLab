
import React, { useState } from 'react';
import Data from "./Visit.json"
const Visits = () => {

  return (
    <section className="text-gray-600 body-font overflow-hidden mx-auto ">
      <div className=' h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>
      <h1 className=' uppercase font-bold text-4xl text-indigo-800 w-full text-center relative top-36'
       data-aos-delay="300" data-aos="fade-up">visits</h1>
      <div className='  w-full md:w-1/4 lg:w-1/4 mx-auto relative top-[9rem] flex justify-center items-center '
      >
      <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
      data-aos-delay="300" data-aos="fade-left"/>
        <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
        data-aos-delay="300" data-aos="zoom-in" ></i>
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos-delay="300" data-aos="fade-right"/>
        </div>
      <div className="w-full lg:w-[90%] relative top-24  px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full items-start justify-around lg:justify-between ">
          {Data.map((item, index) => (
            <div key={index} className=" shadow w-full md:w-[45%] lg:w-[30%] flex flex-col items-start my-16 md:mb-8   rounded"
              data-aos-delay="300" data-aos="fade-up">
              <div className="flip-card  group ">
                <div className={`flip-card-inner transition-transform duration-500`}>
                  <div className="flip-card-front h-72 w-auto flex flex-col justify-center items-center  mb-14 mt-4 lg:mt-0">
                    <img src={item.imgUrl} alt="Avatar" className='w-fit h-fit lg:h-full object-bottom  rounded' />

                  </div>

                  <div className={`flip-card-back w-full h-72 flex flex-col text-gray-100 justify-center items-center p-3 px-5 bg-blue-800  border-indigo-800`
                  }>


                    {/* data-aos-delay="300" data-aos="zoom-out" data-aos-delay="300" data-aos-delay="300"        */}
                    <p className="leading-relaxed text-sm mb-8 text-justify"
                    >{item.description}</p>
                    <hr className='w-2/3 bg-gray-600 rounded-full h-[2px] mb-2 scale-50  transform delay-300 transition-transform duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100 opacity-0'
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full px-0 py-1 justify-center items-center mt-7 lg:mt-10">
                <span className='w-6 h-6 inline-flex justify-start items-center text-amber-600'>
                  <i class="ri-calendar-check-line text-xl"></i>
                </span>
                <h4 class="title-font text-sm font-medium text-amber-600">{item.date} {item.month} {item.year}</h4>
              </div>
              <h2 className=" w-full text-lg text-center uppercase px-1 font-medium text-gray-900 mb-1 ">
                {item.title}
              </h2>


             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visits;
