import React, { useState } from "react";
import "./App.css";
import Page from "../components/Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider
        value={{
          isDark,
          setIsDark,
        }}
      >
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );

  // Context를 import 해서 Page 컴포넌트를 Context Provider 로 감싸준다.
  // Context Provider는 value라는 prop을 받고 지금 같은 경우에는 두가지를 모든 하위 컴포넌트에 전달해야하므로 객체로 전달한다.
  // 이렇게 되면 ThemeContext Provider 가 감사는 모든 하위 컴포넌트 들은 value로 집어넣어준 isDark와 setIsDark 에 접근할 수 있게 된다.
  // 이후 하위 컴포넌트에서는 useContext를 이용해 Context로 전달한 정보를 받아온다.
}

export default App;
