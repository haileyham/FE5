import { createContext } from "react"


const UserInfo = createContext({ name: "gary", id: "garyIsFree" });

const App = () => {
  return (
    <>
      <HelloLicat />
      <HelloLicatTwo />
    </>
    );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => {
        return(
        <div>
          <h2>{value.id}</h2>
          <strong>{value.name}</strong>
          <HelloLicatTwo/>
        </div>
        )
      }}
    </UserInfo.Consumer>
  );
};
/*
  <UserInfo.Consumer>태그를 만들어서, 안에 콜백함수를 통해서 데이터를 전달받고 있음. value로 context값들을 받는 것임. 
  (??안에 있는 코드들은 HelloLicat의 데이터들을 가져다 쓸 수 있음??) 
  더이상 props를 쓸 필요가 없다. createContext에도 데이터가 커질수록 성능이슈 있기에 필요한 것만 집어넣어야 함.
*/

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value)=>{
    <div>
      <h2>Two : {value.id}</h2>
      <strong>Two : {value.name}</strong>
    </div>
      }}
    </UserInfo.Consumer>
  );
};
/*
  consumer에 접근을해서 
*/

export default App;

/**
 * **1) Context 생성**

`createContext`로 context를 생성합니다. 값을 전달해줄 컴포넌트에 `Context.Consumer` 형식으로 감싸주고 `UserInfo` 안에 있는 `Consumer`라는 컴포넌트를 통해 `value` 값을 가져옵니다.

consumer는 자식으로 태그를 가질 수 없습니다. 하나의 함수로 감싸주세요.


2) Context.Provider로 값 변경하기
HelloLicat에 UserInfoContext.Provider로 감싸서 값을 전달하면 consumer로 전달되는 value 값이 바뀝니다.
이때, Provider로 값을 전달하지 않으면 에러가 발생하니 꼭 value를 넣어야 합니다.
//사실 변경보다는 context 값자체를 제공할때 쓴다고 보면됨

정리해보겠습니다!

1. Context.Provider는 컴포넌트 계층 구조에서 Context 객체를 전달하는 역할을 합니다. Provider를 사용하여 Context를 구독하는 모든 하위 컴포넌트들이 Provider가 제공하는 값을 사용할 수 있게 됩니다.
2. Context.Consumer는 Context를 구독하는 컴포넌트입니다. Consumer를 사용하여 Provider에서 전달받은 Context 값을 사용할 수 있습니다. Consumer는 Provider로부터 값을 받아올 때 콜백 함수를 사용합니다. 이 콜백 함수의 인자로 전달되는 값은 Provider에서 전달한 Context 값이 됩니다.

Provider는 Context 값을 제공하고 Consumer는 해당 값을 사용하는 역할을 하며, 이 둘을 결합하여 props를 사용하지 않고도 컴포넌트 트리의 어디에서든 Context 값을 사용할 수 있습니다.

단, 이는 전역 공간을 사용하는것이기 때문에 반드시 필요한 데이터가 아니라면 사용을 최소화 하는것이 좋습니다!

props drilling 이 두 단계를 초과하지 않는다면 꼭 사용할 필요는 없습니다.

*/