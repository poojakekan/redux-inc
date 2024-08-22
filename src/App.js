import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store'; // Import the actions

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    for (let i = 0; i < 5; i++) {
      dispatch(increment());
    }
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment by 5</button>
      <button onClick={handleDecrement}>Decrement by 1</button>
    </div>
  );
}


export default App;
