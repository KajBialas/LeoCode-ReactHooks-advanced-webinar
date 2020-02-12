import React, { useState, useCallback } from 'react';

function Counter({ title }) {

  const [ counter, setCounter] = useState(0);

  const incrementCounter = useCallback( () => {
    setCounter(counter + 1);
  }, [counter]);

  return (
    <div>
      <div>{title}</div>
      <div>Counter: {counter}</div>
      <button onClick={incrementCounter}>Increment counter</button>
    </div>
  );

}

export default Counter;