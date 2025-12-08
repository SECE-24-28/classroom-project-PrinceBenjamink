import React from "react";
import { NotFoundStyle } from "./use-state-style.js";

const UseStateComponent = () => {
  const [count, setCount] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  const add = (a, b) => {
    setSum(a + b);
    console.log("Sum : ", sum);
  };

  const changeCountValue = (val) => {
    if (val == 1) setCount(count + 1);
    else if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <NotFoundStyle>
        <div className="useStateComponent">
          <h1>Use State Component</h1>
          <h1>Counter</h1>
          <p>Count: {count}</p>
          <button onClick={() => changeCountValue(1)}>Increment</button>
          <button onClick={() => changeCountValue(-1)}>Decrement</button>
          {/* <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={()=>setCount(count-1)}>Decrement</button> */}
        </div>
      </NotFoundStyle>

      <NotFoundStyle>
        <div className="useStateComponent">
          <h1>Sum of two numbers</h1>
          <button onClick={() => add(100, 200)}>Add (100+200)</button>
          <p>Sum: {sum}</p>
        </div>
      </NotFoundStyle>
    </div>
  );
};
export default UseStateComponent;
