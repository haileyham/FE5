import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />); //실제로 우리화면에 랜더링했다고 치고~
  const linkElement = screen.getByText(/learn react/i); //i는 대소문자 구분하지 않겠다는 뜻 / 찾아서 linkElement에 넣어줌
  expect(linkElement).toBeInTheDocument(); //toBeInTheDocument()에 있을거라는것을 기대한다.
});


//create-react-app으로 생성된 프로젝트는 기본적으로 jest 라이브러리를 사용하고 있는것