import React from 'react'
import { NavLink } from 'react-router'

function Nav() {
  return (
    <div className='h-[10vh] w-full bg-blue-200 flex pl-[2%] pr-[2%] justify-between items-center'>
      <h1 className='text-white font-bold text-xl'>FeedBack</h1>
      <NavLink className='text-white  text-xl' style={(e)=>{return{color:e.isActive?"blue":""}}} to={'/'}>Home</NavLink>
        <NavLink className='text-white text-xl' style={(e)=>{return{color:e.isActive?"blue":""}}} to={'/admin'}>Admin</NavLink>
      <input className='bg-white h-[50%] w-[25%] rounded pl-[2%] outline-none' type="text" placeholder='Search' />
    </div>
  )
}

export default Nav