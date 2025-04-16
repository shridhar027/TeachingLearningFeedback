import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './Home'
import Admin from './Admin'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route></Route>
    </Routes>
    </>
  )
}

export default Routing