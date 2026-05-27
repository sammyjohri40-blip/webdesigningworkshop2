import React, { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">

      <h1>React Counter Application</h1>

      <h2 className="counter">{count}</h2>

      <div className="buttons">

        <button onClick={increment}>
          Increment (+)
        </button>

        <button onClick={decrement}>
          Decrement (-)
        </button>

        <button onClick={reset}>
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;