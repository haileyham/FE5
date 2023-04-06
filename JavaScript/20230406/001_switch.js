//witch문
//switch 문을 사용하여 여러 조건에 대한 실행 코드를 작성할 수 있습니다. switch case 문은 하나의 변수를 여러 값과 비교하여 실행 코드를 결정하는 조건문입니다.


const value1 = 'two'

switch (value1) {
  case 'one':
    // 값1에 대한 실행 코드
    console.log('hello one')
    break;
  case 'two':
    // 값2에 대한 실행 코드
    console.log('hello two')
    break;
  case 'three':
    // 값3에 대한 실행 코드
    console.log('hello three')
    break;
  default:
    // 모든 case에 해당하지 않을 때 실행될 코드
    console.log('hello default')
    break;
}
//hello two


const value2 = 'four'

switch (value2) {
  case 'one':
    console.log('hello one')
    break;
  case 'two':
    console.log('hello two')
    break;
  case 'three':
    console.log('hello three')
    break;
  default:
    console.log('hello default')
    break;
}
//hello default


//break; 빼먹으면 안돼용~
const value3 = 'one'

switch (value3) {
  case 'one':
    console.log('hello one')
  case 'two':
    console.log('hello two')
  case 'three':
    console.log('hello three')
  default:
    console.log('hello default')
}
//break가 없다면 switch문을 탈출하지 않고 모든 코드들을 순서대로 실행시킵니다. switch문을 적절하게 사용하고 싶다면 반드시 break를 작성해주는 것을 잊지맙시다. 




//

switch (new Date().getDay()) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
  default:
    console.log('금퇼~주말 어디갔죠')
    break;
  //default는 견고한 코드를 위해서 써주는 것이 좋음
}


// 단축키
// 여러줄 복사하고 싶을 때에 
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때 
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어 
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// window : Shift + Alt + F
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택
// mac : shift + cmd + left, cmd + opt + l // 안되는 분도 있으십니다.




// 터미널로 폴더만들기
// cd 폴더명 : 파일위치 이동 (cd 폴더명/폴더명 하면 두단계 이동 가능)
// cd .. : 전 상위 폴더 이동
// mkdir 폴더명 : 폴더 생성
// touch 파일명 파일명 : 파일 생성
// ls : 현재 폴더 파일 목록


// 다른 언어에서 switch문 어떻게 사용? python은 switch문 없는데? JavaScript는 

const 요일 = new Date().getDay()
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
}

console.log(요일객체[요일])


//default는 어떻게 처리?
const 요일2 = 10
const 요일객체2 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
}

//nullish 연산자 사용
console.log(요일객체2[요일2] ?? 'hello')
console.log(undefined ?? 'hello')
//'hello'

//단락평가 사용
console.log(요일객체2[요일2] || 'hello')
console.log(undefined || 'hello')
//'hello'
