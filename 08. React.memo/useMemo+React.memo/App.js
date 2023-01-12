import { useState, useMemo } from "react";
import Child from "./Child";

function App() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 렌더링 됨");

  const name = useMemo(() => {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  }, []);

  return (
    <div style={{ border: `2px solid navy`, padding: "10px" }}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  );
}

/*
    위와 같은 경우 부모 나이 증가를 누르면 Child 컴포넌트도 렌더링 된다. 
    React.memo를 이용해 최적화를 시켰고 Child 의 props에 변화도 없는데 왜 렌더링 될까?
    그것은 Child의 props로 준 name에 Object인 name을 전달했기 때문이다.
    원시타입과는 다르게 Object가 저장된 주소가 저장되기 때문이고 App이라는 함수형 컴포넌트가 
    렌더링 될 때마다 name의 주소값이 새로 할당되어 props에 변화가 생겼다고 판단하기 때문인 것이다.

    이럴땐 이전 영상에서처럼 useMemo를 이용해서 해결할 수 있다.


    useMemo를 작성할때 의존성 배열을 빈배열로 하여 초기 컴포넌트 렌더링시에만 객체를 할당하고 
    이후에는 의존값이 없기에 업데이트 되지 않는다. 

    정말 신기하다.
    */

export default App;
