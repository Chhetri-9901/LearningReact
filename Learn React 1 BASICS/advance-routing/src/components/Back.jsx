import React from 'react'
import { useNavigate } from 'react-router-dom'

const Back = () => {
    const backNavigate = useNavigate();
    return (
        <div className='p-4'>
            <button
                onClick={() => {
                    backNavigate(-1);
                }}
                className='px-8 py-4 text-2xl bg-amber-600 rounded-2xl cursor-pointer'
            >
                Back</button>
        </div>
    )
}

export default Back