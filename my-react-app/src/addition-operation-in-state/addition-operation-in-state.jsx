import React, { useState } from "react";
import {AdditionOperationStyle} from "./addition-operation-in-state.js";  
const AdditionOperationComponent = () => {
  const [fruits, setFruits] = useState(["apple", "banana"]);
  const addFruits = () => {
    // setFruits([...fruits, "mango"]);
    // setFruits([...fruits, "grapes"]);
    setFruits([...fruits, "mango", "grapes"]);
    // setFruits
    console.log("The fruits:", fruits);
  };
  return (
    <AdditionOperationStyle>
    <div>
        <br></br>
      <button onClick={addFruits}>Add Fruits</button>
    </div>
    </AdditionOperationStyle>
  );
};
export default AdditionOperationComponent;