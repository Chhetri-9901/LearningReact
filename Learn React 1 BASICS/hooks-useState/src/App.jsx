import React, { useState } from 'react'
import Counter from './Counter';

const App = () => {
  const [num, setNum] = useState(10);

  function onClickValChange() {
    setNum(num * 2);
  }


  return (
    <>
      <div className='mb-6' >
        <h1 className='bg-red-300 mb-2'>Welcome to React hooks - useState example - and your num value is {num}</h1>
        <button type="button" onClick={onClickValChange} className='bg-blue-400 px-1 py-2 rounded-full cursor-pointer'>Are you excited?</button>
      </div>

      <Counter />
    </>



  )
}

export default App