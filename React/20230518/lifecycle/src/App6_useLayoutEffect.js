import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [value, setValue] = useState(100);

  useEffect(() => {
    if (value >= 1000) { //1000이상일때만 실행이니까 커져랏에서만 작동 / 결국 커져라 눌렀을때 1000이 아니라 300이 됨
      //useEffect는 렌더링 이후에 행동하기 때문에, 순간(깜빡임) 1000이 됐다가, 300으로 바뀜.
      setValue(300);
    }
  }, [value]);

  // useEffect는 화면이 바뀌고(아래의 onClick)
  // 실행(useEffect)이 되기 때문에
  // setValue로 인해 재 렌더링됨.
  // useEffect(() => {
  //     if (value >= 1000) {
  //         setValue(300);
  //     }
  // }, [value]);

  // 화면에 컴포넌트가 렌더링이 끝마치기 전에 끝남
  // value가 변경되었을 때 렌더링하고 끝마치기 전에 끝남

  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => { setValue(1000) }}>커져랏!</button>
      <button onClick={() => { setValue(200) }}>작아져랏!</button>
    </div>
  )
}

export default App;

/**
 * 깜빡이면서 커지는 이유?
 * 1. 커져라 버튼을 클릭한다. setValue 가 실행되면서 상태값을 변경한다.
  2. Value 값이 수정되면서 컴포넌트를 재랜더링한다. 연결된 파란 상자의 스타일이 변경된다.
  3. 랜더링이 끝나고 Value 값이 변한것을 감지한 useEffect 가 실행된다.
  4. setValue 가 실행되면서 상태값을 또 변경한다.
  5. 컴포넌트가 재랜더링 되면서 파란상자의 스타일이 변경된다.
 * 
  * 해결방법 useLayoutEffect
  * 모든것이 랜더링 전에 해결됨
  * 1000 > value값 1000으로 바뀜 > 랜더링이 끝나기 전에  ,,,, ??? ㅇ?ㅇㅇ?

  //useLayoutEffect는 내부적으로 컴포넌트 업데이트(렌더링)되기전에 특정 행동을 수행. useEffect는 렌더링이 끝나고 특정 행동을 수행. 그래서 useEffect는 깜빡 거림이 존재할 수 있음.

  https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5
  이곳의 정보를 통해 useEffect와 useLayoutEffect 정리하기~


  
  **Render 과정과** **Paint 과정 사이**에서 `useLayoutEffect`가 동작하게 됩니다. 해당 `LayoutEffect`가 **실행이 끝나면 Paint가 진행됩니다.**

즉, **useLayoutEffect 과정이 마쳐진 후**에 브라우져에 그려지게 됩니다. `useEffect`는 작업이 모두 끝나지 않아도 화면이 잘 그려지던데 동작 방식이 다른 것 같네요. 

이는 `useEffect`는 **비동기적**으로 동작하지만, `useLayoutEffect`는 **동기적으로** 동작하기 때문입니다. 따라서 `useLayoutEffect`가 오래걸리는 작업이라면 화면도 늦게 렌더링됩니다.





 * 
 * 1. useLayoutEffect는 useEffect보다 먼저 실행됩니다. 따라서 useEffect보다 먼저 실행하고 싶은 무언가가 있다면 useLayoutEffect를 사용해야 한다라는 것을 알 수 있습니다.
  2. 
  2.1 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행됩니다. 그리고 useLayoutEffect 가 실행됩니다.
  2.2 useEffect return의 콜백함수가 실행됩니다. useEffect 가 실행됩니다.

  3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect
 * 
 * 
 */