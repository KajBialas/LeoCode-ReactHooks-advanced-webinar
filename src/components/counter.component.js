import React, { useState } from 'react';

function Counter({ title }) {

  const [ counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{title}</div>
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter}>Increment counter</button>
    </div>
  );

}

export default Counter;