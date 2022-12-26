import React, { useEffect } from "react";

const Timer = (props) => {
  // 디펜던시 배열이 빈배열 이므로 렌더링 초기(마운트시)에만 실행됨.
  // 단순히 아래와 같이 작성하면 해당 Timer 컴포넌트를 호출하는 쪽에서 언마운트(화면에서 사라짐)되어도
  // 아래 setInterval부분은 계속해서 돌아간다. 이럴때를 위해 클린업을 사용해 정리를 해줘야한다.
  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       console.log("타이머 돌아가는중...");
  //     }, 1000); // 1초마다 실행
  //   }, []);

  // 클린업을 적용한 코드
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중...");
    }, 1000); // 1초마다 실행

    return () => {
      //..정리작업을 할 때 사용할 코드를 작성함
      clearInterval(timer);
      console.log("타이머가 종료되었습니다.");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요!</span>
    </div>
  );
};

export default Timer;
