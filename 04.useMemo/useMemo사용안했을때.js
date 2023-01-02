import React, { useState } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 999999999; i++) {} // 생각하는 시간
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};
// 단순 계산에 의한 리렌더링시 기존 hardCalculate 연산도 같이 수행되기 때문에 hardNumber를 바꾸건, easyNumber를 바꾸건 모두 수행하는 비효율이 존재한다.
// 이를 방지하기위해 useMemo를 사용할 수 있다.

function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = hardCalculate(hardNumber);
  const easySum = easyCalculate(easyNumber);

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
}

export default App;
