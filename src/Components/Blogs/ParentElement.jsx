import React, { useState } from 'react';
import Agriculture from './Agriculture';
import AutonomousVehicle from './AutonomousVehicle';
import { categories } from "./BlogDetails";
import IoT from './IoT';
import SocialProjects from './SocialProjects';

const ParentElement = () => {
  const [Project, setProject] = useState('Agriculture');
  const [clickedIndex, setClickedIndex] = useState(null); // To track which button is clicked

  const handleProject = (title, index) => {
    setProject(title);
    setClickedIndex(index); // Set the clicked button index
  };

  const renderComponent = () => {
    switch (Project) {
      case 'Agriculture':
        return <Agriculture />;
      case 'IoT':
        return <IoT />;
      case 'AutonomousVehicle':
        return <AutonomousVehicle />;
      case 'SocialProjects':
        return <SocialProjects />;
      case 'Ai In Healthcare':
        return <AutonomousVehicle />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='h-32 md:h-56 lg:h-28 w-full absolute -z-10 bg-indigo-900 top-0'></div>

      <section className="text-gray-600 body-font py-12">
        {/* Background Section with Heading */}
        <h1 className=' uppercase font-bold text-4xl text-indigo-800 w-full text-center relative top-28 md:top-44 lg:top-20 mb-1'
          data-aos="fade-up">Our blogs</h1>
        <div className='w-4/5 md:w-1/4 lg:w-1/4 mx-auto relative top-28 md:top-44  lg:top-20  flex justify-center items-center '
        >
          <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
            data-aos="fade-left" />
          <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
            data-aos="zoom-in"></i>
          <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
        </div>
        {/* Blog Categories and Content */}
        <div className="w-full flex flex-col justify-between px-5  relative top-36 md:top-48  lg:top-24 pb-0 mx-auto">
          <div className="flex w-full justify-center items-center flex-wrap mb-10"
          >
            {categories.map((item, index) => (
              <button
                key={index}
                className={`group p-4 md:w-[24%] lg:w-1/6 mb-1 flex lg:flex-col justify-center items-center bg-gradient-to-t from-blue-100 to-blue-200 hover:cursor-pointer transform transition duration-300 ease-in-out relative overflow-hidden ${clickedIndex === index ? 'scale-90' : ''
                  }`}
                onClick={() => handleProject(item.title, index)}
              >
                {/* Background transition layer */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-blue-400 to-transparent transition-all duration-500 ${clickedIndex === index || clickedIndex === null ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                ></div>

                <div className="relative z-10 md:w-fit inline-flex flex-col items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <img src={item.imgUrl} alt={item.title} className="p-2 w-16 h-16" />

                  {/* Show title when hovered or active */}
                  <span
                    className={`relative -top-4 transition-all transform duration-700 flex-grow lg:mt-3 items-center justify-center ${clickedIndex === index || 'group-hover:opacity-100 group-hover:top-2 opacity-0'
                      }`}
                  >
                    <h2 className="text-gray-900 text-base title-font font-medium">{item.title}</h2>
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="w-full lg:w-5/6 mx-auto"
            data-aos="fade-up">{renderComponent()}</div>
        </div>
      </section>
    </>

  );
};

export default ParentElement;
