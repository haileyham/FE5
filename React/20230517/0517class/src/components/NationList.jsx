//사용전에 json 서버열기
/**
 * [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

- 해당폴더 cd로 들어가서 실행 / npm install -g json-server
json-server --watch db.json (끝에는 파일명이기때문에 data.json으로 했으면 그렇게 해야함)
- 설치는 한번만하면됨 만약 오류뜨면 맥북은 sudo앞에 붙이면되고, password쓰라고 뜨면 컴퓨터 패스워드쓰면됨
- data는 src랑 같은 라인선상에 폴더 만들어야함
- 서버실행 : json-server --watch ./data/data.json
 * 
 */

//https://paullabworkspace.notion.site/16-Hook-useMemo-faa590148e8b4264a53b487db4ab5d9b#5b6ccf4ec0e84c96bac07b2debc440da
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
  const [url, setUrl] = useState('http://localhost:3000/nations');

  useEffect(() => { //여기에 useMemo는 쓰는 것은 가치가 없는 일임 / API 요청할때는 useEffect를 활용한다.
    //useEffect : 렌더링 이후에 실행할 코드를 만들수 있다. 어떤 변수가 변경될때마다(의존성), 특정기능이 작동하도록 할 수 있다.
    //useMemo의 경우 시간이 오래걸리는 것을, 어차피 결과가 같다면 사용. 의존성 배열에 적힌 값이 변할 때만 값,함수를 다시 정의할 수 있다. ( 재랜더링시 정의 안함 )
    //useEffect와 useMemo의 차이점 밑에 정리
    const fetchData = async () => { //변수에 담아주고 async실행
      try {
        const response = await fetch(url);
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
  }, [url]); //[] 빈배열을 넣어주면 한번만 실행되고 실행안되기때문에, url 계속바뀔때는 url (state) 넣어주면 useEffect부분을 렌더링될때마다 실행(렌더링은 state값이 바뀔때마다 실행될걸?~).
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
      <div>
        <button onClick={()=>{setUrl("http://localhost:3000/nations?loc=europe")}}>유럽 목록</button>
        {/* url 바꿔주면 됨 > component다시 랜더링 됨 / useEffect 실행되면서 fetch 바뀐거 출력됨 
        ? 다음에 loc=europe 만 출력되도록
        ?는 json서버에 질문을 던지는 것임(json서버의 고유한 기능)
        */}
        <button onClick={()=>{setUrl("http://localhost:3000/nations")}}>전체 목록</button>
      </div>
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


/*
# 4. useMemo와 useEffect의 차이

<aside>
💡 `useMemo`와 `useEffect` 모두 설정된 값의 변동에 따라 동작하는 것이라 어떤 점이 다른지 이해하기 어려울 것 같아 정리해보았습니다.

</aside>

### 4.1 useMemo

`useMemo(실행될 것, [값])`라고 할 때 `useMemo`는 렌더링 전에 실행되어 메모이제이션한 것을 반환해줍니다. 값이 바뀌었는지 확인하고 **렌더링 전**에 저장된 것을 보내주는 것이죠.

### 4.2 useEffect

반면 `useEffect`는 **렌더링 후**에 일어납니다. 렌더링 후에 **상태가 업데이트 되었을 때를 감지**하여 동작합니다.

### 4.3 차이점

`useMemo`는 렌더링에 직접적인 영향을 미칠 수 있습니다. 예를들면, 콜백함수에서 컴포넌트 등을 반환하게 했을 때, 렌더링하기 이전에 저장된 값을 확인하여 변화가 없으면 리렌더링을 하지 않도록 할 수 있기 때문이죠.

반면 `useEffect`는 렌더링한 이후에 동작되기 때문에 리렌더링을 방지하지 못합니다. 

즉, `useMemo`는 리렌더링이나 불필요한 재실행 과정을 막는 방법(최적화)에 사용하기 적합하고, `useEffect`는 상태를 이용한 관리에 사용됩니다.

### 4.4 요약

- 렌더링 전 : `useMemo` / 렌더링 후 : `useEffect`
- 상태 변화를 감지하여 경우에 따라 콜백함수를 호출하고 싶다면 `useEffect`
- 값을 저장하여 불필요한 동작 또는 렌더링을 막아 최적화하고 싶다면 `useMemo`
*/