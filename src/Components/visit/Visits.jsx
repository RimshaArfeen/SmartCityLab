import React from 'react'

const Visits = ({key,src,desc,title,date}) => {
  return (
  
  <>
   <section class="text-[#90a4ae] bg-[#000c1c] body-font rounded-lg shadow-lg">
 <div key={key} class="  flex flex-col md:flex-row rounded-lg ">
    <div  class="flex   w-full md:w-1/2 mb-10 md:mb-0">
      <img class="object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-r-none" alt="hero" src={src}/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-10 flex flex-col md:items-start md:text-left items-center p-[2rem] text-center lg:py-14 ">
      <h1 class="text-2xl lg:text-3xl mb-4 font-semibold uppercase text-[#e0f7fa]">{title}
      </h1>
      <div className="flex w-fit px-0 py-1 justify-center items-center my-1">
                    <span className='w-6 h-6 inline-flex justify-start items-center  text-[#80deea]'><i className="ri-calendar-check-line text-lg"></i></span>
                    <h4 className="title-font text-sm font-medium text-[#80deea]">{date}</h4>
                  </div>
      <p class="mb-8 text-[0.9rem] text-justify">{desc}</p>
     
    </div>
  </div>
  </section>
  </>



  )
}

export default Visits
