import React, { useState, useReducer } from "react";

// reducer - state를 업데이트 하는 역할(은행)
// dispatch - state 업데이트를 위한 요구
// action - 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

// reducer함수는 두가지 인자를 받는다.
// 첫번째는 현재 state를 받고 , 두전째는 action을 받는다.
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      // reducer가 return하는 값이 새롭게 바뀔 state 값이다.
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      // reducer가 return하는 값이 새롭게 바뀔 state 값이다.
      return state - action.payload;
    default:
      return state;
  }
};

function App() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  // 비구조화 할당을 이용하여 배열을 받는다.
  // 배열의 첫번째 요소는 state가 담겨있고, 두번째는 dispatch 함수가 담겨있다.
  // useReducer는 두 가지 인자를 받는다.
  // 첫번째 인자는 Reducer를 받고, 이 reducer는 만들어줘야한다.
  // 두번째 인자는 state의 초기값이다.
  // 이제 money라는 state는 reducer를 이용해서만 수정할 수 있다.
  // 그리고 이 reducer를 통해 수정하고 싶을때마다 dispatch를 사용하고 이때 dispatch의 인자로 action을 넘겨준다.

  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다. </h2>
      <p>잔고 : {money} 원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.deposit, payload: number });
          //action은 보통 object형태로 보낸다.
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.withdraw, payload: number });
          //action은 보통 object형태로 보낸다.
        }}
      >
        출금
      </button>
    </div>
  );
}

export default App;
