import React from 'react';
import './Mission.css';
import { Data } from './MissionData';

const Mission = () => {
    return (
        <>
            <div className='h-36 md:h-[30vh] lg:h-28 w-full -z-10 bg-blue-900 top-0 absolute'></div>
            <div id="mission" className="px-4 py-8 lg:px-16 lg:py-12 bg-gray-50 text-justify relative top-28 md:top-36 lg:top-10 mb-40 md:mb-56 lg:mb-40">
                <div className="w-full   mx-auto  md:flex-row flex-col justify-between items-start">
                    <div className="mb-10 md:mb-0 flex justify-end items-center flex-col my-20"
                    >

                        <h1 className=' uppercase font-bold text-4xl mb-1 text-indigo-800 w-full text-center relative'
                            data-aos="fade-up">Our Mission</h1>
                        <div className='w-full md:w-1/4 lg:w-1/4 mx-auto relative  flex justify-center items-center mb-8 '
                        >
                            <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
                                data-aos="fade-left" />
                            <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
                                data-aos="zoom-in"></i>
                            <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
                        </div>
                        <h3 id="para1" className="text-[1rem] lg:w-[90%]  leading-relaxed mb-6 text-gray-700">
                            The NED University of Engineering & Technology has entrusted the RCAI with the role of advancing knowledge
                            for the benefit of society. The research centre seeks to accomplish this national mission while respecting
                            ethical rules and showing commitment to professional equality.
                        </h3>
                    </div>
                    <div class=" xl:w-3/4 p-5 lg:px-8 py-10 my-10 mb-16 bg-gray-200 border-b-4 border-blue-800  mx-auto"
                        data-aos="fade-up" data-aos-easing="ease-in-out">
                        <div class="w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-blue-900 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p class="leading-relaxed text-lg">
                                To identify and conduct, alone or with its partners, research that is in the interest of science as well as the technological, social, and cultural advancement of the country.
                            </p>
                            {/* <blockquote class="italic leading-relaxed text-lg mt-6">
                                    "Mission entrusted by the NED University of Engineering & Technology to the RCAI, decree of January, 01, 2016."
                                </blockquote> */}
                            <span class="inline-block h-1 w-10 rounded bg-indigo-900 mt-8 mb-6"></span>

                            <p class="text-gray-500">Mission entrusted by the NED University of Engineering & Technology to the RCAI, decree of January, 01, 2016.</p>
                        </div>
                    </div>


                    <div className="  flex flex-col md:items-start mt-10  ">
                        <h1 className='text-3xl w-full tracking-wide font-bold text-center text-indigo-900 uppercase mb-6'>Five pronged mission</h1>
                        <div className="flex flex-wrap justify-center" >
                            {Data.map((item, index) => (

                                <div key={index} className="md:w-1/2 my-3 lg:my-1 p-4 mx-auto hover:cursor-pointer transition-all duration-500 hover:rounded relative overflow-hidden group"
                                    data-aos={`${item.css}`}>

                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-300 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"></div>


                                    <div className="transform lg:scale-100 relative z-10 p-5 py-0 flex flex-col items-start border-l-[3px] border-amber-600">
                                        <a className="inline-flex items-center py-5">
                                            <img alt="blog" src={item.iconUrl} className="w-12 h-12 flex-shrink-0 object-cover object-center -mb-6" />
                                        </a>
                                        <h2 className="text-lg uppercase text-left title-font font-medium text-indigo-900 mt-4 mb-4">{item.title}</h2>
                                        <p className="leading-relaxed mb-8 text-sm text-gray-700">{item.description}</p>
                                    </div>
                                </div>



                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <section>

            </section>



        </>


    );
};

export default Mission;
