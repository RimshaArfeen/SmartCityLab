import React, { useReducer, useState } from 'react';
import Precision_agriculture from './Precision_agriculture';
import IoT from './IoT';
import Smart_healthcare from './Smart_healthcare';
import Robotics from './Robotics';
import Social_environment_inovation from './Social_environment_inovation';
import Intelligent_transport from './Intelligent_transport';
import { categories } from './InFocusDetails';

const Parent = () => {
  const [Project, setProject] = useState('Precision_agriculture');

  const handleProject = (title) => {
    setProject(title);
  };


  const renderComponent = () => {
    switch (Project) {
      case 'Precision_agriculture':
        return <Precision_agriculture />;
      case 'IoT':
        return <IoT />;
      case 'Smart_healthcare':
        return <Smart_healthcare />;
      case 'Robotics':
        return <Robotics />;
      case 'Intelligent_transport':
        return <Intelligent_transport />;
      case 'Social_environment_inovation':
        return <Social_environment_inovation />;
      default:
        return null;
    }
  };


  return (
    <>
      <div className='h-36 md:h-[30vh] lg:h-28 w-full -z-10 bg-blue-900 top-0 absolute'></div>

      <section className="text-gray-600 body-font">
        <div className="w-full lg:[90%] flex flex-col justify-between px-5 mx-auto relative top-36 md:top-56 lg:top-32 mb-40 ">
          <div className="flex w-full justify-between items-center flex-wrap mb-10">
            {categories.map((item) => (
              <button
                key={item.title}
                className="p-4 w-[95%] md:w-1/3 lg:w-fit md:mb-1 flex lg:flex-col justify-center items-center focus:bg-blue-100 hover:cursor-pointer"
                onClick={() => handleProject(item.title)}
              >
                <div className="w-12 lg:w-16 h-12 lg:h-16 inline-flex items-center justify-center rounded-full text-indigo-500 flex-shrink-0">
                  <img src={item.imgUrl} alt={item.title} className="p-2" />
                </div>
                <div className="flex-grow lg:mt-1 items-center justify-center">
                  <h2 className="text-gray-900 text-lg title-font font-medium">{item.title}</h2>
                </div>
              </button>
            ))}


          </div>
          <div className="w-full">{renderComponent()}</div>
        </div>
      </section>
    </>
  );
};

export default Parent;
