
import React, { useState, useRef } from 'react';
import {productData} from "./Product";
import Icon from "../Imgs/processor.png"

const Products = () => {
  return (
    <section className="body-font pb-24 py-24 relative">
            <div className=' h-24 w-full absolute -z-10 bg-indigo-900 top-0'></div>

      <div className="w-full xl:w-[90%] px-5 md:px-2 lg:px-10 mx-auto relative top-14">
        <div class="flex flex-col text-center w-full mb-20 ">
          <span className=' w-full'><img src={Icon} alt="" className=' w-20 mx-auto'
           data-aos="zoom-out" data-aos-delay="300" /></span>
          <h1 class="sm:text-3xl text-4xl font-semibold title-font mb-1 text-indigo-900 mt-4"
           data-aos="fade-up" data-aos-delay="300">Our Products</h1>
          <p class="lg:w-2/3 text-amber-600 mx-auto tracking-widest font-normal text-lg mb-4 uppercase"
          data-aos="fade-up">
            Empowering Future Innovators
          </p>
          <div className=' flex justify-center items-center'>
            <hr className=' w-1/4 bg-indigo-800 h-[3px]'  data-aos="fade-right" data-aos-delay="300" />
            <span><i class="ri-arrow-down-s-line text-4xl text-amber-700"  data-aos="fade-down" data-aos-delay="300"></i></span>
            <hr className=' w-1/4 bg-indigo-800 h-[3px]'  data-aos="fade-left" data-aos-delay="300" />
          </div>
        </div>

       
          {
            productData.map((item, index) => (
              <>
              <div key={index} className="w-full h-fit  mb-2 lg:pl-3  rounded-lg shadow-md "
               data-aos="fade-up">
                <div className="w-full mx-auto py-8 flex flex-col lg:flex-row flex-wrap md:flex-nowrap md:justify-center ">
                  <div className="mx-auto lg:mr-3 w-fit  px-4 lg:px-0 lg:w-1/4 xl:w-1/5 md:mb-0 mb-6 flex-shrink-0 flex flex-col p-2 h-fit justify-between "
                  data-aos="fade-right">
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
       
        {/* <div className=' w-1/3 md:w-[15%] flex justify-between mx-auto my-5'>
          <button className="button" onClick={previous} class=" p-3 px-4 rounded-full bg-red-800
           text-red-100 hover:cursor-pointer hover:bg-red-600">
            <i class="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button className="button" onClick={next} class=" p-3 px-4 rounded-full bg-indigo-800
           text-indigo-100 hover:cursor-pointer hover:bg-indigo-600">
            <i class="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Products;
