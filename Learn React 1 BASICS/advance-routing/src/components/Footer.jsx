import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='flex justify-between py-4 px-8 bg-gray-700 absolute bottom-0 w-full'>
            <p>Copyright 2026 HUNT</p>
            <div className='flex gap-7'>
                <Link to='/contact'>Contact</Link>
                <Link to='/legal'>Legal</Link>
            </div>
        </div>
    )
}

export default Footer