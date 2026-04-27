import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between py-6 px-10'>
                <h2 className='font-medium text-2xl'>Media Search</h2>
                <div className='flex gap-4'>
                    <Link className="rounded px-4 py-2 bg-blue-600" to="/">Search</Link>
                    <Link className="rounded px-4 py-2 bg-blue-600" to="/collection">Collection</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar