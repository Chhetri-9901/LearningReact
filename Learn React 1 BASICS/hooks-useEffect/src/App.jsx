import React, { useEffect, useState } from 'react'
import UseEffectWithButtonsDemo from './UseEffectWithButtonsDemo';

const App = () => {

  /**
   * useEffect is mainly used to load a parallel tasks that will be executed once the main task is completed.
   * MICROTASK QUEUE in JAVASCRIPT
   */

  const [num, setNum] = useState(0);

  useEffect(function () {
    console.log("useEffect always running. Not binded to ask state.");
    //This is actually a wrong way to use useEffect as it can be done with a simple function.
  })

  useEffect(function () {
    console.log("useEffect always running. Binded to change in state.");
    /**
     *  useEffect should always run with a state, mainly to track a change in the state.
     * This is called, MOUNTING, where useEffect is tracking the state change/ or binded with a state. 
     */
  }, []) // Will run only once, because a dependency is passed as an empty array

  function btnClicked() {
    console.log("button clicked");
    setNum(num + 1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button
        onClick={() => {
          btnClicked()
        }}>
        Click me
      </button>

      <div className='demo'>
        <h3>You are in UseEffectWithButtonsDemo section</h3>
        <UseEffectWithButtonsDemo />
      </div>
    </div>
  )
}

export default App