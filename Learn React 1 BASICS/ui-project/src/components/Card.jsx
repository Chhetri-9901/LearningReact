import React from 'react'
import { ArrowBigRight } from 'lucide-react';

const Card = (props) => {
    console.log(props);
    return (
        <div className='h-full w-80 bg-blue-500 text-white rounded-4xl relative' >
            {/* <img className='w-full h-full rounded-4xl object-cover' src="https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
            <img className='w-full h-full rounded-4xl object-cover' src={props.image} alt="" />
            <div className='absolute top-0 left-0 w-full h-full rounded-4xl p-5 flex flex-col justify-between'>
                <h2 className='p-3 bg-white text-black font-bold w-fit rounded-full'>{props.cardIndex + 1}</h2>
                <div className='flex flex-col'>
                    {/* <p className='text-black '>Lorem ipsum dolor xsit amet consectetur adipisicing elit. Similique, recusandae.</p> */}
                    <p className='text-black '>{props.text}</p>
                    <div className='flex justify-between mt-5'>
                        <button style={{ backgroundColor:props.colorValue}} className='text-black rounded-full px-6 py-1'>Satisfied</button>
                        <a href="#" className=' rounded-full px-6 py-1'><ArrowBigRight size={44} /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card