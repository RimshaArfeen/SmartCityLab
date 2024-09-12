import React, { useState, useRef } from 'react';
import Data from "./WorkShopData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Icon from "../Imgs/processor.png"

const WorkShops = () => {

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,

  };

  return (
    <section className="body-font pb-24 py-24 relative">
      <div className="w-full px-5 md:px-2 lg:px-10 mx-auto">
        <div class="flex flex-col text-center w-full mb-20 ">
          <span className=' w-full'><img src={Icon} alt="" className=' w-20 mx-auto' /></span>
          <h1 class="sm:text-3xl text-4xl font-semibold title-font mb-1 text-indigo-900 mt-4">Our Workshops</h1>
          <p class="lg:w-2/3 text-amber-600 mx-auto tracking-widest font-normal text-lg mb-4 uppercase">
            Empowering Future Innovators
          </p>
          <div className=' flex justify-center items-center'>
            <hr className=' w-1/4 bg-indigo-800 h-[3px]' />
            <span><i class="ri-arrow-down-s-line text-4xl text-amber-700"></i></span>
            <hr className=' w-1/4 bg-indigo-800 h-[3px]' />
          </div>
        </div>

        <Slider
          ref={slider => {
            sliderRef = slider;
          }}
          {...settings}>
          {
            Data.map((item, index) => (
              <div key={index} className=" w-full  rounded-lg shadow-sm ">
                <div className="py-8 flex flex-wrap md:flex-nowrap md:justify-center ">
                  <div className="md:w-[25%] md:mb-0 mb-6 flex-shrink-0 flex flex-col p-2 h-fit ">
                    <span className="font-medium pr-4 capitalize text-indigo-950 text-lg md:text-sm lg:text-[1.2rem] title-font  md:pr-3">{item.category}</span>

                    <div className='inline md:flex  items-center my-3 rounded-sm bg-[#17245e] hover:bg-[#1e307c] p-2  lg:w-5/6 
                    pt-6 md:pt-3 px-3 '>
                      <span className='w-fit p-2 px-3 bg-[#e0e0e0] rounded-full' ><i class="ri-calendar-check-line mx-auto text-xl text-[#02105c] "></i></span>

                      <div className="flex flex-col justify-center items-start pl-2 my-3 ">
                        <span className="text-xl font-semibold text-[#e0e0e0] md:px-1 ">{item.date}</span>
                        <p className="text-lg text-[#b3b2b2] md:text-sm md:px-1 inline md:block">{item.month}'{item.year}</p>

                      </div>
                    </div>

                  </div>
                  <div className="md:w-1/2 px-3  border-l-2 border-amber-600">
                    <h2 className="text-2xl lg:text-3xl uppercase tracking-wide font-normal text-[#02105c] title-font mb-2">{item.title}</h2>
                    <hr className=' h-[1.7px] w-5/6 bg-blue-800 mb-2' />
                    <p className="md:text-sm lg:text-lg text-justify text-gray-600
                    ">
                      {item.description}
                    </p>

                  </div>
                  <div className="w-[90%] md:w-[22%]  h-full my-8 md:my-0 flex  mx-auto md:mx-0 md:justify-start">
                    <img src={item.imgUrl} alt="" className="w-full mx-3 h-full rounded-sm
                   transition-all  duration-500 hover:transform hover:scale-90 hover:shadow-md" />
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
        <div className=' w-1/3 md:w-[15%] flex justify-between mx-auto my-5'>
          <button className="button" onClick={previous} class=" p-3 px-4 rounded-full bg-red-800
           text-red-100 hover:cursor-pointer hover:bg-red-600">
            <i class="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button className="button" onClick={next} class=" p-3 px-4 rounded-full bg-indigo-800
           text-indigo-100 hover:cursor-pointer hover:bg-indigo-600">
            <i class="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkShops;
