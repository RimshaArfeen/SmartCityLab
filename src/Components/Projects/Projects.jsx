

import React, { useState } from 'react'
import Detail from './ProjectDetail/Detail'
import VecteezyRobot from "../Imgs/RobotLamp-.png"
import AiImg from "../Imgs/AiIcon.png"

import "./Project.css"
import {
    industrialAutomationProjects,
    roboticsProjects,
    enviroumental,
    managementSystem,
    appDevelopmentProjects,
    ai_MlProjects,
    healthcareProjects
} from "./projectData"

const Projects = () => {
    const [showCard, setShowCard] = useState(false);

    const handleButtonClick = () => {
        setShowCard(!showCard); // Toggle card visibility
    };

    const [View, setView] = useState(false)
    const ViewProjects = () => {
        setView(true)
    }

    return (
        <>
            <section >
                <section class="text-gray-600 body-font">
                    <div class="w-full mx-auto flex py-4 md:flex-row flex-col items-center relative my-10">
                        <div class="md:w-1/4 w-5/6 mb-10 md:mb-0">
                            <img class="object-cover object-center rounded mx-auto" alt="hero" src={VecteezyRobot} />
                        </div>
                        <div class="md:w-2/3 py-20  px-5 md:px-0 md:pl-16 flex flex-col md:items-start md:text-left items-center text-justify">

                            <h1 class="title-font md:text-5xl text-3xl  mb-4 font-bold text-blue-900 uppercase">Our Projects</h1>
                            <p class="mb-8 leading-relaxed"> Explore our cutting-edge projects that showcase our expertise in Artificial Intelligence, Machine Learning, Internet of Things, and more. From smart systems that enhance everyday life to innovative solutions that push the boundaries of technology, our projects are designed to create real-world impact and drive the future of tech. </p>
                            {/* <div class="flex justify-center my-3">
                                <button class="inline-flex text-white bg-indigo-950 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded text-lg hover:cursor-pointer"
                                    onClick={ViewProjects}>View Projects</button>

                            </div> */}
                        </div>
                        <div class="md:w-[28%] w-3/4 mb-10 md:mb-0 absolute -z-10 right-0 -bottom-16 md:top-56">
                            <img class="aiImg object-cover object-center rounded" alt="hero" src={AiImg} />
                        </div>
                    </div>

                </section>
                {/* Projects */}

                <>

                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font pt-32 py-1 text-center text-indigo-950 uppercase">
                            Industrial automation through IoT</h1>
                        <hr className=' h-[2px] w-5/6 md:w-2/3 mx-auto my-3  mb-10 bg-amber-800' />
                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                industrialAutomationProjects.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-5 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>

                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font pt-10 py-1 text-center mb-4 text-blue-950 uppercase">
                            Robotics</h1>
                        <hr className=' h-[2px] w-5/6 md:w-1/3 mx-auto my-3  mb-10 bg-amber-800' />
                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                roboticsProjects.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-7 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>
                    {/* //Environmental Sustainability */}
                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                            Environmental Sustainability</h1>
                        <hr className=' h-[2px] w-5/6 md:w-2/3 mx-auto my-3  mb-10 bg-amber-800' />

                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                enviroumental.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-7 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>
                    <div className=' flex w-full flex-wrap flex-col md:flex-row'>

                        {/* Management System for Smart City Development */}

                        <div class="text-gray-600 body-font w-[70%]">
                            <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                                Management System for Smart City Development</h1>
                            <hr className=' h-[2px] w-5/6 mx-auto my-3  mb-10 bg-amber-800' />

                            <div class=" px-4 py-10 mx-auto flex justify-around flex-wrap w-full mb-10">
                                {
                                    managementSystem.map((item, index) => (

                                        <div key={index} class="flex  w-full md:w-[33%] -m-4 px-3 my-3">
                                            <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                                <div class="h-full flex flex-col items-center">
                                                    <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                    <div class="w-full pl-3">
                                                        <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                        <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                    ))
                                }
                            </div>

                        </div>

                        {/* Agriculture */}
                        <div class="text-gray-600 body-font w-[30%]">
                            <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                                Agriculture</h1>
                            <hr className=' h-[2px] w-5/6 mx-auto my-3  mb-10 bg-amber-800' />
                            <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">



                                <div class="flex w-full md:w-5/6 -m-4 px-3 my-4 md:my-8">
                                    <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                        <div class="h-full flex flex-col items-center">
                                            <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src="https://smartcitylab.neduet.edu.pk/images/projects/rice-quality-analyzer.jpg" />
                                            <div class="w-full pl-3">
                                                <h2 class="title-font font-medium text-lg text-gray-900">Rice Quality Analyzer</h2>
                                                {/* //Data */}
                                                <button class="text-gray-700 mb-3 bg-gray-200 p-2 rounded-lg my-2" >Learn More</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>





                        </div>

                    </div>

                    {/* appDevelopmentProjects */}
                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                            App Development</h1>
                        <hr className=' h-[2px] w-5/6 md:w-1/2 mx-auto my-3  mb-10 bg-amber-800' />
                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                appDevelopmentProjects.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-7 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>

                    {/* ai_MlProjects */}
                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                            Ai And machine learning</h1>
                        <hr className=' h-[2px] w-5/6 md:w-2/3 mx-auto my-3  mb-10 bg-amber-800' />
                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                ai_MlProjects.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-7 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>

                    {/* healthcareProjects */}
                    <div class="text-gray-600 body-font">
                        <h1 class="text-4xl font-semibold title-font py-1 pt-10 text-center mb-4 text-gray-900 uppercase">
                            Health Care Projects</h1>
                        <hr className=' h-[2px] w-5/6 md:w-2/3 mx-auto my-3  mb-10 bg-amber-800' />
                        <div class=" px-5 py-1 mx-auto flex justify-around flex-wrap w-full mb-10">
                            {
                                healthcareProjects.map((item, index) => (

                                    <div key={index} class="flex  w-full md:w-1/2 lg:w-1/4 -m-4 px-7 my-3">
                                        <div class="pb-4 w-full bg-gray-200 border-2 border-gray-300 rounded-lg">
                                            <div class="h-full flex flex-col items-center">
                                                <img alt="project" class="flex-shrink-0 rounded-t-lg w-full h-56 object-cover object-center mb-4" src={item.imgUrl} />
                                                <div class="w-full pl-3">
                                                    <h2 class="title-font font-medium text-lg text-gray-900">{item.title}</h2>
                                                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-sm">Learn More
                                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                            <path d="M5 12h14"></path>
                                                            <path d="M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                ))
                            }
                        </div>





                    </div>



                </>


                <div className="popup-container">
                    <button onClick={handleButtonClick} className="popup-button">
                        {showCard ? 'Close Card' : 'Open Card'}
                    </button>

                    <div className={`popup-card ${showCard ? 'show' : ''}`}>
                        <div class="w-full lg:w-[94%] mx-auto  my-10 mb-12 flex  justify-center flex-wrap">
                            <div class="flex flex-col px-4 py-8 lg:flex-row">
                                <div class="mb-10 flex h-fit w-full items-start py-5 lg:w-[60%]">
                                    <div class="flex w-fit flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 bg-indigo-950 hover:bg-indigo-900  rounded-lg">
                                        <span class="mb-2 border-b-2 font-semibold  border-amber-400 text-gray-50 uppercase text-xl"></span>
                                        <span class=" font-normal leading-none text-gray-400"></span>
                                    </div>
                                    <div class="flex-grow pl-3 ml-3 border-l-2 border-[#0a1575]">
                                        <h2 class="title-font text-xs font-medium tracking-widest mb-2 my-2 uppercase text-indigo-500"></h2>
                                        <h1 class="title-font text-xl md:text-3xl font-semibold text-indigo-900 mb-2"></h1>
                                        <hr className=' w-3/4 h-[2px] bg-gray-400   mb-2 ' />
                                        <p class="text-sm font-light tracking-wide text-justify text-gray-800 leading-relaxed mb-4">




                                        </p>
                                        <a class="text-indigo-500 inline-flex items-center hover:cursor-pointer mb-2 hover:text-indigo-800"
                                        >Read More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div class=" w-3/4 lg:w-2/5 flex items-start mx-auto justify-start  lg:ml-10 mt-6">
                                    <video className="rounded-lg shadow-lg h-auto hover:cursor-pointer" width="100%" controls autoPlay >
                                        <source src="" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </>

    )
}

export default Projects

