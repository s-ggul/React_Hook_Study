import React, { useState, useRef } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  // console.log(countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  // ref는 증가하지만 화면상에는 증가하는 것처럼 나타나지 않는다.
  // ref는 아무리 변해도 리렌더링 시키지 않기 때문이다.
  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref", countRef.current);
  };

  return (
    <div>
      <p>State : {count}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  );
};

export default App;
