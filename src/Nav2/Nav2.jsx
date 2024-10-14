import React from 'react'
import { NavLink } from 'react-router-dom'
import Content from '../Content/Content'
const Nav2 = () => {
  return (
    <div className=' w-full text-gray-200 bg-[#24242465]'>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center py-4 uppercase text-base lg:w-5/6 justify-around">
      <NavLink to="/content" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900  hover:underline underline-offset-4">our technology</NavLink>
      <NavLink to="/mission" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900 hover:underline underline-offset-4 ">mission</NavLink>
      <NavLink to="/snapshots" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900 hover:underline underline-offset-4 ">snapshots</NavLink>
      <NavLink to="/researchAreas/projects" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900 hover:underline underline-offset-4 ">research areas</NavLink>
      <NavLink to="/inFocus" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900 hover:underline underline-offset-4 ">infocus</NavLink>
      <NavLink to="/nationalSolutions" class="mr-5 transition-all duration-300 hover:cursor-pointer hover:text-gray-900 hover:underline underline-offset-4 ">national solutions</NavLink>
    </nav>
    </div>
  )
}

export default Nav2
