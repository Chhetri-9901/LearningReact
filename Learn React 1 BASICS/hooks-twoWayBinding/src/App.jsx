import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setname('');
  }

  return (
    <form onSubmit={(e) => {
      submitHandler(e);
    }} className='input-form'>
      <input type="text" placeholder='Enter the name'
        value={name}
        onChange={function (e) {
          setname(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button >Submit</button>
    </form>
  )
}

export default App