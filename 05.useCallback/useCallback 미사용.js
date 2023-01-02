import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = () => {
    console.log(`someFunc : number : ${number}`);
    return;
  };

  useEffect(() => {
    console.log("someFunction이 변경되었습니다");
    // 함수도 객체이기 때문에 리렌더링 될 때 함수를 저장하는 주소값이 변경되면 호출된다.
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      {/* 
        토글버튼을 통해 컴포넌트를 리렌더링해도 useCallback에 의해 변경된 값이 없기에 함수를 재할당하지는 않는다. 
        최적화 완료!
      */}
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
