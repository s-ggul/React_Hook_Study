import React, { useEffect, useRef } from "react";

const App = () => {
  const inputRef = useRef();

  // 마운트때(맨처음 화면이 로딩될 때)에만 실행
  useEffect(() => {
    //console.log(inputRef);
    inputRef.current.focus();
  }, []);

  const login = () => {
    alert(`환영합니다. ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={login}>로그인</button>
    </div>
  );
};

export default App;
