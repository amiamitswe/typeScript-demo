import React, { useReducer } from "react";
import { CountActionProps, CountProps } from "../../types/counter.type";

const initialState = { count: 0 };

function reducer(state: CountProps, action: CountActionProps) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>useReducer typing</p>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>{" "}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>{" "}
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        Decrement 5
      </button>
    </div>
  );
};

export default Counter;
