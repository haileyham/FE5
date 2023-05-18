import React, { useEffect, useState } from "react";

function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "개리";
}

function App() {
  const [name, setName] = useState(getName());
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}

export default App;

/**
 * 함수형 업데이트
 * https://velog.io/@tjdgus0528/React-Native-5x048oii
 * https://garve32.tistory.com/39
 * https://sunho-doing.tistory.com/entry/Reactjs-%EB%A0%8C%EB%8D%94%EB%A7%81-%EC%B5%9C%EC%A0%81%ED%99%94-useCallback-%ED%95%A8%EC%88%98%ED%98%95-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8?category=1074465 
 * 문제점 해결 이런방식으로 작성?ㅇ?
 */

/*
https://paullabworkspace.notion.site/20-useState-Lazy-initialize-3d2f35fde8404ed1b47b3b7a59df50f4

20. useState - Lazy initialize

그런데 이럴수가..! 로그가 클릭한 횟수만큼 찍히고 있습니다. 🧐

그 이유는 컴포넌트가 매번 렌더링될 때마다 `getName` 함수를 실행하기 때문입니다. 만약 안에서 실행하는 함수가 오래 걸린다면 매번 렌더링 때마다 오랜시간을 기다려야 하겠죠?

`useState` 또한 매번 실행되지만 **실제로 값을 초기화 하는 것은 최초 1번만** 일어납니다.

현재 우리가 작성한 `useState(getName())` 의 흐름을 보면, 아래와 같은 과정이 실행됩니다.

1. `getName()`의 결과값을 얻는다.
2. 얻은 결과값을 `useState()`안에 인수로 넣어준다.
3. state가 초기화된다.(리렌더링 과정에서는 state가 바뀌진않는다)

매번 `useState`를 실행하는 과정이 일어나도 리액트가 잘 관리해주지만 우리가 만든 `getName` 함수를 실행하는 과정에서 비효율적인 동작이 일어나고 있습니다.

이러한 비효율을 어떻게 최적화시킬 수 있을까요?


------------------------------------------------


바로 함수 자체를 값으로 넘기고 리액트가 그 함수를 실행하도록 만드는 것입니다. 아래와 같이 함수를 실행한 결과를 값으로 넘기지 않고 `getName`함수 자체를 값으로 넘기는 방식으로 바꿔보겠습니다.
getName()말고 getName으로 넘겨주기
(콘솔에 1번만 찍히게 됨)

1. `useState()`에 인수로 `getName` 함수를 값으로 넘겨준다.
2. `useState(getName)`이 진행되면 최초 초기화 진행 과정에서 `getName`을 실행하게 된다.
3. 이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기 때문에 `getName`을 실행하는 부분이 생략된다.


이와 같이 `lazy initialize`는 초기값 계산에 많은 비용(연산 시간, 메모리 등)이 소요될 때 비효율적인 부분을 최적화하는데 사용할 수 있습니다.
*/