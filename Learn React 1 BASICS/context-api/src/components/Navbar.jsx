import React, { useContext } from 'react'
import {useThemeContext} from '../context/ThemeContext';

const Navbar = () => {
  const val = useContext(useThemeContext);
  console.log(val);
  return (
    <div className='flex justify-between px-8 py-4 bg-teal-900'>
        <h1>Header</h1>
        <div className='flex gap-4'>
            <h3>Todo</h3>
            <h3>Story</h3>
            <h3>Link</h3>
            <p>{val[0]}</p>
            {val[1]}
        </div>
    </div>
  )
}

export default Navbar