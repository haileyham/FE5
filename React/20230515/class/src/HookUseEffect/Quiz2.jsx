import React, { useState, useEffect } from 'react';

function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링이 됩니다..?")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
  setInterval(()=>{
    /*
    Time이 그려질 때 setInterval이 실행됨. (화면이 그려질때실행)
    setState 화면이 새로 그려짐
    화면이 그려진다는 것은 Time()을 실행한 것임.
    2번임
    Time이 그려질때 setInterval 또 실행됨(1초에 setState 두번하는중)

    */
  },1000);

  return (
    <div>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}


export default Time;