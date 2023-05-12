import { createGlobalStyle } from "styled-components";
//글로벌 스타일은 styled-components가 제공하는 createGlobalStyle() 함수를 사용. 먼저 crateGlobalStyle() 함수를 사용하여 전역 스타일 컴포넌트를 생성합니다.  App.js(현재 최상위 컴포넌트) 상단에 추가해주면 모든 하위 컴포넌트에 스타일이 적용
/*
npm install styled-components
또는 npm install styled-components@5

나의 경우 밑에 것들로 가능
npm install styled-components@5.3.10 
또는 npm install styled-components@latest


위에서 밑에껄로 했을 경우, 
styled-reset이 components에 종속되어 있는데 버전이 업데이트 되면서 문제가 발생하네요
npm i styled-components@5.3.10 먼저 다시 설치하고
npm i styled-reset 설치하기
*/
import Example from "./Components/Example";

// 기본적으로 global 우선 순위가 높다.
const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;

function App() {
  const name = "hailey";
  const age = 10;

  function 인사(문구, 이름, 나이) { //밑에 const 인사문구 = 인사~~이부분에서 / 인사`이름은 /이고 나이는 /입니다`가 잘라져서 문구 배열로 전달됨 / 이름과 나이에도 각각 들어감. / 나이가 10+10으로 되어서 20이 전달되어 들어가고 / 밑에서 return에 20+20이 되어서 최종적으로 40이 찍힘.
  // ★ 첫번째 표현식이 이름에 전달되고, 두번재 표현식이 나이에 전달됨. 문구에는 배열로 글자들이 들어감. 헷~갈~료~
    // console.log(문구)
    console.log(문구, 이름, 나이);
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;//문구가 배열이라는 것을 알 수 있음
  }

  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`; //JavaScript 표현식을 기준으로 문자열을 자르고 잘라서 문구에 배열로 넣어줌.

  console.log(인사문구);
  //(3) ['이름은 ', '이고 나이는 ', '입니다.', raw: Array(3)] 'hailey' 20
  //이름은 hailey이고 나이는 40입니다.

  return (
    <>
      <GlobalStyle />
      <h1>hello world 1</h1>
      <span>hello world 2</span>
      <Example />
    </>
  );
}

export default App;
