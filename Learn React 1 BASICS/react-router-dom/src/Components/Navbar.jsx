import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Routing</h1>
      <div className='pages'>

        {/* Using anchors tags the page will reload, which is not IT standard */}
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar