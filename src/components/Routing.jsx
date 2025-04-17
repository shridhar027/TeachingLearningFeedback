import React from 'react'
import { Route,Routes } from 'react-router'
import Admin from './Admin'
import SelectPage from './SelectPage'
import TeacherListPage from './TeacherListPage'
import FeedbackPage from './FeedbackPage'

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<SelectPage />}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path="/teachers" element={<TeacherListPage />} />
        <Route path="/feedback/:teacherId" element={<FeedbackPage />} />
    </Routes>
    </>
  )
}

export default Routing