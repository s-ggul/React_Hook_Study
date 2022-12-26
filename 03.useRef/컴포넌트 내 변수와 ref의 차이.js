import React, { useState, useRef } from "react";

const App = () => {
  const [renderer, setRenderer] = useState(0); // 화면을 렌더링 시킬 용도
  const countRef = useRef(0);
  let countVar = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseRef = () => {
    countRef.current = countRef.current + 1;
    console.log("ref : ", countRef.current);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log("var : ", countVar);
  };

  // 렌더링을 시키면 함수형컴포넌트 즉, 함수가 다시 불려 함수 내부 변수는 계속해서 0으로 초기화된다.
  // 하지만 ref는 컴포넌트의 전 생애주기에 값이 유지되기 떄문에 렌더링해도 값을 유지하는 모습을 확인할 수 있다.
  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <p>Var : {countVar}</p>
      <button onClick={doRendering}>렌더링하기!</button>
      <button onClick={increaseRef}>Ref 올려</button>
      <button onClick={increaseVar}>Var 올려</button>
    </div>
  );
};

export default App;
