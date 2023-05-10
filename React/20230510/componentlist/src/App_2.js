import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [datas, setDatas] = useState([
    {
      title: "개발자 무릎 담요",
      price: 17500,
      id: 101,
    },
    {
      title: "Hack Your Life 개발자 노트북 파우치",
      price: 29000,
      id: 102,
    },
    {
      title: "우당탕탕 라이켓의 실험실 스티커북",
      price: 29000,
      id: 103,
    },
    {
      title: "버그를 Java라 버그잡는 개리씨 키링",
      price: 29000,
      id: 104,
    },
  ]);

  //React는 state 함수의 호출의 일관성을 유지하기 위해서 내부적으로 동일한 내용의 state함수 호출이 여러번 반복되면 하나의 업데이트로 취급하여 처리합니다. (setDatas를 비동기적으로 처리하기 때문).
  //React도 JS 마이크로큐,매크로큐 비동기처럼 저장하는 공간이 있음
  function handleClick(id) {
    //우리가 누른 li의 id (인자로 item.id 받음)
    // setDatas(
    //   //useState를 관리하기 위해서 쓰는 것이 setDatas / setDatas의 인자로 받..? 내부에 콜백함수로 호출
    //   datas.filter((item)=>{
    //     return id !== item.id
    //     //우리가 누른 id와 아이템의 id 비교해서 일치하지 않는 것만 배열로 반환하겠다. 즉, 우리가 누른 것만 빼고 새로운 배열로 반환. / setDatas로 useState가 변환되니까 datas가 바뀜 / filter은 원본데이터를 그대로 두고 새로운 배열 반환
    //   })
    // );

    //---------------------위아래 동일하게 동작-----------------------

    // 함수형 업데이트라고 표현합니다. 함수형 업데이트를 사용하면 함수의 인자로 전달되는 state 값을 React가 이전 state의 값으로 보장합니다. 때문에 상태 업데이트가 비동기적으로 처리된다고 해도 안정적으로 이전 값과 이후 값(버츄얼 돔)을 비교하여 처리할 수 있습니다.
    setDatas((prevDatas) => {
      return prevDatas.filter((item) => {
        return id !== item.id;
      });
    });
  }

  return (
    <>
      {datas.map((item, index) => (
        <li key={item.id} style={{ listStyle: "none" }}>
          <h2>
            {index + 1} {item.title}
          </h2>
          <span>{`${item.price}원`}</span>
          {/* <button onClick={(event)=>{event.currentTarget.closest('li').remove()}}>삭제</button> */}
          {/* event객체 전달/ currentTarget 이벤트가 달려있는
            closest : 본인포함해서 가장 가까운 대상찾기('li)가됨
            DOM에 접근하여 바로 처리하는 것은 빠름. React의 경우 변경사항을 기존것과 비교하기때문에 아무래도 DOM으로 직접하는 것이 빠르긴함. 그렇지만 그게 크게 유의미하지는 않음. React의 방식으로 진행하기*/}
          <button
            onClick={() => {
              handleClick(item.id);
            }}
          >
            삭제
          </button>
          {/* 인자로 item.id 넣어주기 */}
        </li>
      ))
      }
      <Counter></Counter>
    </>
  );
}

export default App;
