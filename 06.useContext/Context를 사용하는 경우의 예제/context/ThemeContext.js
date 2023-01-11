import { createContext } from "react";

/*
    Context 를 추가하기 위해 context dir을 생성하고 
    내부에 ThemeContext라고하는 js파일을 생성하였다.
*/

export const ThemeContext = createContext(null);
// 이것이 context를 하나 만든 것이다.

/*
- createContext()의 인자로 받아온 초기값에 대해 알아보자
 상위 컴포넌트에서 context Provider 태그로 감싸주지 않았을때 전달할 초기값을 설정한다.
 우리가 현재 작성한 코드에서는 Provider의 value 속성으로 isDark와 같은 값을 전달하기 때문에 위의 경우 초기값이 불필요해 단순히 null로 작성한 것이다.
*/
