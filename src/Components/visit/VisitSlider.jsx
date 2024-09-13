<<<<<<< HEAD
import React from 'react'
import Visits from './Visits'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "./Visit.json"
import "./Visit.css"
const VisitSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#002556", border:"4px solid white"  , margin:"auto 2px", borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#002556", border:"4px solid white" , margin:"auto 2px", borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <section class="Slider body-font ">
  <div class="container px-5 py-24 mx-auto">
  <div class="lg:w-2/3 flex flex-col sm:items-center items-start mx-auto">
  <span className=' p-1 px-5 bg-gray-100 shadow-md rounded-full my-4 -mt-2
  hover:transform hover:scale-90 hover:cursor-pointer'>
     <i class="ri-shake-hands-line text-[4rem] text-blue-900 tracking-wider font-lighter "></i></span>
  <h1 class="flex-grow sm:pr-16 text-3xl md:text-4xl my-3 mx-auto font-semibold uppercase title-font text-[#15275f] text-center">
    Explore Recent Team Visits
  </h1>
    <p className=' text-center text-[#7e7d7d]  tracking-wide text-[1rem]'>Insightful discussions, project reviews, and key interactions from our team members with the community and clients.</p>
  
</div>

  </div>
  <div className=' w-[88%] xl:w-4/5 mx-auto rounded-lg '>
  <Slider {...settings}>
{Data.map((item,index) => (
    <Visits key={index} src={item.imgUrl} desc={item.description} title ={item.title} date={item.date} />
))}
  </Slider>

  </div>
</section>
    
  )
}

export default VisitSlider
=======
import React from 'react'
import Visits from './Visits'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Data from "./Visit.json"
import "./Visit.css"
const VisitSlider = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#002556", border:"4px solid white"  , margin:"auto 2px", borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#002556", border:"4px solid white" , margin:"auto 2px", borderRadius:"25px", height:"50px" , width:"50px" , display:"flex" ,justifyContent:"center" ,alignItems:"center"}}
        onClick={onClick}
      />
    );
  }
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <section class="Slider body-font ">
  <div class="container px-5 py-24 mx-auto">
  <div class="lg:w-2/3 flex flex-col sm:items-center items-start mx-auto">
  <span className=' p-1 px-5 bg-gray-100 shadow-md rounded-full my-4 -mt-2
  hover:transform hover:scale-90 hover:cursor-pointer'>
     <i class="ri-shake-hands-line text-[4rem] text-blue-900 tracking-wider font-lighter "></i></span>
  <h1 class="flex-grow sm:pr-16 text-3xl md:text-4xl my-3 mx-auto font-semibold uppercase title-font text-[#15275f] text-center">
    Explore Recent Team Visits
  </h1>
    <p className=' text-center text-[#7e7d7d]  tracking-wide text-[1rem]'>Insightful discussions, project reviews, and key interactions from our team members with the community and clients.</p>
  
</div>

  </div>
  <div className=' w-[88%] xl:w-4/5 mx-auto rounded-lg '>
  <Slider {...settings}>
{Data.map((item,index) => (
    <Visits key={index} src={item.imgUrl} desc={item.description} title ={item.title} date={item.date} />
))}
  </Slider>

  </div>
</section>
    
  )
}

export default VisitSlider
>>>>>>> e3d1264 (Your commit message)
