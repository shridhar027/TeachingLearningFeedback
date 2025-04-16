import React from 'react'
import { NavLink } from 'react-router'

function Nav() {
  return (
    <div>
        <NavLink style={(e)=>{return{color:e.isActive?"red":""}}} to={'/'}>Home</NavLink>
        <NavLink style={(e)=>{return{color:e.isActive?"red":""}}} to={'/admin'}>Admin</NavLink>
    </div>
  )
}

export default Nav