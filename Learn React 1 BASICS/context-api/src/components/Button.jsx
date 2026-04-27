import React, { useContext } from 'react'
import { useThemeContext } from '../context/ThemeContext';

const Button = () => {
    const [val, theme, setTheme] = useContext(useThemeContext);

    const changeTheme = () => {
        if(theme == 'dark')
            setTheme('light');
        else
            setTheme('dark');
    }

    // console.log(theme)
    return (
        <div className='flex justify-center mt-3'>
            <button onClick={changeTheme} className='px-4 py-2 bg-yellow-600 cursor-pointer'>Change Theme</button>
        </div>
    )
}

export default Button