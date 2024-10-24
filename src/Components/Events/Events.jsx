
import React, { useState } from 'react';
import { EventsData } from './EventData';
import "./Event.css"
const Events = () => {
  const [flip, setFlip] = useState(null);

  const flipCard = (index) => {
    setFlip(index === flip ? null : index); // Toggle flip state
  };
 
  return (
    <> 
         <div  className='h-32 md:h-[30vh] lg:h-28 w-full absolute -z-10 bg-blue-900 top-0'></div>
         <section className="text-indigo-700 body-font overflow-hidden mx-auto ">
      <h1 className=' uppercase font-bold text-4xl text-indigo-800 w-full text-center relative top-36 md:top-56 lg:top-28'
        data-aos="fade-up">Events</h1>
      <div className='w-4/5 md:w-1/4 lg:w-1/4 mx-auto relative top-36 md:top-56 lg:top-28  flex justify-center items-center '
      >
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
          data-aos="fade-left" />
        <i class="ri-snowflake-fill text-3xl font-medium text-indigo-800 mx-auto text-center"
          data-aos="zoom-in"></i>
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
      </div>
      <div className="w-full lg:w-[90%] relative top-10 md:top-28 lg:top-4  px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full items-start justify-around lg:justify-between ">
          {EventsData.map((item, index) => (
        
            
            <div key={index} className="w-full group md:w-[45%] lg:w-[30%] flex flex-col items-center my-16 md:mb-10   mx-auto lg:mb-4"
              data-aos="fade-up">
              <div className="flip-card group">
                <div className={`flip-card-inner  flex justify-center items-center transition-transform duration-500`}>
                  <div className="flip-card-front flex flex-col justify-center h-full items-center  mb-14 mt-4 lg:mt-0">
                    <img src={item.imgUrl} alt={item.title} className=' h-full object-bottom border-2 border-gray-200 shadow-md rounded' />

                  </div>

                  <div className={`flip-card-back top-0 w-full  flex flex-col text-gray-100 justify-center items-center p-3 px-5 bg-blue-800 border-indigo-800`}>
                    <p className="leading-relaxed text-base mb-8 text-justify">{item.description}</p>
                    <hr className='w-2/3 bg-amber-600 h-[2px] mb-2 transform scale-0 opacity-0 transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100' />
                  </div> 
                </div>
              </div>
              <div className="flex w-full px-0 py-1 justify-center items-center mt-12 lg:mt-0">
                <span className='w-6 h-6 inline-flex justify-start items-center text-amber-600'>
                  <i class="ri-calendar-check-line text-xl"></i>
                </span>
                <h4 class="title-font text-sm font-medium text-amber-600">{item.date} {item.month} {item.year}</h4>
              </div>
              <h2 className=" w-full text-lg text-center uppercase ml-1 font-medium text-indigo-700 mb-1 ">
                {item.title}
              </h2>
             
            </div>
            
          
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Events;
