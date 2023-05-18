import React, { useEffect, useState, useLayoutEffect } from 'react'

export default function App4() {
    const [num, setNum] = useState(0);

    useEffect(() => {

        setNum(10); //사실은 엄청 오래걸리고 어려운 로직

    }, [num]);

    return (
        <>
            <div>{num}</div>
            <button onClick={() => setNum(prevNum => prevNum + 1)}>클릭</button>
        </>
    )
}


/**
 * https://paullabworkspace.notion.site/useLayoutEffect-useEffect-1-bee74209d76546b4aca1f68cc36945e7
 * [useLayoutEffect와 useEffect의 차이]
 * 
 * 
 * 1. 기본 10 으로 출력되고있는데
 * 2. 버튼 클릭을 했을때 11이 되는 것이 아니라
 * 3. 번쩍이면서 10이 됨 왜냐하면???
 * 
 * 4. 클릭을하고 useEffect속의 setNum(10)이 다시 되기 때문에
 * 5. 그 이유는 useEffect가 앞의 것들을 다 실행하고 실행되기 때문임
 * 
 * 6. 만약 useEffect가 아니라 useLayoutEffect라고하면
 * 7. 컴포넌트가 화면에 렌더링되기 전에 실행되기때문에 
 * 8. 아무리 클릭해도 번쩍이지 않음
 * 
 * 
 * ### 2.1.1 마운트(Mount)

1. `Run lazy initializers`
2. `render`
3. `React updates DOM`
4. `Run LayoutEffects`
5. `Browser paints screen`
6. `Run Effects`

### 2.1.2 업데이트(Update)

1. `render`
2. `React updates DOM`
3. `Cleanup LayoutEffects`
4. `Run LayoutEffects`
5. `Browser apints screen`
6. `Cleanup Effects`
7. `Run Effects`

### 2.1.3 언마운트(Unmount)

1. `Cleanup LayoutEffects`
2. `Cleanup Effects`

## 2.2. 상세 내용

### 2.2.1 Run lazy initializers

컴포넌트가 만들어 질 때 props, state 등의 값을 초기화합니다. 최초 마운트가 될 때 단 1번 실행됩니다.

### 2.2.2 Render

리액트 DOM을 렌더합니다.

### 2.2.3 React updates DOM

랜더링된 DOM과 기존 DOM을 기반으로 업데이트합니다.

### 2.2.4 Cleanup LayoutEffects

업데이트/언마운트 과정에서 실행됩니다. 업데이트 과정에서는 `Run LayoutEffects` 이전, 언마운트 과정에서는 컴포넌트가 제거되기 전에 진행됩니다.

### 2.2.5 Run LayoutEffects

마운트/업데이트 과정에서 컴포넌트가 브라우저에 그려지기 전에 동작됩니다.

[useLayoutEffect와 useEffect의 차이](https://www.notion.so/useLayoutEffect-useEffect-c9b318940d0345f58c507da027950be9)

### 2.2.6 Browser paints screen

만들어진 React DOM들을 브라우저에 그려줍니다.

### 2.2.7 Cleanup Effects

업데이트/언마운트 과정에서 실행됩니다. `Run Effects` 이전, 언마운트 과정에서는 컴포넌트가 제거되기 전에 진행됩니다.

### 2.2.8 Run Effects

마운트/업데이트 과정에서 컴포넌트가 브라우저에 그려진 후에 동작됩니다.
*/