import { useState, useEffect } from 'react'

//밑에 default안썼기때문에 다른곳에서 {} 에 담아서 import호출해야함 / 계속오류났음 ㅠㅠ
export function useMouseLocation(iniVal) {//초기값 받아옴

  const [mouseLocation, setMouseLocation] = useState(iniVal || { x: 0, y: 0 }); //iniVal가 undefined면 뒤에꺼 출력
  // ||(파이프 연산자)로 앞의 값이 undefined라면 뒤의 값을 부름


  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      // console.log(event.x, event.y);
      // event에는 마우스에 대한 정보가 담겨있음(콘솔해보면 마우스 좌표 버버벅찎힘)
      // console.log(event.x, event.y);
      // mouseLoc이 변하게 됨.
      setMouseLocation({ x: event.x, y: event.y })
    });
  }, []);

  // console.log(mouseLocation);


  return mouseLocation;
  // 함수가 변환해야할 값은 mouseLocation임

}




// import { useState, useEffect } from "react";


// export function useMouseLocation(iniVal) {
//     const [mouseLocation, setMouseLocation] = useState(iniVal || { x: 0, y: 0 });

//     useEffect(() => {
//         window.addEventListener('mousemove', (event) => {
//             setMouseLocation({ x: event.x, y: event.y });
//         });
//     }, []);

//     return mouseLocation
// }