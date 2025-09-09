import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Register from './pages/Register'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointments from './pages/Appointments'
import Navbar from './components/Navbar'

const App = () => {
  return (
                  //for responsiveness 
    <div className='mx-4 sm:mx-[10%]'> 
    <Navbar/> 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
         <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/contactUs' element={<ContactUs/>} />
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/my-appointments' element={<MyAppointments/>} />
         <Route path='/appointment:docId' element={<Appointments/>} />
      </Routes>
    </div>
  )
}

export default App