import React from 'react'
import Banner from './components/banner'

const App = () => {
  return (
    <>
    <h1>Hello World</h1>
    <Banner user="Aman" age={18}/>
    <Banner user="Dhruv" age={28}/>
    </>
  )
}

export default App