import React, { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(1);

  // 올려 버튼을 클릭하면 setCount에 의해 업데이트 되고 useEffect가 불린다.
  // 그 후 useEffect내부에서도 renderCount를 업데이트 하고 다시 렌더링하면서 useEffect를 호출하고
  // 또 다시 업데이트 되면서 무한루프에 빠지게된다.
  // 정말 치명적인 오류이며, useRef를 통해 이를 해결할 수 있다.
  useEffect(() => {
    console.log("렌더링!");
    setRenderCount(renderCount + 1);
  });

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  );
};

export default App;
