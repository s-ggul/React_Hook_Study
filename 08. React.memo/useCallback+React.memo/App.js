import { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링 됨");

  const tellMe = useCallback(() => {
    console.log("길동아 사랑해");
  }, []);

  return (
    <div style={{ border: `2px solid navy`, padding: "10px" }}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} tellMe={tellMe} />
    </div>
  );
}

/*
  이 경우에도 React.memo 를 이용해 Child 컴포넌트를 감싸주었지만
  Child컴포넌트가 부모와 함께 리렌더링 되는 것을 확인했다. 
  이전 useMemo+React.memo 예제에서와 같이 tellMe함수객체가 부모가 렌더링될때 
  주소값이 바뀌게 되었고 Child 측에서는 tellMe의 주소값이 바뀌어 변경 값이 있는줄 아는 것이다.
  그래서 Child도 리렌더링 되는 것이고 이를 해결하기 위해서는 
  useCallback을 사용할 수 있다. 

    */

export default App;
