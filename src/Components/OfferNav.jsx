
import React from 'react'
import { NavLink } from 'react-router-dom'
const OfferNav = () => {
  return (
     <nav className="w-fit md:ml-auto mx-auto md:mr-auto z-10 flex flex-wrap items-center py-4 uppercase text-base justify-around relative top-32 md:top-[15rem] lg:top-28 gap-y-2 md:gap-y-0">
        <NavLink to="/offer/products" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">Products</NavLink>

        <NavLink to="/offer/blogs" className="mr-5 transition-all duration-300 hover:cursor-pointer focus:text-white focus:bg-blue-700 hover:text-blue-600  p-1 rounded-lg border-2 px-2 border-blue-700">Blogs</NavLink>

       
      </nav>
  )
}

export default OfferNav
