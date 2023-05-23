import { render, screen, fireEvent } from '@testing-library/react'; //test할때 도움이되는 기능들을 제공하는거고(컴포넌트에 도움), 실제 테스트는
import App from './App';

test('버튼이 제대로 잘 작동하고 있습니까?', () => {
  render(<App />);
  
	const button = screen.getByRole('button', { name: 'change to blue' });//screen : 실제로 우리화면에 랜더링했다고 치고~
  
	expect(button).toHaveStyle({ backgroundColor: 'red' });

  fireEvent.click(button);//button에 클릭이벤트를 실행.
	expect(button).toHaveStyle({ backgroundColor: 'blue' });
  expect(button.textContent).toBe('change to red');//앞에있는값과 toBe안에있는것을 동일한지 비교하는것.
});



//TDD 단계
// 🔴 적색 단계 : 성공하기 위해 테스트 실패하는 단계
// 🟢 녹색 단계 : 테스트에 성공하는 단계
// 🟣 리팩터 단계 : 테스트에 성공한 코드를 기반으로 코드의 품질을 높이는 단계 refactoring