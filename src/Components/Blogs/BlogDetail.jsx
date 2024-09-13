<<<<<<< HEAD
import React from 'react';
import { projects } from "./BlogDetails";
import "./Blog.css"
const BlogDetail = ({ selectedTitle }) => {
  const selectedProject = projects.find((project) => project.title === selectedTitle);

  return (
    <section className="text-gray-600 body-font">
      <div className="w-full px-5 py-24 mx-auto flex flex-wrap">
        {selectedProject ? (
          <>
          <div className=' scroll flex flex-col justify-center items-center  w-full -mt-28 mb-16 my-5'>
            <h3 className=' text-xl font-medium text-amber-800'>Scroll Down</h3>
            <span><i class="ri-arrow-down-wide-line  text-4xl text-amber-800 hover:cursor-pointer"></i></span>
           </div>
           <div class="w-full lg:w-[94%] mx-auto  my-10 mb-12 flex  justify-center flex-wrap">
          <div class="flex flex-col px-4 py-8 lg:flex-row">
            <div class="mb-10 flex flex-col md:flex-row h-fit w-full items-start py-5 lg:ml-8 lg:w-[60%]">
              <div class="flex w-fit  my-6 md:my-0 flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 bg-indigo-950 hover:bg-indigo-900  rounded-lg">
                <span class="mb-2 border-b-2 font-semibold  border-amber-400 text-gray-50  text-xl">{selectedProject.date}</span>
                <span class=" font-normal leading-none text-gray-400">{selectedProject.month}'{selectedProject.year}</span>
              </div>
              <div class="flex-grow pl-3 md:ml-3 border-l-2 border-[#0a1575]">
                <h2 class="title-font text-xs font-medium tracking-widest mb-2 my-2 uppercase text-indigo-500">{selectedProject.category}</h2>
                <h1 class="title-font text-xl md:text-3xl font-semibold text-indigo-900 mb-2">{selectedProject.title}</h1>
                <hr className=' w-3/4 h-[2px] bg-amber-600   mb-2 ' />
                <p class="text-sm font-light tracking-wide text-justify text-gray-800 leading-relaxed mb-4">{selectedProject.description}
                  {/* {btn === index && (
                    <span>{selectedProject.readMore}</span>

                  */}
                </p>
                {/* <a class="text-indigo-500 inline-flex items-center hover:cursor-pointer mb-2 hover:text-indigo-800">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

            <div class="   w-[98%] lg:w-2/5 flex items-start mx-auto justify-center lg:ml-14 shadow-sm">
              <img className="rounded-lg w-full shadow-lg h-[80%] hover:cursor-pointer border-[5px] border-gray-200"
                 src={selectedProject.imgUrl} alt={selectedProject.title}></img>
                
              
            </div>
          </div>
        </div>
          </>
        ) : (
          <p>No project selected</p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
=======
import React from 'react';
import { projects } from "./BlogDetails";
import "./Blog.css"
const BlogDetail = ({ selectedTitle }) => {
  const selectedProject = projects.find((project) => project.title === selectedTitle);

  return (
    <section className="text-gray-600 body-font">
      <div className="w-full px-5 py-24 mx-auto flex flex-wrap">
        {selectedProject ? (
          <>
          <div className=' scroll flex flex-col justify-center items-center  w-full -mt-28 mb-16 my-5'>
            <h3 className=' text-xl font-medium text-amber-800'>Scroll Down</h3>
            <span><i class="ri-arrow-down-wide-line  text-4xl text-amber-800 hover:cursor-pointer"></i></span>
           </div>
           <div class="w-full lg:w-[94%] mx-auto  my-10 mb-12 flex  justify-center flex-wrap">
          <div class="flex flex-col px-4 py-8 lg:flex-row">
            <div class="mb-10 flex flex-col md:flex-row h-fit w-full items-start py-5 lg:ml-8 lg:w-[60%]">
              <div class="flex w-fit  my-6 md:my-0 flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 bg-indigo-950 hover:bg-indigo-900  rounded-lg">
                <span class="mb-2 border-b-2 font-semibold  border-amber-400 text-gray-50  text-xl">{selectedProject.date}</span>
                <span class=" font-normal leading-none text-gray-400">{selectedProject.month}'{selectedProject.year}</span>
              </div>
              <div class="flex-grow pl-3 md:ml-3 border-l-2 border-[#0a1575]">
                <h2 class="title-font text-xs font-medium tracking-widest mb-2 my-2 uppercase text-indigo-500">{selectedProject.category}</h2>
                <h1 class="title-font text-xl md:text-3xl font-semibold text-indigo-900 mb-2">{selectedProject.title}</h1>
                <hr className=' w-3/4 h-[2px] bg-amber-600   mb-2 ' />
                <p class="text-sm font-light tracking-wide text-justify text-gray-800 leading-relaxed mb-4">{selectedProject.description}
                  {/* {btn === index && (
                    <span>{selectedProject.readMore}</span>

                  */}
                </p>
                {/* <a class="text-indigo-500 inline-flex items-center hover:cursor-pointer mb-2 hover:text-indigo-800">Read More
                  <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a> */}
              </div>
            </div>

            <div class="   w-[98%] lg:w-2/5 flex items-start mx-auto justify-center lg:ml-14 shadow-sm">
              <img className="rounded-lg w-full shadow-lg h-[80%] hover:cursor-pointer border-[5px] border-gray-200"
                 src={selectedProject.imgUrl} alt={selectedProject.title}></img>
                
              
            </div>
          </div>
        </div>
          </>
        ) : (
          <p>No project selected</p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
>>>>>>> e3d1264 (Your commit message)
