import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(previousState => previousState + 1);
    // setCounter(counter + 1);
  }

  function decrease() {
    if (counter > 0) {
      setCounter((previousState) => previousState - 1);
      // setCounter(counter - 1);
    }
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
