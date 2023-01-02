import React, { useCallback, useState } from "react";
import Box from "./Box";

function App() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      {/*
        useCallback을 사용하지 않으면 테마를 바꿔도 createBoxStyle이 초기화 되어 Box를 계속해서 리렌더링 하게 된다.
       */}
      <Box createBoxStyle={createBoxStyle} />
      {/*
        prop으로 createBoxStyle을 전달
       */}
    </div>
  );
}

export default App;
