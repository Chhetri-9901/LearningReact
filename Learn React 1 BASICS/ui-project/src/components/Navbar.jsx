import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-10 py-4 '>
        <h4 className='text-white bg-black rounded-lg px-2 py-2 border-2 uppercase border-amber-50 cursor-pointer'>Target Audience</h4>
        <button className='text-black text-sm bg-gray-300 uppercase px-2 py-2 rounded-full'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar