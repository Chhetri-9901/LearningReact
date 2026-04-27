import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='bg-amber-950 flex gap-5 p-10 justify-between h-full'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1content