import { useState } from "react";

function Counter({ title, initialValue }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="m-4 p-4 border rounded text-center">
      <h3>{title}</h3>
      <p>Value: {count}</p>

      <button
        className="bg-green-500 text-white px-2 py-1 m-1"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>

      <button
        className="bg-red-500 text-white px-2 py-1 m-1"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}

export default Counter;