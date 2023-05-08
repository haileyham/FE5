import { useState } from "react";
import DisplayMood from "./Components/DisplayMood/DisplayMood";
//DisplayMood 파일의 DisplayMood컴포넌트(function DisplayMood(){})
import MenuList from "./Components/MenuList/MenuList";

function App() {

  const [currentMood, setCurrentMood] = useState("");

  return (
    <div>
      <MenuList mood={currentMood} onItemClick={setCurrentMood} />
      {/*상위 컴포넌트 App에 의해 렌더링되는 React 컴포넌트. 
      prop mood는 App 구성 요소의 useState 후크에 의해 관리되는 currentMood 상태 변수의 현재 값과 함께 MenuList 구성 요소로 전달됨. 이렇게 하면 MenuList 구성 요소가 현재 선택된 분위기를 표시할 수 있음(있는 경우).
      onItemClick 소품도 setCurrentMood 함수를 값으로 사용하여 MenuList 구성 요소로 전달. 이 함수는 메뉴 항목을 클릭할 때 호출되며 currentMood 상태 변수의 값을 선택한 기분으로 업데이트. 이렇게 하면 DisplayMood 구성 요소가 선택한 분위기를 실시간으로 표시할 수 있음.*/}
      <DisplayMood mood={currentMood} />
    </div>
  );
}
export default App;
//모듈 구문에서 모듈에서 기본값을 내보내는 데 사용되는 키워드
