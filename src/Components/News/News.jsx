import React,{useState} from 'react'
import { News_, NewsLetter } from './NewsData'
const News = () => {
    const [btn, setBtn] = useState(false)
const ToggleBtn = (index) => {
  setBtn(btn === index ? null : index)
}

    
    return (
        <section class="body-font overflow-hidden text-gray-600">
            <div class="mx-auto w-full py-24 flex flex-col md:flex-row flex-wrap justify-between">
                <div class="md:w-[67%] lg:w-[70%] -m-12 mx-auto flex flex-wrap">
                    {News_.map((item, index) => (
                        <>
                            <div key={index} class="NewsSec w-full lg:w-[65%] flex h-fit flex-col items-start p-8 pb-0 md:pb-8  my-10 mb-0 md:my-0">
                            <a class=" w-full inline-flex items-center justify-between my-5">
                                <span className='w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center'>
                            <i class="ri-calendar-check-line text-2xl flex-shrink-0 "></i>

                                </span>
                                    <span class="w-fit flex flex-grow flex-col items-start pl-4">
                                        <span class="text-2xl font-bold text-gray-900 ml-1">{item.date}</span>
                                        <span class="mt-0.5 text-xs tracking-widest text-gray-400">{item.month}'{item.year}</span>
                                    </span>
                                <span class="inline-block rounded bg-indigo-50 px-2 py-1 text-xs font-medium tracking-widest text-indigo-500 uppercase">{item.category}</span>
                                </a>
                                <h2 class="title-font mb-1 mt-4 text-2xl font-normal text-gray-900 ">{item.title}</h2>
                                <hr className=' h-[2px] w-5/6 bg-amber-600 mb-3' />
                                <p class="mb-8 leading-relaxed text-sm text-justify">{item.description}
                                    {btn === index && (
                                        <span>{item.readMore}</span>
                                    )}
                                </p>
                           
                                <div class="mb-4 mt-auto flex w-full flex-wrap items-center md:border-b-2 border-gray-100 pb-4">
                                    <a class="inline-flex text-sm items-center text-indigo-500 hover:cursor-pointer hover:text-indigo-700"
                                    onClick={() => ToggleBtn(index)}
                                    >Read More
                                        <svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                   
                            </div>
                                </div>
                                <div class=" w-full md:w-[90%]  lg:w-[33%] flex items-center md:mx-auto justify-end  lg:mt-8">
                                <video className="rounded-lg w-[90%]  bg-gray-200  md:w-full shadow-lg h-fit hover:cursor-pointer mx-auto  border-4 border-gray-200" width="100%" controls autoPlay >
                                    <source src={item.vidUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </>
                    ))}
                </div>
                <div className='w-[95%] mx-auto md:w-[31%] lg:w-1/4 h-fit px-4 lg:px-8 flex flex-col md:border-l-[1px] border-gray-500 bg-gray-50 my-12 md:my-0 mt-24 md:mt-0 '>
                <h2 className=' font-semibold text-gray-800 text-4xl md:text-xl lg:text-3xl mx-auto uppercase mb-6 lg:mb-10 py-2 mt-4'>News Letters</h2>
                    {NewsLetter.map((item, index) => (
                        <div key={index} class=" NewsLetter flex flex-col items-start border-gray-600  md:border-t-0 my-4">
                            <span class="inline-block rounded bg-indigo-50 px-2 py-1 text-[1rem] md:text-[10px] font-medium tracking-widest text-indigo-500 uppercase">{item.category}</span>
                            <div className=' w-full md:h-[80%] rounded-lg my-4 flex justify-center items-center bg-gray-200'>
                                <img src={item.imgUrl} alt={item.title} className=' w-full h-[80%]  rounded-lg border-4 border-gray-200 shadow-sm' />
                            </div>
                            <h2 class="title-font text-2xl  md:text-[1rem] font-medium text-gray-900 mt-2">{item.title}</h2>
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

    )
}

export default News;
