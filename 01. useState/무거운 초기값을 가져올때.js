import { useState } from "react";

const heavyWork = () => {
  console.log("엄청 무거운 작업");
  return ["홍길동", "김민수"];
};

function App() {
  // const [names, setNames] = useState(heavyWork());
  // 위와 같이 바로 값을 넣어주게 작성하면 컴포넌트가 렌더링될때마다 heavyWork()를 계속 호출하기 때문에
  // 상당한 부하가 생기게 된다. 이를 방지하려면 콜백을 사용하면 된다.

  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  // 즉, 초기값을 가져올때 어떤 무거운 작업을 해줘야 한다면 바로 값을 넣어주는게 아니라
  // 콜백으로 원하는 값을 리턴해주게 하면 맨 처음 화면에 렌더링 될 때만 그 함수가 불려진다.

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      // 이렇게 정의한 콜백의 인자로는 이전 상태의 값을 가진다.
      console.log("이전 State : ", prevState);

      return [input, ...prevState];
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default App;
