import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Collection from './pages/Collection'
import Navbar from './components/Navbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen text-white w-full bg-gray-700'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/collection' element={<Collection></Collection>} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App