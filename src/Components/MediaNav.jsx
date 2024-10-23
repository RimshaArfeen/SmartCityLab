
import React from 'react'
import { NavLink } from 'react-router-dom'
const MediaNav = () => {
  return (
     <nav className="w-fit md:ml-auto mx-auto md:mr-auto z-10 flex flex-wrap items-center py-4 uppercase text-base justify-around relative top-32 md:top-[13rem] lg:top-28 gap-y-2 md:gap-y-0">
        <NavLink to="/media/news" className="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-indigo-600 focus:text-white focus:bg-blue-700  p-1 rounded-lg   border-2 px-2 border-indigo-700">news</NavLink>

        <NavLink to="/media/events" className="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-indigo-600 focus:text-white focus:bg-blue-700  p-1 rounded-lg   border-2 px-2 border-indigo-700">events</NavLink>

        <NavLink to="/media/visits" className="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-indigo-600 focus:text-white focus:bg-blue-700  p-1 rounded-lg   border-2 px-2 border-indigo-700">visits</NavLink>
     
        <NavLink to="/media/services" className="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-indigo-600 focus:text-white focus:bg-blue-700  p-1 rounded-lg   border-2 px-2 border-indigo-700">services</NavLink>
     
      </nav>
  )
}

export default MediaNav;
