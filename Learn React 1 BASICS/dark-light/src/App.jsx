import React from 'react'
import { useState } from 'react'
import Dark from './components/Dark'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, setTheme] = useState("Light");
  const [heading, setHeading] = useState("Header");
  return (
    <div>
      <Navbar heading={heading} setHeading={setHeading}>
        <p>Just a test</p>
        <p>Test 2</p>
      </Navbar>
      <h1>This page is in {theme} mode</h1>
      <Dark theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App