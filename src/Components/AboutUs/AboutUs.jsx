import React from 'react';
import './About.css';
import { Data, moreAbout } from './AboutData';
import Slider from 'react-slick';


const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section className="text-gray-600 body-font relative lg:-top-10">
      <div className="w-full lg:w-5/6 mx-auto flex px-5 py-14 md:flex-row flex-col items-center"
       >
        <div className="lg:flex-grow md:w-1/2 lg:w-3/5 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-justify justify-start"
        data-aos="fade-right">
          <h1 className="title-font text-3xl lg:text-4xl mb-4 font-normal text-indigo-950 capitalize ">Who we are:</h1>
          <h1 className="title-font text-3xl lg:text-5xl mb-4 font-bold text-indigo-800 uppercase">Smart city lab</h1>
          <p className="mb-8 leading-relaxed font-normal text-base lg:text-lg">
            Our lab is a hub for cutting-edge research, projects, and internships aimed at leveraging the latest advancements in technology to solve the challenges of urban living. We bring together students, researchers, and industry professionals to collaborate on forward-thinking solutions that make cities more efficient, sustainable, and resilient.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-2/4 w-5/6 flex flex-col justify-center items-center"
        data-aos="fade-left">
          <img className="object-cover object-bottom rounded" alt="hero" src="https://lh3.googleusercontent.com/p/AF1QipMXdJHpGprGQ3mBLQdgXCPxq4gU8I4BRPE1LxXQ=s680-w680-h510" />
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

      <div className=" w-full lg:w-5/6 px-5 py-14 mx-auto flex flex-wrap">
      <div className="w-1/2 h-[80%] flex justify-center items-center overflow-hidden" data-aos="fade-right">
  <div 
    className="transitioned-image w-full h-96"
  />
</div>

        <div className="flex flex-col flex-wrap w-1/2" data-aos="fade-left">
          {Data.map((item, index) => (
            <div key={index} className="w-full md:pl-10">
              <div className="flex relative pb-6">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-500 inline-flex items-center justify-center text-white relative z-10">
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider capitalize">{item.title}</h2>
                  <hr className=" w-3/4 flex-grow border-blue-800" />
                  <p className="leading-relaxed text-justify text-base">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* for Image */}
      <div class="w-full md:w-5/6 lg:w-full py-24 mx-auto mt-16">
    <div class="flex flex-wrap justify-around">
{
  moreAbout.map((item, index) => (

      <div  key={index}  class=" md:w-1/2 lg:w-[24%] sm:mb-0 mb-6"
      data-aos={item.css} >
        <div class="rounded h-64 overflow-hidden">
        {item.videoUrl ? (
          <video
          className="object-cover object-center h-full w-full"
          controls
          src={item.videoUrl}
        />
        ) : (

          <img alt="content" class="object-cover object-center h-full w-full" src={item.imgUrl}/>
        )}
        </div>
        <a href={item.link} class="text-xl font-semibold tracking-wide uppercase title-font text-gray-900 pt-6 pl-2
        hover:text-gray-700">{item.title}</a>
      </div>
     
    ))
}
    </div>
  </div>
    </section>
  );
};

export default AboutUs;
