
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { News_, NewsLetter } from './NewsData'
import "./News.css"
const News = () => {
    const [btn, setBtn] = useState(false)
    const ToggleBtn = (index) => {
        setBtn(btn === index ? null : index)
    }


    return (
        <>

            <div className='h-36 md:h-[30vh] lg:h-24 w-full absolute -z-10 bg-blue-900 top-0 '></div>

            <section class="body-font overflow-hidden text-gray-600 relative top-28 md:top-44 lg:top-16 mb-48">
                <div data-aos="fade-down" data-aos-duration="1000" class="flex flex-col text-center w-fit my-16 mb-8 mx-auto">

                    <h1 className='uppercase font-bold text-4xl text-indigo-800 w-full text-center relative'
                        data-aos="fade-up">news and highlights</h1>
                    <div className='w-full mx-auto relative flex justify-center items-center '
                    >
                        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2'
                            data-aos="fade-left" />
                        <i class="ri-snowflake-fill text-4xl font-medium text-indigo-800 mx-auto text-center"
                            data-aos="zoom-in"></i>
                        <hr className='w-1/3 bg-amber-600 h-[2px] mb-2' data-aos="fade-right" />
                    </div>
                </div>
                <div class="mx-auto w-full flex flex-col md:flex-row flex-wrap items-center justify-between">
                    {/* News */}
                    <div className="md:w-[67%] lg:w-[70%] -m-12 mx-auto flex  flex-wrap border-2 border-gray-200 bg-gray-50 h-[80vh] overflow-y-auto scroll-my-5 rounded">
                        <div class="flex flex-col text-center w-fit my-6 px-5">

                            <h1 class="text-xl lg:text-3xl uppercase font-normal title-font mb-1 text-indigo-950">Recent stories and insights</h1>
                            <hr class="h-2 bg-blue-900 w-full mx-auto mt-[1px]" />

                        </div>
                        {News_.map((item, index) => (
                            <>
                                <div key={index} className="w-full flex flex-wrap">
                                    {/* Left section: News content */}
                                    <div
                                        className="NewsSec w-full lg:w-[65%] flex h-fit flex-col items-start p-8 pb-0 md:pb-8 my-10 mb-0 md:my-0"
                                    >
                                        <a className="w-full inline-flex items-center justify-between my-5" >
                                            <span className="w-12 h-12 border border-gray-400 rounded-full flex justify-center items-center">
                                                <i className="ri-calendar-check-line text-2xl flex-shrink-0 text-amber-600"></i>
                                            </span>
                                            <span className="w-fit flex flex-grow flex-col items-start pl-4">
                                                <span className="text-2xl font-bold text-blue-900 ml-1">{item.date}</span>
                                                <span className="mt-0.5 text-xs tracking-widest text-gray-400">{item.month}'{item.year}</span>
                                            </span>
                                            <span className="inline-block border-b border-indigo-400 px-2 py-1 text-xs font-medium tracking-widest text-indigo-700 uppercase">
                                                {item.category}
                                            </span>
                                        </a>
                                        <h2
                                            className="title-font mb-1 mt-4 text-2xl font-normal text-gray-900"

                                        >
                                            {item.title}
                                        </h2>
                                        <hr className="h-[2px] w-5/6 bg-amber-600 mb-3" />
                                        <p className="mb-8 leading-relaxed text-sm text-justify">
                                            {item.description}
                                            {btn === index && <span>{item.readMore}</span>}
                                        </p>

                                        <div className="mb-4 mt-auto flex w-full flex-wrap items-center pb-4">
                                            <a
                                                className="inline-flex text-sm items-center text-indigo-500 hover:cursor-pointer hover:text-indigo-700"
                                                onClick={() => ToggleBtn(index)}
                                            >
                                                Read More
                                                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>


                                    </div>

                                    {/* Right section: Video */}
                                    <div
                                        className="w-full md:w-[90%] lg:w-[33%] flex items-center md:mx-auto justify-end lg:mt-8"
                                    >
                                        <video
                                            className="rounded-lg w-[90%] bg-gray-200 md:w-full shadow-lg h-fit hover:cursor-pointer mx-auto border-4 border-gray-200"
                                            width="100%"
                                            controls
                                            muted
                                            autoPlay
                                        >
                                            <source src={item.vidUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                </div>
                                <hr className=' h-[2px] mx-auto w-5/6 bg-blue-800 my-4'
                                />
                            </>
                        ))}
                    </div>


                    {/* NewsLetters */}
                    <div className='w-[95%] border-2 border-gray-200 mx-auto md:w-[31%] lg:w-1/4 px-4 lg:px-8 flex flex-col md:border-l-[1px] bg-gray-50 my-12 md:my-0 mt-24 md:mt-0 h-[80vh] overflow-y-auto scroll-my-5 rounded'>
                        <div class="flex flex-col text-center w-fit my-6  px-5 mx-auto">
                            <h5 class="text-xs uppercase font-normal title-font mb-1 text-indigo-950">Get the Latest with</h5>
                            <h1 class="text-lg lg:text-xl uppercase font-medium title-font mb-1 text-indigo-950"> Our Newsletters</h1>
                            <hr class=" h-2 bg-blue-900 w-full mx-auto mt-[1px]" />

                        </div>
                        {NewsLetter.map((item, index) => (
                            <div key={index} class=" NewsLetter flex flex-col items-start border-gray-600  md:border-t-0 my-4">
                                <span class="inline-block border-b border-indigo-400 px-2 py-1 text-[10px] font-medium tracking-widest text-indigo-700 uppercase">{item.category}</span>
                                <div className=' w-full md:h-[80%] rounded-lg my-4 flex justify-center items-center '>
                                    <img src={item.imgUrl} alt={item.title} className=' w-full h-full  rounded-lg border-4 border-gray-200 shadow-sm' />
                                </div>
                                <h2 class="title-font text-2xl  md:text-[1rem] font-medium text-gray-900">{item.title}</h2>
                                <hr className=' h-[2px] w-5/6 bg-amber-600 mb-2' />
                                <p class="mb-6 text-[1rem] md:text-xs  leading-relaxed text-justify">{item.description}</p>
                                <div class="mb-4 mt-auto flex w-full flex-wrap items-center border-b-2 border-gray-200 pb-4">
                                    <a href={item.readMore} target='_blank' class="inline-flex text-xs items-center text-indigo-500"
                                    >Read More
                                        <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>
        </>

    )
}

export default News;
