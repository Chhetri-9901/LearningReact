import React, { useState } from 'react'

const Toggle_Visibility = () => {
    const [buttonValue, setButtonValue] = useState("Show Message");
    const [contentVisible, setContentVisible] = useState(false);
    function IsVisible(e:boolean) {
        if(e === false) {
            setButtonValue("Hide Message");
            setContentVisible(true);
        }
        else {
            setButtonValue("Show Message");
            setContentVisible(false);
        }
    }
  return (
    <div className='flex justify-center items-center h-[50%] py-5'>
        <div className='bg-[#151515] px-28 py-8 shadow-2xl rounded'>
        <button type="button" onClick={()=>{IsVisible(contentVisible)}} className='px-6 py-2 bg-blue-600 rounded-2xl cursor-pointer'>{buttonValue}</button>
        {!contentVisible ? '':(<div className='message my-2 text-center'>
            <p>Now I am visible.</p>
        </div>)}
        </div>
    </div>
  )
}

export default Toggle_Visibility