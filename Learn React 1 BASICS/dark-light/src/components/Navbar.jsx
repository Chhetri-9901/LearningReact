import React from 'react'

const Navbar = (props) => {
    console.log(props);
    console.log(props.children)
    return (
        <div className='flex justify-between py-4 px-8 bg-teal-700'>
            <h3 className='text-xl font-extrabold'>Advance Routing</h3>
            <div className='flex gap-7'>
                <div>
                    <h1>Home</h1>
                    <a className="text-lg" href="/about">About</a>
                    <a className="text-lg" href="/contact">Contact</a>
                    <a className="text-lg" href="/product">Product</a>
                </div>
                <div>
                    {props.heading}
                    {props.children[0]}
                </div>
            </div>
        </div>
    )
}

export default Navbar