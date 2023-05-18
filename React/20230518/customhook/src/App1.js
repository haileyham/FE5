import React from "react";
import TestBox from "./components/TestBox";
import {useMouseLocation} from "./hooks/useMouseLocation";
//default안썼기때문에 {} 에 담아서 호출해야함 / 계속오류났음 ㅠㅠ




function App() {
  const location = useMouseLocation();

  

  return (
    <div>
      hello world
      <TestBox></TestBox>
      {`x축 위치 : ${location.x}, y축 위치 : ${location.y}`}
    </div>
  );
}
export default App;
