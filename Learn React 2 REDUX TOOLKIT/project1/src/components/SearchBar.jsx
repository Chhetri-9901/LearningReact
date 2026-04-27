import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setQuery} from '../redux/features/searchSlice';

const SearchBar = () => {

    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const submitHandler = function (e) {
        e.preventDefault();
        dispatch(setQuery(text));
        setText(' ')
    }

    return (
        <>
        <div className='flex flex-row gap-4 items-center justify-center translate-x-50% mx-8 py-8'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} action="" className="flex flex-row gap-4">
                <input required type='text' placeholder='Enter anything...' className='px-4 py-2 border-2'
                value={text} onChange={(e) =>{setText(e.target.value)}}>
                </input>
                <button className='px-4 py-2 border-2 rounded-3xl cursor-pointer'>Search</button>
            </form>
        </div>
        </>
    )
}

export default SearchBar