import React from 'react'
// import axios from 'axios'
import ApiCalling from './apiCalling'

const App = () => {
  // const responseAsPromise = fetch('https://jsonplaceholder.typicode.com/todos/1');
  // console.log(responseAsPromise);


  // const response = async () => {
  //   const responseAsRealDate = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  //   console.log(responseAsRealDate)
  // }

  // response();

  // const responseAxios = async () => {
  //   const responseAsRealDate = await axios.get('https://jsonplaceholder.typicode.com/todos/3');
  //   console.log(responseAsRealDate)
  // }

  // responseAxios();

  return (
    <>
      <div>App</div>
      <ApiCalling />
    </>
  )
}

export default App