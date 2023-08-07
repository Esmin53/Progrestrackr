"use client"

import { FC } from 'react'
import {FaHome, FaTasks, FaPlus, FaSignOutAlt} from "react-icons/fa"
import { IoSettings } from 'react-icons/io5'
import {signOut} from "next-auth/react"
import Link from 'next/link'

interface SidebarNavigationProps {
  
}

const SidebarNavigation: FC<SidebarNavigationProps> = ({}) => {
  return <ul>
  <Link href='/' className='text-lg p-2 rounded-md hover:bg-slate-700 cursor-pointer flex gap-2 items-center'>
      <FaHome />
      Homepage
  </Link>
  <li className='text-lg p-2 rounded-md hover:bg-slate-700 cursor-pointer flex gap-2 items-center'>
      <FaTasks /> 
      My Tasks
  </li>
  <Link href='/task/create' className='text-lg p-2 rounded-md hover:bg-slate-700 cursor-pointer flex gap-2 items-center'>
      <FaPlus />
      Create new task 
  </Link>
  <li className='text-lg p-2 rounded-md hover:bg-slate-700 cursor-pointer flex gap-2 items-center'>
      <IoSettings />
      Settings
  </li>
  <li className='text-lg p-2 rounded-md hover:bg-slate-700 cursor-pointer flex gap-2 items-center'
  onClick={(e) => {
      e.preventDefault()
      signOut({
          callbackUrl: `${window.location.origin}/sign-in`
      })
  }}>
      <FaSignOutAlt />
      Sign out
  </li>
</ul>
}

export default SidebarNavigation