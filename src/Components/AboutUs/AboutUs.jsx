import React from 'react';
import './About.css';
import {Data, moreAbout } from './AboutData';
import CisDepImg from "../Imgs/CisDep.jpg"
import { NavLink } from 'react-router-dom';
const AboutUs = () => {

  return (
    <section className="text-gray-600 body-font relative -top-[10rem] lg:-top-10">
      <div className="w-full lg:w-5/6 mx-auto flex px-5 py-14 md:flex-row flex-col items-center"
      >
        {/* CIS Section */}
        <hr className=" hidden md:inline-block w-1 mr-4 h-72 -mt-4 rounded-lg  bg-indigo-800" data-aos="fade-right"/>
        <div className="lg:flex-grow md:w-1/2 lg:w-3/5 md:pr-12 flex flex-col md:items-start mb-16 md:mb-0 items-center text-justify justify-start "
          data-aos="fade-right">
          <h1 className="title-font text-3xl lg:text-4xl mb-4 font-normal text-indigo-950 capitalize ">Who we are:</h1>
          <h1 className="title-font text-3xl lg:text-5xl mb-4 font-bold text-indigo-800 uppercase">Smart city lab</h1>
          <p className="mb-8 leading-relaxed font-normal text-base lg:text-lg">
            Our lab is a hub for cutting-edge research, projects, and internships aimed at leveraging the latest advancements in technology to solve the challenges of urban living. We bring together students, researchers, and industry professionals to collaborate on forward-thinking solutions that make cities more efficient, sustainable, and resilient.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/4 w-5/6 flex flex-col justify-center items-center"
          data-aos="fade-left">
          <img className="object-cover object-bottom rounded" alt="hero" src={CisDepImg} />
          <div className="w-full text-sm leading-relaxed my-3 text-gray-900 text-center">
            <span>Located in </span>
            <h1 className="title-font text-base text-[1rem] font-medium text-indigo-800 uppercase inline">
              Computer Information Systems (CIS) Dep.
            </h1>
            <div className="flex items-center my-2">
              <hr className="flex-grow border-amber-700" />
              <h1 className="px-3 font-normal text-sm text-center">
                NED University of Engineering & Technology
              </h1>
              <hr className="flex-grow border-amber-700" />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full lg:w-5/6 px-5 py-14 mx-auto flex flex-col md:flex-row flex-wrap">
        <div className=" w-full md:w-1/2 h-[80%] flex justify-center items-center overflow-hidden" data-aos="fade-right">
          <div
            className="transitioned-image w-full h-96"
          />
        </div>

        <div className="flex flex-col flex-wrap mt-14 md:mt-0  w-full md:w-1/2" data-aos="fade-left">
          {Data.map((item, index) => (
            <div key={index} className="w-full md:pl-10">
              <div className="flex relative pb-6">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-indigo-700 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-amber-500 bg-gray-50 inline-flex items-center justify-center text-white relative z-10">
                  <img src={item.imgUrl} alt={item.title} className={` w-2/3 h-2/3`} />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider capitalize">{item.title}</h2>
                  <hr className=" w-3/4 flex-grow border-amber-500" />
                  <p className="leading-relaxed text-justify text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* for Images */}
      <div class="w-full py-24 mx-auto mt-16">
      <h1 className=' uppercase  font-bold text-4xl text-indigo-800 w-full text-center relative'
        data-aos="fade-up">Miscellaneous</h1>
      <div className='  w-full md:w-1/4 lg:w-1/4 mx-auto mb-3 flex justify-center items-center '
      >
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
          data-aos="fade-left" />
        <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
          data-aos="zoom-in"></i>
        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
      </div>
        <div class="flex flex-wrap justify-around">
          {
            moreAbout.map((item, index) => (

              <div key={index} class="md:w-[46%] lg:w-[24%]  mb-8 aos-animate">
                <div class={`${item.bgColor}  rounded h-[40vh]  bg-white flex justify-center items-center flex-col  overflow-hidden mb-3`}>
                  

                    <img alt="content" class="object-cover object-center h-fit w-[88%] mx-auto" src={item.imgUrl} />
                 
                </div>
                <NavLink to={item.link}
                  class="text-lg font-medium tracking-wide uppercase title-font text-gray-900 pt-6 pl-4
         hover:underline-offset-4 hover:text-indigo-700 hover:underline hover:cursor-pointer">
                  {item.title}</NavLink>
              </div>

            ))
          }
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
