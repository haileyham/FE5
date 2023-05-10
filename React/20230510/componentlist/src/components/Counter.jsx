import { useState } from "react";
import React from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);

  function countBtnAdd(){
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    //이렇게 3줄써도 1씩 증가함. / 왜냐하면 
    //함수형 업데이트라고 표현합니다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비교하여 처리할 수 있습니다.

    setCount((prevNumber)=>{
      return prevNumber + 1
    })//중괄호 제거하면 return 안넣어도됨 / 이걸 사용하면 이제 +1 또 작동하여서 +2씩 증가
  }
  
  function countBtnSub(){
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Counter:{count}</h1>
      {/* <button onclick={()=>{countBtnAdd(count)}}>+1</button> */}
      <button onClick={countBtnAdd}>+1</button>
      <button onClick={countBtnSub}>-1</button>
      {/* 아놔...onclick으로 ....소문자오타나서....한참 헤맸다ㅠ */}
    </div>
  )
}
