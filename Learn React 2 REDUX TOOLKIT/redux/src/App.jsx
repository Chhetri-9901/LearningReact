import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counterSlice';
import { multiply} from './features/multiplierSlice';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setNum] = useState(5)
  const [multiply, setMultiply] = useState(1)

  return (
    <> 
      <div>
        <h1>{count}</h1>
        <button onClick={() => { dispatch(increment()) }}>Increment</button>
        <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
        <input type="number" placeholder='Increase by any amount' value={num} onChange={(e) => { setNum(e.target.value) }} />
        <button onClick={() => { dispatch(incrementByAmount(Number(num))) }}>Increase by Amount</button>
      </div>
      <div>
        <h1>Final Value: {multiply}</h1>
        <input type="number" placeholder='multiply by' value={multiply} onChange={(e)=>{setMultiply(e.target.Value)}}/>
        <button onClick={()=>{dispatch(multiply(Number(num)))}}>multiply</button>
      </div>
    </>
  )
}

export default App