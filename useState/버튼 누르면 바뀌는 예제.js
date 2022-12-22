import { useState } from "react";

// useState 는 컴포넌트의 상태를 저장하고 수정
// 수정할때는 렌더링이 됨.

function App() {
  const [time, setTime] = useState(1);

  const handleClick = () => {
    // setTime(time + 1); // 단순히 1만 더하는 경우
    let newTime;

    if (time >= 12) {
      newTime = 1;
    } else {
      newTime = time + 1;
    }
    setTime(newTime);
  };

  return (
    <div>
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
