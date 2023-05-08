import React, { Fragment } from "react";
//우선 코드 상단에  import를 통해 모듈을 추가 / 모듈을 추가했다면 Fragment를 사용하여 작성 <React.Fragment> / Fragment 라는 키워드 대신 <> </> 를 사용할 수도 있습니다. 이때는 fragment를 사용하기 위해 React모듈을 따로 추가할 필요가 없습니다. / 마치 바닐라 JS 에서 createElement 메소드로 여러개의 요소를 한번에 생성할 때, 생성한 요소들을 붙일 수 있는 documentFragment 메소드를 사용하는것과 비슷하다고 볼 수 있습니다.
import "./FragmentTest.css";

function ListItem({ item }) {
  return (
    //div 대신
    //<React.Fragment>, <Fragment>, <> 모두가능
    <>
      <dt>사과</dt>
      <dd>사과는 제철</dd>
    </>
  );
}

function Glossary(props) {
  return (
    <dl>
      <ListItem />
      <ListItem />
      <ListItem />
      {/* {props.items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))} */}
    </dl>
  );
}

let list = [
  { no: 1, area: "대전", visited: false },
  { no: 2, area: "부산", visited: true },
  { no: 3, area: "목포", visited: false },
  { no: 4, area: "제주도", visited: false },
];

function MyComponent() {
  return (
    list.map((item) => {
      return (<>
        <h1>{item.area}</h1>
        <p>{item.visited ? "방문함" : '아직 안감'}</p>
      </>)
    })

  );
}


// function MyComponent() {
//   return (
//     //Fragment는 화면에 렌더링되는 요소가 아님.. 클래스로 css를 줘도 안됨.
//     <React.Fragment className="my-fragment">
//       <h1>리엑트프레그먼트</h1>
//       <p>테스트입니다!</p>
//     </React.Fragment>
//   );
// }




const items = [
  { id: 1, name: 'Apple', desc: '빨간건 사과' },
  { id: 2, name: 'Banana', desc: '바나나는 길어' },
  { id: 3, name: 'Cherry', desc: '체리는 비싸' }
];

// function ItemList(){
//   return(
//     items.map((a) => { //id, name, desc 하고 {name}{desc} 해도 됨
//       return(<>
//         <dt>{a.name}</dt>
//         <dd>{a.desc}</dd>
//       </>);
//     })
//   );

  function ItemList() {

  const itemList = items.map(({ id, name, desc }) => {
    return (<React.Fragment key={id}>
      <dt>{name}</dt>
      <dd>{desc}</dd>
    </React.Fragment>);
  });

  return (
    <dl>
      {itemList}
    </dl>
  )
  
}


const items2 = [
  { id: 1, name: 'Apple2', desc: '빨간건 사과2' },
  { id: 2, name: 'Banana2', desc: '바나나는 길어2' },
  { id: 3, name: 'Cherry2', desc: '체리는 비싸2' }
];

function ItemList2(){
    const itemList2 = items2.map((a) => { //id, name, desc 하고 {name}{desc} 해도 됨
      return(<React.Fragment key={a.id}>
        <dt>{a.name}</dt>
        <dd>{a.desc}</dd>
      </React.Fragment>);
    })
  ;
  return(
    <dl>
      {itemList2}
    </dl>
  )
}


function App() {
  return (

    <ItemList />
  );
}

export default App;