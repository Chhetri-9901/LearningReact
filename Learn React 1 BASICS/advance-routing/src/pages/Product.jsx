import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
    return (

        <div className=' flex pt-9'>
            <div className='flex gap-8 justify-center items-center w-full'>
                <Link to="/product/men">Men</Link>
                <Link to="/product/women">Women</Link>
                <Link to="/product/kids">Kids</Link>
            </div>
            <Outlet />
            {/* <h1>Product</h1> */}
        </div>
    )
}

export default Product