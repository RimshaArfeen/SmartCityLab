
import React from 'react'
import { agriculture } from './BlogDetails'
const Agriculture = () => {
    return (
        <section className="body-font relative mx-auto lg:-mt-14"
        >
             <div className="w-full mx-auto mb-12 flex justify-center flex-wrap">
                {agriculture.map((item, index) => (
                    <div key={index} className="flex flex-col lg:flex-row  justify-between px-4 py-8 "
                   >
                        <div className="mb-10 flex-col md:flex-row lg:w-[70%] flex h-fit w-full items-start py-5 pb-1 ">
                            <div className="flex w-fit mb-3 md:mb-0 flex-shrink-0 flex-col text-center leading-none px-5 py-3 border-2 bg-indigo-950 hover:bg-indigo-900 rounded-lg">
                                <span className="mb-2 border-b-2 font-semibold border-amber-400 text-gray-50 uppercase text-xl">
                                    {item.month}
                                </span>
                                <span className="font-normal leading-none text-gray-400">{item.year}</span>
                            </div>
                            <div className="flex-grow pl-3 md:ml-3 border-l-2 border-[#0a1575]">
                                <h2 className="title-font text-xs font-medium tracking-widest mb-2 my-2 uppercase text-indigo-500">
                                    {item.category}
                                </h2>
                                <h1 className="title-font text-xl md:text-3xl font-semibold text-indigo-900 mb-2">
                                    {item.title}
                                </h1>
                                <hr className="w-3/4 h-[2px] bg-gray-400 mb-2" />
                                <p className="text-sm font-light tracking-wide text-justify text-gray-800 leading-relaxed mb-4">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                        <div className=" lg:w-[28%]  flex mx-auto justify-center items-center lg:ml-10 md:mt-6">
                           
                                <img className="rounded shadow-lg h-auto" src={item.imgUrl} alt={item.title} />
                    
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}

export default Agriculture;
