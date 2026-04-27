import React from 'react'
import Navbar from './components/Navbar'
import Page1content from './components/Page1content'

const App = () => {
  return (
    <div className='bg-gray-900 h-screen w-full'>
      <Navbar />
      <Page1content />
    </div>
  )
}

export default App