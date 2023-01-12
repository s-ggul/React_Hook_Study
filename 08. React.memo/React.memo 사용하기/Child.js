import React, { memo } from "react";

const Child = ({ name, age }) => {
  // name 이나 age가 변경되지 않으면 렌더링 할 필요가 없는 컴포넌트
  console.log("자녀가 렌더링이 되었어요");
  return (
    <div style={{ border: `2px solid powderblue`, padding: `10px` }}>
      <h3>자녀</h3>
      <p>name : {name}</p>
      <p>age : {age}</p>
    </div>
  );
};

export default memo(Child);
