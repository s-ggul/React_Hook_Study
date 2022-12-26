import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 인자가 콜백함수만 있으므로 렌더링 될 때마다 실행됨
  //   useEffect(() => {
  //     //...
  //   });

  // 처음 렌더링 될 때와
  // count가 변화할때만 호출됨
  // 즉, 마운트될 때 + 디펜던시 어레이 내용이 변경될떄 실행
  useEffect(() => {
    console.log("count 변화");
  }, [count]);

  useEffect(() => {
    console.log("name 변화");
  }, [name]);

  // 빈배열을 넣어주면 처음 렌더링 될 때에만 적용된다.(마운트)
  useEffect(() => {
    console.log("처음 렌더링만");
  }, []);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
