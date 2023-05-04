import "./App.css";
import Menu from "./components/menu/Menu.jsx";
import NewMenu from "./components/newMenu/NewMenu.js";
//가져올 때 / 끝에 jsx안써도 작동함
import TripList from "./components/tripList/TripList";

function TextArea() {
  return (
    <div className="wrapper">
      <textarea readOnly maxLength={3} style={{ backgroundColor: "blue" }} />
    </div>
  );
}

// 오류검사하고 수정해보기 ↑ 위에
// function TextArea() {
//   return (
//     <div class="wrapper">
//       <textarea
//         readonly
//         maxlength=3
//         style={"background-color: blue;"}
//       />
//     </div>
//   );
// }

function App() {
  const name = "햄!!!";
  const 변수 = "value";
  function 함수() {
    console.log("함수다!");
  }
  const 값 = true;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      {100 + 1}
      {"hello" + "world"}
      {[1, 2, 3].map((x) => x ** 2)}
      {/* map 같은 경우 ,(쉼표) 제거후 별개의 문자열로 반환함 */}
      {함수()}
      {변수}
      {값 ? "one" : "two"}

      <p className="year" style={{ color: "red" }}>
        년 : {year}
      </p>
      <p className="monthDay">
        월/일 : {month}/{date}
      </p>
      <p className="time">
        시간 : {hour}시 {min}분 {sec}초
      </p>
      <p>{"시간: " + hour + "시" + min + "분" + sec + "초"}</p>



      <div>
        <TripList></TripList>
      </div>



      {/* JSX 안의 주석 */}
      <Menu></Menu>
      {/* src의 Menu 함수 import로 가져온거 넣어서 출력하기 / 사용자정의태그 */}
      <NewMenu></NewMenu>
      <input type="radio" checked={false} />
      <h1 hello="hi">안녕 나는 {name}★</h1>
      <h1>안녕 나는 HaileyHam</h1>
    </div>
  );
}

export default App;
