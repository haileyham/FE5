
//(1)
// useEffect / fetch 사용----------------------------------------------
/*
import React,{useState, useEffect} from 'react'

export default function NationList() {

  const [nations, setNations] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/nations')
    .then(response => {
      // http 상태코드가 200번때가 아닐 경우
      if(!response.ok){
        throw new Error('네트워크 응답에 문제가 있습니다')
      }
      return response.json()
    })
    .then(json => setNations(json))
    .catch((error)=>{
      console.error('데이터 가져오는데 문제가 발생했습니다:',error)
    })
  }, []); // useEffect쓰지 않으면받아온 데이터를 nations에 계속해서 들어감 / 상태변경됨 / 재랜더링 무한반복  / useEffect [] 이거 처리 안해주면, 무한요청되면서 서버다운됨 / []이거 실수로 이상한데 넣었는데 오류 딱히 안잡아줌 ㅠㅠ 흑흑...제대로 잘쓰기/ 전체를 감싸주는 것에 넣어야함!!!!!!!!!
  console.log(nations);


  return (
    <div>
      <h1>NationList</h1>
    </div>
  );
}
*/


//(2)
//async / await 사용
import React,{useState, useEffect} from 'react'
import styled from "styled-components"

//div선택해서 꾸며주겠다 ``안에 css넣기
const Item = styled.div`
  margin: 60px auto;

  ul{
    padding:10px;
  }

  li{
    margin:20px 0;
    border: 1px solid black;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
  }
`

export default function NationList() {
  const [nations, setNations] = useState([]);

  useEffect(() => {
    const fetchData = async () => { //변수에 담아주고 async실행
      try {
        const response = await fetch('http://localhost:3000/nations');
        if(!response.ok){
          throw new Error('오류난다야~')
        }
        const jsonData = await response.json();
        setNations(jsonData);
      } catch (error) {
        console.error('데이터 가져오는데 문제가 발생했습니다:',error);
      }
    };
    fetchData();
  }, []);
  console.log(nations);


  return (
    <Item>
      {/* 원래 div였는데 위에 const Item = styled.div`` (import styled from "styled-components")을 통하여 div를 꾸며줌 그래서 소환해옴 */}
      <h1>나라 목록</h1>
      <ul>
        {nations.map((item, index) => (
          <li key={index}>
            <h3>나라 이름 : {item.title}</h3>
            <p>인구 수 : {item.population}</p>
            <p>대륙 : {item.loc}</p>
          </li>
        ))}
      </ul>
    </Item>
  );
}



/**
 * 'useEffect' 후크는 일반적으로 데이터 가져오기, 구독 또는 수동 DOM 조작과 같은 부작용을 처리하기 위해 React 구성 요소에서 사용됩니다. 구성 요소가 렌더링된 후 또는 특정 종속성이 변경된 경우 이러한 부작용을 수행할 수 있습니다.

데이터를 가져오는 맥락에서 'useEffect' 후크 내부에 데이터 가져오기 로직을 ​​배치하면 가져오기가 발생하는 시기와 가져온 데이터에 대한 구성 요소의 응답 방식을 제어할 수 있습니다. 데이터 가져오기에 일반적으로 useEffect가 사용되는 이유는 다음과 같습니다.

수명 주기 제어: useEffect 내부에 데이터 가져오기 로직을 ​​배치하여 구성 요소의 수명 주기에서 가져오기 작업이 발생하는 시기를 제어할 수 있습니다. 예를 들어 useEffect의 두 번째 인수로 빈 종속성 배열([])을 사용하면 구성 요소가 마운트될 때 데이터를 한 번만 가져옵니다. useEffect 종속성 배열에 종속성을 제공하면 이러한 종속성이 변경될 때마다 가져오기 작업이 트리거됩니다.
무한 루프 방지: useEffect 내부에 데이터 가져오기 로직을 ​​배치하면 무한 루프를 방지할 수 있습니다. 종속성을 올바르게 지정하면 필요한 경우에만 가져오기 작업이 트리거되도록 할 수 있습니다. 예를 들어 구성 요소가 렌더링될 때마다 변경되는 종속성이 있는 경우 종속성 배열에 포함하여 특정 값이 변경될 때 가져오기 작업을 트리거할 수 있습니다.
정리: 'useEffect'는 함수를 반환하여 정리 메커니즘을 제공합니다. 이 함수는 구성 요소가 마운트 해제되거나 다음 효과가 트리거되기 전에 종속성이 변경될 때 실행됩니다. 이렇게 하면 보류 중인 요청을 취소하거나 기타 필요한 정리 작업을 수행할 수 있습니다.

이전에 제공된 예제에서 useEffect를 사용하면 구성 요소가 마운트될 때 데이터 가져오기가 트리거되고(빈 종속성 배열로 인해) 모든 정리 작업이 올바르게 수행됩니다.


데이터 가져오기에 'useEffect' 사용이 필수는 아니며 특정 요구 사항에 따라 대체 접근 방식을 선택할 수 있습니다.
 */