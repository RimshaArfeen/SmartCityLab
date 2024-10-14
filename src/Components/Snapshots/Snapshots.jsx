
import React from 'react'
import {
    SnapData,
    organizationInfo,
    researchFields
} from "./SnapshotsData"

const Snapshots = () => {
    return (
        <section class="text-gray-600 body-font relative top-20">
            <div class=" w-full xl:w-[86%] px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-4">
                    {SnapData.map((item, index) => (
                       <div key={index} class="md:w-1/3 p-4 mx-auto group"
                        data-aos = {`${item.css}`}>
                       <div class="relative border-4 border-indigo-800 p-6 rounded-lg overflow-hidden transition-all duration-500 hover:invert-[0%] hover:cursor-pointer">
                          
                           <div class="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 "></div>
                   
                           <div class="relative z-10"> 
                               <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-800 mb-4">
                                   <i className={` ${item.imgUrl} text-3xl`}></i>
                               </div>
                               <h2 class="text-lg w-fit text-indigo-900 font-normal title-font mb-2 uppercase pb-[2px] border-b-2 border-amber-600">
                                   <h1 className='inline-flex font-semibold text-xl lg:text-[1.7rem] mr-1 text-amber-600'>{item.value}</h1> {item.heading}
                               </h2>
                               <p class="leading-relaxed text-base text-gray-600">{item.description}</p>
                           </div>
                       </div>
                   </div>
                   

                    ))}
                    {/* <div class="md:w-1/3 p-4 mx-auto">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div>
                    <div class="md:w-1/3 p-4 mx-auto">
                        <div class="border border-gray-200 p-6 rounded-lg">
                            <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                        </div>
                    </div> */}
                </div>
                <div class=" w-full lg:flex justify-around text-gray-600 body-font mt-16">

                    <div class="w-5/6 lg:w-1/2 -m-2 my-10">
                        <h1 class=" text-indigo-950  font-medium text-2xl ml-12 pb-1 border-b-[1px] border-green-600 mb-2 uppercase">Organization Overview</h1>
                        {organizationInfo.map((item, index) => (
                           <div key={index} class="p-2 md:w-5/6 mx-auto group relative overflow-hidden">
                           <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-400 transform scale-x-0 origin-left transition-transform duration-700 group-hover:scale-x-100"></div>
                       
                           <div class="relative z-10 h-full flex items-start border-gray-200 border-b-2 p-4">
                               <img alt="team" class="w-9 h-9 mt-1 object-cover object-center flex-shrink-0 mr-4" src={item.imgUrl} />
                               <div class="flex-grow">
                                   <h2 class="text-blue-900 font-medium text-lg uppercase">{item.heading}</h2>
                                   <p class="text-gray-500 text-base title-font font-normal">{item.description}</p>
                               </div>
                           </div>
                       </div>
                       
                        ))}
                    </div>

                    <div class="w-5/6 lg:w-1/2 -m-2 my-10 ml-4">
                        <h1 class=" text-indigo-950  font-medium text-2xl ml-12 pb-1 border-b-[1px] border-green-600 mb-2 uppercase">Research Centers</h1>
                        {researchFields.map((item, index) => (
                           <div key={index} class="p-2 lg:w-4/5 md:w-5/6 mx-auto group relative overflow-hidden">
                           <div class="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-400 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
                           
                           <div class="relative z-10 h-full flex items-center border-b-2 border-gray-200 pb-4">
                               <img alt="team" class="w-10 h-10 object-cover object-center flex-shrink-0 mr-4" src={item.imgUrl} />
                               <div class="flex-grow">
                                   <a href="#" class="text-blue-900 title-font pb-[2px] font-medium list-none hover:cursor-pointer hover:text-green-700 hover:underline">
                                       {item.title}
                                   </a>
                               </div>
                           </div>
                       </div>
                       

                        ))}

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Snapshots;
