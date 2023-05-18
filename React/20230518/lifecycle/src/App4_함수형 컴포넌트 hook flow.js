import React, { useEffect, useLayoutEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  };
  
  useLayoutEffect(() => { 
    console.log("⏱마운트 될때 브라우저에 그려주기 전에 딱 한번실행!");
    return ()=>{
      console.log("⏱🧹언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useLayoutEffect(() => {
    console.log("⏱마운트/업데이트 될때마다 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useLayoutEffect(() => {
    console.log("⏱마운트 될때, num state변경으로 인해 업데이트 될때 브라우저에 그려주기 전에 실행!");
    return ()=>{
      console.log("⏱🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  //useLayoutEffect가 모두 끝난 후에야 브라우저에 그려주기 시작합니다.

  useEffect(() => {
    console.log("🎈마운트 될때 브라우저에 그려진 후 딱 한번실행!");
    return ()=>{
      console.log("🎈🧹언마운트될때 단 한번 실행됩니다!")
    }
  }, []); 

	useEffect(() => {
    console.log("🎈마운트/업데이트 될때마다 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }); 

  useEffect(() => {
    console.log("🎈마운트 될 때, num state변경으로 인해 업데이트 될때 브라우저에 그려진 후 실행!");
    return ()=>{
      console.log("🎈🧹업데이트가 될때, 언마운트될때 실행됩니다!")
    }
  }, [num]);

  return (
      <button onClick={onClick}>{num}</button>
  );
}
const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap


/**
 * [함수형 컴포넌트 hook flow]
 * https://paullabworkspace.notion.site/21-Functional-Component-Hook-Flow-821fdfbe096b4954a3b92c49920c35a1#5068a5d896514fc5a0f66002adcb72e5
 * 
 * 사진 : 멋사5기 > 0.공부자료 > React Hook Flow 보기
 * 
 * 
 * <aside>
💡 다음 이모지를 통해 console.log를 확인해보며

⏱ :  `LayoutEffect`

🧹 : 클린업 함수

🎈 : `Effect`

</aside>
 * 
 * 
 * 
 * 
 * 
 * 
 * https://velog.io/@erun/React-hook-flow
 * Cleanup
컴포넌트가 업데이트될 때 useEffect clean up -> useEffect 순서로 실행된다.
처음엔 cleanup이 실행되지 않는다. 한 번이라도 useEffect가 등록이 되어있었으면 cleanup 하고 useEffect 업데이트 된 내용을 반영한다.
 */