import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);
    const [name, setName] = useState({ firstName: 'John', lastName: 'Doe' });
    function increase() {
        setValue(value + 1);
        console.log(...name.firstName)
    }
    function decrease() {
        setValue(value - 1);
    }
    return (
        <>
            {/* <input type="text" name="value" className='border-2 bg-amber-50 w-fit text-zinc-950 mb-4' ></input> */}
            <h1 className='border-2 bg-amber-50 w-fit text-zinc-950 mb-4' >{value}</h1>
            <div className='flex gap-10'>
                <button type='button' onClick={increase} className='bg-blue-400 px-2 py-2 rounded-full cursor-pointer'>increase</button>
                <button type='button' onClick={decrease} className='bg-blue-400 px-2 py-2 rounded-full cursor-pointer'>decrease</button>
            </div>
        </>
    )
}

export default Counter