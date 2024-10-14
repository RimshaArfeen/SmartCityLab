
import React from 'react'
import "./Tech.css"

import Data from "./data.json"; // Assuming Data is an array in this JSON file
 
const Tech = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     autoplay: true,
    //     speed: 2000,

    //     cssEase: "linear",
    //     responsive: [
    //         {
    //             breakpoint: 1280, // md screens and up
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 1024, // md screens and up
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         },
    //         {
    //             breakpoint: 768, // sm screens
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: true
    //             }
    //         }
    //     ]
    // };

    return (
       
        <section className=' relative lg:top-24'
        data-aos="zoom-out" >
            <h1 class="text-3xl lg:text-5xl text-center font-bold uppercase title-font mb-4 text-indigo-900">Our Technologies</h1>
            <div className=' flex justify-center items-center'>
                <hr className=' w-1/4 bg-indigo-800 h-[3px]' />
                <span><i class="ri-arrow-down-s-line text-4xl text-amber-700"></i></span>
                <hr className=' w-1/4 bg-indigo-800 h-[3px]' />
            </div>

            <div class="col-lg-4 w-full lg:w-5/6 mx-auto flex flex-wrap justify-center items-center"
            data-aos="zoom-in"  data-aos-easing="ease-in-out">
                {Data.map((item, index) => (
                    <div key={index} class="relative w-full h-auto md:w-[47%] lg:w-2/5 md:h-1/3 bg-cover bg-center bg-gray-300 mx-3 mt-6 overflow-hidden z-10 single-icon-box"
                    data-aos="{`${item.css}`}"  data-aos-easing="ease-in-out">
                        <img src={item.imgUrl} alt="Technology" class=" w-full h-[40vh] " />
                        <div class="absolute left-0 top-[68%] md:top-[78%] lg:top-[73%] w-full h-full bg-[#08062b79] bg-opacity-90 text-white  px-4 xl:px-6  py-10 md:py-5 transition-all duration-700 cursor-pointer hover:top-0">
                            <h6 class="flex items-center text-white text-lg mb-6 uppercase">{item.title}
                            </h6>
                            <div>
                                <p class="text-gray-300 text-justify mb-2 text-xs md:text-base">
                                    {item.description}
                                </p>
                               
                            </div>
                        </div>
                    </div>

                ))}
            </div>


        </section >
    )
}

export default Tech;
