
import React from 'react'
import { NavLink } from 'react-router-dom'
const ResearchNav = () => {
  return (
     <div className='w-full mx-auto text-blue-800 relative z-30 top-32 md:top-52 lg:top-28'>
     <nav className=" w-fit md:ml-auto mx-auto md:mr-auto flex flex-col md:flex-row flex-wrap items-center py-4 uppercase text-sm md:text-base justify-around">
       <NavLink to="/research/projects" className="mr-5 mb-2 md:mb-0 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">Research areas</NavLink>

       <NavLink to="/research/inFocus" className="mr-5 mb-2 md:mb-0 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">in focus</NavLink>

       <NavLink to="/research/publications" className="mr-5 mb-2 md:mb-0 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">publications</NavLink>

       <NavLink to="/research/programs" className="mr-5 mb-2 md:mb-0 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">competence development programs</NavLink>

       
    
     </nav>
   </div>
  )
}

export default ResearchNav
