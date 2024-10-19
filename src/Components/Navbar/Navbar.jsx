
import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import Logo from "../Imgs/NCAI Logo-01.png";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
 
  const changeBg = () => {
    if (window.scrollY >= 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBg);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBg);
    };
  }, []);

  const toggleBtn = () => {
    setToggle(!toggle);
  }

  return (
    <header className = {`${isScrolled ? 'bg-gradient-to-r from-blue-50 to-blue-200 border-2 transform scale-[0.8] border-blue-900 text-blue-900 ' : 'bg-[#0a0a0a86]  text-white text-[1rem]'} body-font fixed top-0 w-full transition-all z-50 duration-300`}>

      <div  className={` ${isScrolled ? 'transform ': ''} w-[100%] mx-auto flex flex-col flex-wrap items-center p-2 md:flex-row`}>
        <a className="title-font flex items-center md:justify-center justify-around md:mb-0 w-1/2 md:w-full lg:w-1/4">
          <span className='Logo p-2'>
            <img src={Logo} alt="NCAI" className={`${isScrolled ? 'w-[70%] h-auto md:w-1/5 lg:w-[45%] md:mx-auto ': 'w-5/6 h-auto md:w-1/3 lg:w-[50%] md:mx-auto'}`} />
          </span>
          <div className="barMenu w-1/5 flex justify-center items-center">
            <button className="hover:cursor-pointer md:hidden my-6" onClick={toggleBtn}>
              <i className="ri-menu-line text-[2rem]"></i>
            </button>
          </div>
        </a>
        <nav className={`flex-col md:flex-row flex-wrap items-start md:items-center justify-around md:ml-auto md:mr-auto 
          ${toggle ? "flex" : "hidden"} md:flex w-full lg:w-[75%] mt-4 lg:mt-0`}>
          <div className="dropdown md:border-none border py-1 w-full md:w-fit">
            <NavLink to="/" className="nav-link hover:cursor-pointer ml-2 md:ml-0">Smart City</NavLink>
          </div>
          <div className="dropdown md:border-none border py-1 w-full md:w-fit">
            <div className='flex items-center justify-center'>
              <NavLink  to="/research/projects" className="nav-link hover:cursor-pointer ml-2 md:ml-0">Research & Programs</NavLink>
            </div>
            
          </div>
          <div className="dropdown md:border-none border py-1 w-full md:w-fit">
            <div className='flex items-center justify-center'>
              <NavLink to="/media/news" className="nav-link hover:cursor-pointer ml-2 md:ml-0">Engagement & media</NavLink>
            </div>
           
          </div>
          <div className="dropdown md:border-none border py-1 w-full md:w-fit">
            <div className='flex items-center justify-center'>
              <NavLink className="nav-link hover:cursor-pointer ml-2 md:ml-0">We Offer</NavLink>
            </div>
            <ul className="dropdown-menu">
              <li><NavLink to="/weOffer/products" className='mt-[0.3rem]'>Our Products</NavLink></li>
              <li><NavLink to="/weOffer/services">Our Services</NavLink></li>
              <li className="relative">
                <div className='flex items-center justify-center'>
                  <NavLink className="nav-link hover:cursor-pointer ml-2 md:ml-0">Competence And Development Program</NavLink>
                  <i className="ri-arrow-drop-right-fill text-3xl -ml-4"></i>
                </div>
                <ul className="dropdown-menu absolute left-full top-0 hidden group-hover:flex flex-col space-y-1">
                  <li><NavLink to="/weOffer/competence/workshops" className="rounded-t-lg">Workshop</NavLink></li>
                  <li><NavLink to="/weOffer/competence/courses">Courses</NavLink></li>
                  <li><NavLink to="/weOffer/competence/webinars" className="rounded-b-lg">Webinars</NavLink></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="dropdown md:border-none border py-1 w-full md:w-fit">
            <div className='flex items-center justify-center'>
              <NavLink to="/contact" className="nav-link hover:cursor-pointer ml-2 md:ml-0">Contact Us</NavLink>
            </div>
           
          </div>
          {/* <div className="dropdown md:border-none border py-1">
            <NavLink to="/contact" className="nav-link hover:cursor-pointer ml-2 md:ml-0">Contact Us</NavLink>
          </div> */}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
