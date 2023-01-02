import React, { useCallback, useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

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
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
}

export default App;
