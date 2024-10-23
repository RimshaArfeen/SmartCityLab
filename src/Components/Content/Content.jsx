
import React from 'react'
import "./Content.css"


 
const Content = () => {
  return (
    <>
      {/* top-10 md:top-12 lg:top-40  */}
      <section class="content body-font overflow-hidden relative z-20 h-fit -top-40 md:-top-8 lg:top-[-14rem] neon-blue-bg mt-20" 
     >
         <div class="w-full px-5 pb-14 mx-auto"
         data-aos="fade-up"  data-aos-duration="800" data-aos-delay="200" data-aos-easing="ease-in-out">
          <div class="w-full mx-auto flex flex-wrap justify-between flex-col md:flex-row">
            {/* <img alt="ecommerce" class="lg:w-[45%] w-full lg:h-auto h-64 object-cover object-center rounded robot-shadow" src={Robot} /> */}


            <div class="md:w-5/6 lg:w-3/4  bg-white mx-auto flex flex-col text-center w-full mb-12 my-10 border-4 border-teal-500 p-5">
              <h1 class="text-[2.2rem] md:text-[2.5rem] text-blue-800 title-font font-light mb-1">Welcome to<p class=' uppercase font-bold'>Smart City Lab,<span class='font-bold text-teal-600  '> NCAI</span></p> </h1>
              <p class="text-sm md:text-lg leading-relaxed">The centre is designed to become a leading hub of innovation,
                scientific research, knowledge transfer of the local economy, and training in the area of
                Artificial Intelligence(AI) and its closely associated fields.</p>
            </div>



            {/* <div className='earthImg w-full md:w-[35%] h-auto flex justify-end relative'>
                        <img src={EarthHand} alt="" className='earth md:w-full right-0 -bottom-[10rem]' id='earth' />
                      
                    </div>
                </div>
                <div className=' h-[15rem]'>
                    <img src={Circle} alt="" className=' text-gray-400 relative -z-10 w-3/4 md:w-[57%] bottom-0 md:bottom-[10rem] lg:bottom-[15rem] lg:left-[57px] opacity-70' />
                </div>
            </div>
        </section>
       
        <div class="w-[90%] md:w-full px-5 pb-32 md:-mt-8 mx-auto">
          
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 justify-center md:justify-around">
            <button class="cards border-2 border-amber-600 p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center  bg-indigo-50  justify-center rounded-full   mb-5 flex-shrink-0">
              <img src={VisionIcon} className=' w-[70%] h-auto '></img>
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3 text-[#00095c]">Vision</h2>
                <h5  class=" text-lg  font-medium mb-3 text-amber-700">INNOVATORS</h5>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">To lead the world through groundbreaking innovations by conducting research, making discoveries, and creating cutting-edge technologies that enhance the quality of life and drive global progress.</p>
               
              </div>
            </button>
            <button class="cards border-2 border-amber-600 p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center  bg-indigo-50  justify-center rounded-full   mb-5 flex-shrink-0">
              <img src={MissionIcon} alt=""  className=' w-[70%] h-auto ' />
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3 text-[#00095c]">Mission</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">"The mission of Smart City Lab is to create innovative environment to achieve
                                      sustainability and growth, doing research in the field of technology to make better
                                      quality of life and bridging between academia and industry through joint ventures".</p>
               
              </div>
            </button>
            <button class="cards border-2 border-amber-600 p-4 w-5/6  md:w-[30%] flex flex-col items-start rounded-lg">
              <div class="icons w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-50 mb-5 flex-shrink-0">
               <img src={AiPng} className=' w-full h-auto'/>
              </div>
              <div class="flex-grow">
                <h2 class=" text-3xl title-font font-medium mb-3 text-[#00095c]">Goal</h2>
                <p class="leading-relaxed text-base md:text-sm text-gray-600 text-justify">The goal of Smart City Lab, NCAI, is to offer state-of-the-art resources to researchers working on Smart City technologies. The lab serves as a national hub for academia and industry, focusing on integrating AI-driven smart technologies into daily life and transforming theoretical knowledge into practical applications.</p>
               
              </div>
            </button>
          </div>
        </div> */}

          </div>
        </div>
      </section> </>

  )
}

export default Content
