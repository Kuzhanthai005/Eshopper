import React, { useReducer } from 'react'

const initialCount = {
    firstCounter: 0,
    secoundCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            console.log({ ...state, firstCounter: state.firstCounter + action.value });
            return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value };

        case 'increment2':
            return { ...state, secoundCounter: state.secoundCounter + action.value };
        case 'decrement2':
            return { ...state, secoundCounter: state.secoundCounter - action.value };
        case 'reset':
            return initialCount;
        default:
            return initialCount;
    }
}

const CounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialCount);

    return (
        <div>
            <p>Count: {count.firstCounter}</p>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <p>Count: {count.secoundCounter}</p>
            <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset2' })}>Reset</button>
        </div>
    )
}

export default CounterTwo