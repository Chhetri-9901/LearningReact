import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReturnHome = () => {
    const returnNavigate = useNavigate();
  return (
    <div className='p-4'>
        <button onClick={()=>{
            returnNavigate('/')
        }} className='px-8 py-4 text-2xl bg-amber-600 rounded-2xl cursor-pointer'>Return Home</button>
    </div>
  )
}

export default ReturnHome