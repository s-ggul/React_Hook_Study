import React, { useMemo, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? "한국" : "외국";
  //   const location = {
  //     country: isKorea ? "한국" : "외국",
  //   };
  // 이렇게 해놓으면 리렌더링될때마다 location에 객체를 할당하게 되는데 이때의 주소값을 계속해서 바뀌게 된다.
  // 따라서 아래의 useEffect에서의 의존성 배열 내 location의 주소값이 변경되게 되고 react는 location이
  // 바뀌었다고 생각해 useEffect를 수행한다.
  /*
    따라서 이러한 상황을 막기 위해서는 App컴포넌트가 리렌더링 되었을때 해당 location 변수가 다시 초기화 되는 것을 막아줘야한다. 

    - 해당 location 변수는 isKorea 변수가 바뀌었을때만 초기화를 해주도록 useMemo를 사용해 진행할 것이다.
    */

  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출");

    // 뭔가 오래걸리는 작업...
  }, [location]);
  // 위의 useEffect 에서 의존성 배열내의 location이 문자열 이나 숫자와 같은 값이 아닌 객체(object)라면 말이 달라진다.

  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}

export default App;
