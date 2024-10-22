
import React, { useState, useEffect } from 'react'
import "./Main.css"
import Content from '../Content/Content'
 
const Main = () => {
  const [isActive, setIsActive] = useState(false);
  const Click = () => {
    <Content />
  }
  const [text, setText] = useState('Artificial Intelligence');
  const [fadeIn, setFadeIn] = useState(true); // State to trigger the fade-in effect

  const arr = [
    'Artificial Intelligence',
    'Machine Learning',
    'Web Development',
    'Data Science',
    'Internet of Things',
  ];

  useEffect(() => {
    let currentIndex = 0;

    const textInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % arr.length; // Increment and reset when reaching the end of the array
      setFadeIn(false); // Remove the fade-in class to reset it

      setTimeout(() => {
        setText(arr[currentIndex]); // Change the text
        setFadeIn(true); // Add the fade-in class back
      }, 100);
    }, 4000);

    return () => clearInterval(textInterval); // Cleanup interval on unmount
  }, []);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
        <section class="main body-font overflow-hidden h-[58vh]  lg:h-[90vh] flex justify-center items-center relative z-10 top-16 md:top-28 lg:top-12">

          <div className="w-full md:w-fit mt-16 md:mt-0 flex flex-wrap justify-center items-center px-3 py-3 lg:py-20 md:mx-12 " data-aos="fade-up"  data-aos-delay="300" data-aos-duration="1200">
            <div className="mb-1 md:mb-6 w-full md:m-8 ">
              <h1 className="-mt-10 w-full text-[1rem] md:text-2xl lg:text-4xl font-normal uppercase text-gray-50 text-center lg:mb-8">Empowering Progress through <span className={`text-amber-600 text-2xl lg:text-[2.5rem] font-semibold ${fadeIn ? 'fade-in-text' : ''}`}>{text}</span></h1>
              <h1 className=" my-3 text-xl md:text-2xl lg:text-4xl font-semibold uppercase text-teal-100 text-center ">
                National Center Of  Artificial Intelligence
                {/* <p className='inline-flex '></p>  */}
              </h1>
              <hr className=' h-[0.5px] w-3/4 mx-auto my-1 lg:mb-8' />
              <h3 className="SML  text-center font-medium mb-4 md:text-[2rem] uppercase">
                Smart City Lab
              </h3>

           
            </div>
          </div>
        </section>
       
      </>

      )
}

      export default Main

