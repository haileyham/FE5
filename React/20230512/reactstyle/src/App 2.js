import { createGlobalStyle } from "styled-components";
import Example from "./Components/Example";

const GlobalStyle = createGlobalStyle`
span {
  color: red;
  font-size: 12px;
}
`;

function App() {
  const name = "hailey";
  const age = 10;

  function 인사(문구, 이름, 나이) { 
    console.log(문구, 이름, 나이);
    return `${문구[0]}${이름}${문구[1]}${나이 + 나이}${문구[2]}`;
  }

  const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age + age}입니다.`;
  console.log(인사문구);

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
