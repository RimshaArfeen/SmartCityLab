import React from 'react'
import { NavLink } from 'react-router-dom'
import Content from '../Content/Content'
 
const Nav2 = () => {
  return (
    <div className='w-fit mx-auto text-blue-800 relative z-30 top-36 md:top-52 lg:top-32'>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center py-4 uppercase text-base gap-y-2  justify-around">
      <NavLink to="/" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">our technology</NavLink>

      <NavLink to="/mission" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">mission</NavLink>

      <NavLink to="/snapshots" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">snapshots</NavLink>

      <NavLink to="/successStories" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700  hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">success stories</NavLink>

      <NavLink to="/team" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">Leaderships</NavLink>

      {/* <NavLink to="/nationalSolutions" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">national solutions</NavLink> */}

    </nav>
  </div>


    
  ) 
}

export default Nav2;
