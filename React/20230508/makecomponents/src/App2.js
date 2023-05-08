// 컴포넌트화 <Licat/>, <Time/> 등 그리고 App() 도 하나의 컴포넌트
// 컴포넌트의 이름을 지을 때는 첫 글자를 대문자로 작성해야 컴포넌트로 해석됨
// 이처럼 컴포넌트를 만드는 것이 사용자 정의 태그로 만드는 것이다

function Licat(props) {//props대신에 구조분해할당 가능하면 배열로 받아도 됨
  const name = "라이캣!";
  const someStyle = { backgroundColor: "black", color: "white" };
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1호</h1>
      <h1>안녕, 라이캣 2호!</h1>
      <div className="newClass" />
    </div>
  );
}
function Time() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  return (
    <div>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <h1 style={{ color: "red" }}>년 : {year}</h1>
        <h1>
          월/일 : {month}/{date}
        </h1>
        <h1>
          시간 : {hour}시 {min}분 {sec}초
        </h1>
      </div>
    </div>
  );
}


function HelloProps(props) {
  return (
    <div>
      <p>my name is {props.name} and age is {props.age}</p>
      <strong>you are {props.someFunc()}</strong>
      <p>this is someArr {[...props.someArr]}</p>
      <p>this is someObj {props.someObj.one}</p>
      {props.someJSX}
    </div>
  )
}

function App() {
  return (
    <>
      <Licat name="Gary" />
      <Time />
    </>
  );
}

// export default App;