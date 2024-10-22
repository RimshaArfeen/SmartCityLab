import React from 'react';
import Slider from 'react-slick';
import "./AcademicCollab.css";
import data from "./data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
const AcademicCollab = () => {
  // Slick slider settings
  const settings = {
    
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="body-font lg:w-5/6 mx-auto mt-20 relative top-28 "
    data-aos="fade-down">
      <div className="p-5 mx-auto  bg-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Heading Section */}
          <div className=" w-full md:w-[30%] lg:w-1/4 flex-shrink-0 flex md:flex-col uppercase border-l-4 md:border-l-0 md:border-r-4 border-amber-700 px-5
          py-5"
          data-aos="fade-right">
            <span className="font-semibold title-font text-xl  text-gray-700 mr-1">Our Academic</span>
            <span className="font-bold tracking-wide text-xl md:text-2xl  text-gray-700"> Collaboration</span>
          </div>

          {/* React Slick Slider */}
          <div className=" w-full md:w-[70%] lg:w-3/4"
          data-aos="fade-left">
            <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index} className="p-4 w-1/2 md:w-1/3 lg:w-1/5">
                  <div className=" relative h-44 rounded overflow-hidden  bg-white flex justify-center items-center">
                    <img
                      alt={item.alt}
                      className="py-1 px-2 object-center w-full h-full lg:w-[90%] block shadow-sm rounded-lg aspect-video object-contain"
                      src={item.src}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AcademicCollab;
