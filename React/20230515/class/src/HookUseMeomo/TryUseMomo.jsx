import { useState, useMemo } from 'react'

function 부하() {
  let s = 0;
  for (let i = 0; i < 1000000000; i++) {
    s += i;
  }
  return s;
}
//계산하느라 부하가 걸려서 클릭했을때 한참있다가 올라감
//이럴때 useMemo사용하기

function TryUseMemo() {
  const [count, setCount] = useState(0);
  // let result = 부하();
  const result = useMemo(()=>{
    return 부하()
  }, [])
  //이렇게 useMemo사용하면 바로바로 됨

  const handleCountUp = (e) => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default TryUseMemo;