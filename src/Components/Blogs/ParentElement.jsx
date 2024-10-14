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
    <section className="text-gray-600 body-font">
      {/* Background Section with Heading */}
      <div
        className="relative w-full h-[15vh] bg-indigo-950 bg-cover bg-center flex items-center justify-center"
        // style={{
        //   backgroundImage: `url("https://img.freepik.com/free-photo/businessman-interacting-with-futuristic-graphics_23-2151003719.jpg?t=st=1727883443~exp=1727887043~hmac=720d713b98271fbdd85d00c3d5cdbbe0d1f836855f1506ff8f7dc1d42c0d1534&w=740")`,
        // }}
       >
      </div>
        <h1 className="text-5xl font-bold text-indigo-950 drop-shadow-lg uppercase my-10 text-center">Our Blogs</h1>

      {/* Blog Categories and Content */}
      <div className="w-full flex flex-col justify-between px-5 py-14 pb-0 mx-auto">
        <div className="flex w-full justify-center items-center flex-wrap mb-10">
          {categories.map((item, index) => (
            <button
              key={index}
              className={`group p-4 md:w-[14%] md:mb-1 flex lg:flex-col justify-center items-center bg-gradient-to-t from-blue-100 to-blue-200 hover:cursor-pointer transform transition duration-300 ease-in-out relative overflow-hidden ${
                clickedIndex === index ? 'scale-90' : ''
              }`}
              onClick={() => handleProject(item.title, index)}
            >
              {/* Background transition layer */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-blue-400 to-transparent transition-all duration-500 ${
                  clickedIndex === index || clickedIndex === null ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              ></div>

              <div className="relative z-10 md:w-fit inline-flex flex-col items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                <img src={item.imgUrl} alt={item.title} className="p-2 w-16 h-16" />

                {/* Show title when hovered or active */}
                <span
                  className={`relative -top-4 transition-all transform duration-700 flex-grow lg:mt-3 items-center justify-center ${
                    clickedIndex === index || 'group-hover:opacity-100 group-hover:top-2 opacity-0'
                  }`}
                >
                  <h2 className="text-gray-900 text-base title-font font-medium">{item.title}</h2>
                </span>
              </div>
            </button>
          ))}
        </div>
        <div className="w-full lg:w-5/6 mx-auto">{renderComponent()}</div>
      </div>
    </section>
  );
};

export default ParentElement;
