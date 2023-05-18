import {useState, useEffect} from 'react'

//밑에 default안썼기때문에 다른곳에서 {} 에 담아서 import호출해야함 / 계속오류났음 ㅠㅠ
export function useMouseLocation(iniVal) {//초기값 받아옴

  const [mouseLocation, setMouseLocation] = useState(iniVal || {x:0, y:0}); //iniVal가 undefined면 뒤에꺼 출력

  useEffect(() => {
    window.addEventListener('mousemove', (event) => {
      // console.log(event.x, event.y);
      setMouseLocation({x: event.x, y: event.y})
    });
  }, []);

  // console.log(mouseLocation);


  return mouseLocation;
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