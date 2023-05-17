import React, { useState, useEffect, useRef } from "react";

function Counter2() {
  const [num2, setNum2] = useState(0);
  const num = useRef(0); //React 기억하고 있는값이 들어감 //렌더링과 상관없이 값을 변경하고 싶을 때 useRef를 사용합니다. 다시 렌더링 되어도 그 값은 변하지 않습니다

  return (
    <>
      <button onClick={() => setNum2(num2 + 1)}>버튼</button>
      <div>{num2}</div>
      <button
        onClick={() => {
          num.current += 1;
          console.log(num.current);
        }}>
        버튼
      </button>
      <div>{num.current}</div>
    </>
  );
}

export default Counter2;
//  useRef(0);로하면 기억하게 해줌





// (1)
//let 으로 변수 선언할 때 setState 변화할때마다 초기화 되는 상황 
//num은 증가하지 않음. 함수가 다시 실행한거여서. 예를들어 만일 setNum쪽의 버튼을 눌렀을때 useState가 바뀌면, 함수가 다시 실행되기때문에 num 은 초기화됨. 변수로 한 것은 계속 초기화 

// import React, { useState, useEffect, useRef } from "react";

// function Counter2() {
//   const [num2, setNum2] = useState(0);
//   let num = 0;

//   return (
//     <>
//       <button onClick={() => setNum2(num2 + 1)}>버튼</button>
//       <div>{num2}</div>
//       <button
//         onClick={() => {
//           num += 1;
//           console.log(num);
//         }}>
//         버튼
//       </button>
//       <div>{num}</div>
//     </>
//   );
// }

// export default Counter2;
