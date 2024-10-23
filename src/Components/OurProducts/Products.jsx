
import React, { useState, useRef } from 'react';
import {productData} from "./Product";
import Icon from "../Imgs/processor.png"

const Products = () => {
  return (
    <>
    
            <div className=' h-24 w-full absolute -z-10 bg-indigo-900 top-0'></div>
    <section className="body-font pb-24 py-24 relative">

      <div className="w-full xl:w-[90%] px-5 md:px-2 lg:px-10 mx-auto relative top-36 md:top-56 lg:top-7">
        <div class="flex flex-col  w-full mb-20 ">
          {/* <span className=' w-full'><img src={Icon} alt="" className=' w-20 mx-auto'
           data-aos="zoom-out" data-aos-delay="300" /></span> */}
          <h1 className=' uppercase font-bold text-4xl text-indigo-800 w-full text-center relative top-2 md:top-6 lg:top-1 mb-2'
        data-aos="fade-up">Our Products</h1>
       
      <div className='w-4/5 md:w-1/4 lg:w-1/4 mx-auto relative top-3 md:top-6 lg:top-2  flex justify-center items-center -mt-1 '
      >
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
          data-aos="fade-left" />
        <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
          data-aos="zoom-in"></i>
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
      </div>

        <div className="w-full lg:w-[90%] relative mt-6 px-5 py-4 mx-auto">

          {
            productData.map((item, index) => (
              <>
              <div key={index} className="w-full h-fit  mb-2 lg:pl-3  rounded-lg shadow-md "
               data-aos="fade-up">
                <div className="w-full mx-auto py-8 flex flex-col lg:flex-row flex-wrap md:flex-nowrap md:justify-center ">
                  <div className="mx-auto lg:mr-3 w-fit  px-4 lg:px-0 lg:w-1/4 xl:w-1/5 md:mb-0 mb-6 flex-shrink-0 flex flex-col p-2 h-fit justify-between "
                  >
                    <span className="font-medium pr-4 capitalize text-indigo-950 text-lg md:text-sm lg:text-[1.2rem] title-font  md:pr-3"
                    >{item.category}</span>

                    <div className='w-full flex  items-center my-3 rounded-sm bg-[#17245e] hover:bg-[#1e307c] p-2
                    pt-6 md:pt-3 px-3 '
                   >
                      <span className='w-fit p-2 px-3 bg-[#e0e0e0] rounded-full' ><i class="ri-calendar-check-line mx-auto text-xl text-[#02105c] "></i></span>

                      <div className="flex flex-col justify-center items-start pl-2 my-3 "
                      >
                        <span className="text-xl font-semibold text-[#e0e0e0] md:px-1 ">{item.month}</span>
                        <p className="text-lg text-[#b3b2b2] md:text-sm md:px-1 inline md:block">{item.year}</p>

                      </div>
                    </div>

                  </div>
                  <div className=" w-[90%] lg:w-3/5 px-3  border-l-2 border-amber-600 mx-auto">
                    <h2 className=" text-xl md:text-2xl uppercase tracking-wide font-semibold text-[#02105c] title-font mb-2" 
                    >{item.title}</h2>
                    <hr className=' h-[1.7px] w-5/6 bg-blue-800 mb-2' />
                    <p className="md:text-sm lg:text-base text-justify text-gray-600
                    " 
                    >
                      {item.description}
                    </p>

                  </div>
                  <div className="w-auto my-4 lg:my-0 md:w-2/5 md:h-auto lg:w-[20%] h-[25vh] flex mx-auto  md:justify-start"
                  >
                    <img src={item.imgUrl} alt="" className="w-5/6 mx-auto lg:mx-3 h-full  lg:h-[100%] object-bottom rounded-sm
                   transition-all border-2 border-gray-200 duration-500 hover:transform hover:scale-90 hover:shadow-md" />
                  </div>
                </div>
              </div>
               <hr className=' h-[2px] mx-auto w-5/6 bg-blue-800 my-10'
               data-aos="zoom-in" />
               </>
            ))
          }
       </div>
     
      </div>
      </div>
    </section>
    </>
  );
};

export default Products;
