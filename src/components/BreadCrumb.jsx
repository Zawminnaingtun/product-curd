import React from 'react'
import { HiMiniHome } from "react-icons/hi2";

import { HiChevronRight } from "react-icons/hi2";

import { Link } from 'react-router-dom'
const BreadCrumb = ({currentPageTitle, links}) => {
  return (
    <div className='flex gap-2 mb-5 w-full'>
      
<nav className="flex" aria-label="Breadcrumb">
  <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li className="inline-flex items-center">
      <Link to={"/"} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
        <HiMiniHome className="mr-2 w-4 h-4" />
        Home
      </Link>
    </li>

    {links && 
      links.map((link,index)=>(
        <li key={index} className="inline-flex items-center">
      <Link  to={link.path} className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
      <HiChevronRight />
        {link.title}
      </Link>
    </li>
      ))
    }
    
    <li aria-current="page">
      <div className="flex items-center">
      <HiChevronRight />
        <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
          {currentPageTitle}
        </span>
      </div>
    </li>
  </ol>
</nav>


    </div>
  )
}

export default BreadCrumb