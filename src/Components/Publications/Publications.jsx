import React, { useState } from 'react';
import { articles, pubDetails } from './PubData';
import { NavLink } from 'react-router-dom';
const Publications = () => {
  const [selectedDate, setSelectedDate] = useState(2020);
  const [active, setActive] = useState(false)
  const [Scroll, setScroll] = useState(false)
  // Function to handle article click
  const handleArticleClick = (date) => {
    setSelectedDate(date);
  };
  
  const handleScroll = (index) => {
    setScroll(index === Scroll ? true : false)
  }

  return (
    <>
      <div className=' h-28 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0'></div>
      <section className="text-gray-600 body-font relative">
        <div className="w-fullpx-0 md:px-5 py-24 mx-auto flex flex-col md:flex-row  justify-around items-start relative top-14 md:top-36 ">
          {/* Articles */}
          <h1 className=" ml-2 title-font text-2xl my-1 md:hidden font-semibold tracking-wide text-gray-900 uppercase  ">
            Published Years
          </h1>
          <div className=" flex flex-wrap  bg-gray-50 rounded-lg md:w-1/3 lg:w-1/4 h-48 md:h-[70vh]  lg:h-[80vh] overflow-y-auto scroll-my-5">

            {articles.map((item, index) => (
              <div key={index} className="p-2 w-1/3 md:w-full">
                <div
                  className={`${selectedDate === item.date ? " transform transition-all bg-gradient-to-r from-blue-700 to-indigo-800 text-white" : "border-gray-200"
                    } h-full flex items-center duration-500  border-2 p-4 rounded cursor-pointer`}
                  onClick={() => handleArticleClick(item.date)}
                >
                  <span className={`${selectedDate === item.date ? " transform transition-all  text-white" : "text-blue-800"} w-fit  p-2 px-3 -ml-2 flex justify-center items-center`}>
                    <i className="ri-article-line text-lg lg:text-2xl "></i>
                  </span>
                  <div className="flex-grow leading-relaxed">
                    <p className={`${selectedDate === item.date ? " transform transition-all  text-white" : "text-indigo-800"}text-xs `}>{item.date}</p>
                    <h2 className={`${selectedDate === item.date ? " transform transition-all  text-white" : "text-gray-900"} text-base   title-font font-medium`}>
                      <span className="hidden md:inline-block mr-1">Published in </span>{item.date}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Articles Details */}
          <div className="md:w-2/3 lg:w-3/4 mt-16  md:-mt-4 mb-48">
            <div className="md:p-4 lg:w-full">
              <div className="h-full bg-gray-100 bg-opacity-75 px-4 md:px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
              data-aos="fade-right">
                {selectedDate ? (
                  <>
                    <h1 className="title-font text-lg font-medium text-gray-700 uppercase mb-3 md:mb-0 ">
                      Articles published in {selectedDate}
                    </h1>
                    {/* Filter pubDetails based on the selected date */}
                    {pubDetails
                      .filter((pub) => pub.publishedDate === selectedDate)
                      .map((pubDetail, index) => (
                        <>

                          <div key={index} class="w-full mx-auto mb-14 md:mb-0 md:mt-6"
                          >
                            <div class="flex flex-col text-center w-full mb-6">

                              <h1 class="text-xl lg:text-2xl font-medium title-font  text-center text-indigo-800 capitalize"
                               >{pubDetail.title}</h1>
                              <hr className=' w-5/6 md:w-3/4 block bg-amber-600 h-[2px] md:h-1 rounded-full mx-auto mt-2 '
                                />
                            </div>
                            <div class="flex flex-col lg:flex-row mt-10">
                              <div class="w-full lg:w-[70%] lg:pr-2 sm:py-8 lg:border-r border-indigo-700 sm:border-t-0  mb-4 pb-4 sm:mb-0 text-left">
                                <h1 class=" text-lg lg:text-[1.25rem] uppercase font-medium title-font text-indigo-900 -mt-3 ">Abstract</h1>
                                <hr className='w-[13%] block bg-indigo-500 text-indigo-700 h-[4px] rounded-full mb-2  ' />
                                <div className=' relative'>

                                  <p class="leading-relaxed group text-base lg:text-lg mb-4 text-justify h-[25vh] md:h-[40vh] pr-2 py-2 overflow-y-auto scroll-my-5 rounded bg-gray-100 hover:cursor-pointer"
                                    onScroll={() => handleScroll(index)}>{pubDetail.details}</p>

                                  <hr className={` ${Scroll ? "block" : "hidden"} w-[10%] bg-gray-400 h-[2px] rounded-full mt-2 absolute z-10 top-7
                         `}
                                  />
                                </div>

                                <a href={`${pubDetail.readMore}`} class=" text-indigo-700 inline-flex items-center hover:cursor-pointer">Learn More
                                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                  </svg>
                                </a>
                              </div>
                              <div class=" w-full lg:w-[30%] text-center lg:pl-8 sm:py-8">
                                <div class="flex  flex-wrap -m-4">
                                  <div class="p-4  w-full md:w-2/5 lg:w-full">
                                    <h2 class="font-medium title-font tracking-widest text-gray-900 text-sm text-left uppercase">Journal</h2>
                                    <hr className='w-1/5 bg-indigo-500 text-indigo-700 h-[4px] rounded-full mb-2  ' />
                                    <nav class="flex flex-col items-start sm:text-left text-center -mb-1 space-y-2.5">
                                      <a>
                                        {pubDetail.journal}
                                      </a>
                                      <a className='  font-medium text-gray-800'>
                                        <span class="bg-indigo-100  text-indigo-700 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                          </svg>
                                        </span>Volume : <a className='font-normal text-gray-600'>
                                          {pubDetail.volume}
                                        </a>
                                      </a>
                                      <a className='  font-medium text-gray-800'>
                                        <span class="bg-indigo-100  text-indigo-700 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="w-3 h-3" viewBox="0 0 24 24">
                                            <path d="M20 6L9 17l-5-5"></path>
                                          </svg>
                                        </span>Publisher : <a className='font-normal text-gray-600'> {pubDetail.publisher}</a>

                                      </a>
                                    </nav>
                                  </div>
                                  <div class="p-4 w-full md:w-2/5 lg:w-full">
                                    <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-left uppercase">Authors:
                                      <hr className='w-1/5 bg-indigo-500 text-indigo-700 h-[4px] rounded-full mb-2  ' />

                                    </h2>
                                    <nav className="flex flex-col items-start text-left  -mb-1 space-y-2.5">
                                      {Array.isArray(pubDetail.authors) && pubDetail.authors.length > 0 ? (
                                        pubDetail.authors[0].split(', ').map((author, index) => ( // Split the string into an array
                                          <a key={index} className="flex items-center">
                                            <span className="bg-indigo-100 text-indigo-500 text-indigo-700 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                                              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                              </svg>
                                            </span>
                                            {author} {/* Display each author's name */}
                                          </a>
                                        ))
                                      ) : (
                                        <p>No authors available</p> // Optional: Display a message if there are no authors
                                      )}
                                    </nav>


                                  </div>

                                </div>

                              </div>
                            </div>

                          </div>
                          <hr className=' w-full md:w-3/4 bg-indigo-500 text-indigo-700 h-[2px] rounded-full mx-auto my-14'
                            data-aos="zoom-in" />
                        </>
                      ))}

                  </>
                ) : (
                  <p className="leading-relaxed mb-3">Please select an article to view its details.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
