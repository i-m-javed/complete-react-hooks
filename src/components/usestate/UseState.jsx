import React, { useState } from "react";
import styled from "styled-components";
import { BiPlusMedical } from "react-icons/bi";
import { FaMinus } from "react-icons/fa";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    /* 
    #NOTE: if we use setCount(count + 1) then it will not work properly when we click very fastly on the button because of closure

    #NOTE: also if we use multiple setCount(count + 1) then it will not work properly because react batches the state updates for performance optimization and state are asynchronous

    1. setCount(count + 1);
    2. setCount(count + 1);
    3. setCount(count + 1);
    
    it will only increment by 1 instead of 3
    
    1. setCount((prev) => prev + 1);
    2. setCount((prev) => prev + 1);
    3. setCount((prev) => prev + 1);
    
    it will increment by 3 because we are using functional update form of state setter function
    */

    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <>
      <Wrapper>
        <div className="container">
          <button onClick={handleIncrement}>
            <BiPlusMedical className="icon" />
          </button>
          <h1>{count}</h1>
          <button onClick={handleDecrement}>
            <FaMinus className="icon minus_icon" />
          </button>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.8rem;
  }
  .icon {
    font-size: 2rem;
  }

  h1 {
    font-size: 5.4rem;
    color: #2e86c1;
  }
`;

export default UseState;
