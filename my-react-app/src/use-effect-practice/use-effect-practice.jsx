import React, { useEffect, useState } from "react";
const UseEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Prince Benjamin K");
  useEffect(() => {
    console.log("Prince Benjamin K");
  }, [count,name]);
  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
};
export default UseEffectComponent;