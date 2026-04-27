import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex justify-between py-4 px-8 bg-teal-700'>
            <h3 className='text-xl font-extrabold'>Advance Routing</h3>
            <div className='flex gap-7'>
                <Link className='text-lg' to='/'>Home</Link>
                <Link className='text-lg' to='/about'>About</Link>
                <Link className='text-lg' to='/contact'>Contact</Link>
                <Link className='text-lg' to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Header