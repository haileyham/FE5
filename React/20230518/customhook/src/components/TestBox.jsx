import React from 'react'
import {useMouseLocation} from '../hooks/useMouseLocation';
//default안썼기때문에 {} 에 담아서 호출해야함 / 계속오류났음 ㅠㅠ


export default function TestBox() {
  const location = useMouseLocation(); //우리가 만든 hook가져옴

  console.log(location);

  return (
    <div style={{ height: 100, width: 100, backgroundColor: location.y > 200 ? "royalblue" : "hotpink" }}>TestBox</div>
  )
}
