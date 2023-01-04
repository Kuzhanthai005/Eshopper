import React, { useReducer } from 'react'

const initialCount = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialCount;
    default:
      return initialCount;
  }
}

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialCount);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <p>Count: {countTwo}</p>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>

      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree