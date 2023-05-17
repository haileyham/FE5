import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  // (2) [처음들어와서 실행할지 말지] 체크 하는 것
  const handleCountUp = (e) => {
    setCount(count + 1);
    //count가 변했을때 동작할 행동을 useEffect를 이용해 구현
  };
  useEffect(() => {
    //이게 처음 입장했을 때 실행되고 있음
    // 처음 들어왔을때 감지해서 안실행시키고 싶다면
    // 실행을 시킬지말지에 대한 상태를 만들어도 됨
    
    // if (count !== 0) { //(2) 첫번째 새로고침할대 안 뜨고싶다면 이것도 조건 붙이면 됨. 이게 바뀔때 실행해줘~ 즉 0이 아닐때 실행해줘~란 식으로.

      if(isFirstRender){ // (2) 위에 대신에 이거 써도됨 / useState에 값받고
        console.log('난처음렌더링이 되는지 확인하고있는데 이건첫번째넹')
        setIsFirstRender(false);}
        else{
          console.log('두번째네')
        }

      if (count % 2) {//(1) 이것이 바뀔때마다 수행함
        //나머지가 2일때 0 이되면 false, 즉 true라는 것은 0이 아니란 뜻
        alert("홀수입니다");
      } else {
        alert("짝수입니다");
      }
    // }
  }, [count]);
  //count의 값이 변할 때(=state가 변할때) effect를 발동시키겠다.
  //[여기안에있는것을 의존성배열 dependency array라고함.]
  /*
  자, 여기서 한 번 페이지를 새로고침 해봅시다. 그러면 클릭하지 않았는데도 "짝수입니다!"라는 메시지가 나옵니다. 이유는 useState(0)에서 count값을 0으로 초기화하면서 count의 값이 변하기 때문입니다.
  => 처음 만들어지는 것도 count변화가 일어났다고 봄

  (재)랜더링
useEffect함수 호출 (파라미터로 콜백함수, dependency array 전달)
이전 dependency array와 비교
3-1. 3에서 다른점이 발견 될 시 콜백 호출
  */
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  );
  /*
  cleanup이 먼저 되고 상태가 변경

  useEffect(()=>{
	state가 변경되어 렌더링 될 때 실행하는 부분!
	공부하려고 책 펴는 타이밍!
	return()=>{
	다시 렌더링을 하기 이전에 컴포넌트를 지우고 다시 그리겠죠?
	이 과정에서 지우기 전에 실행되는 부분입니다! clean-up이라고도 하죠. 
	여러분들 시험 공부 하나를 마치고 다음 시험 공부 전에 책상 정리하는 느낌이랄까요..
	}
},[state값이 들어갑니다.(들어가지 않으면 최초 1번만 실행됩니다.)]) 
*/
  /*
// 컴포넌트가 업데이트 될 때마다 매번 실행
useEffect(()=>{
	console.log('hello world');
})
// 의존을 안함(의존할대상이없고 그런게 아님 걍 안함)
// dependence가 없는 것임

// 처음에만 실행
useEffect(()=>{
	console.log('hello world');
}, [])
//감지할 상태가 없어서 처음에만 실행됨 
// 의존을 하려하는데 대상이 없음

// 변수들의 변화가 일어날 때마다 실행
useEffect(()=>{
	console.log('hello world');
}, [변수1, 변수2...])
// 얘네 바뀔때마다 바꿔야지~
// 의존할 것이 명확함
*/
}

export default Counter;
