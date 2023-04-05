// 조건문
// 조건문은 조건에 따라 실행되는 코드를 말합니다. 조건식이 참(`Truthy`)인 값이나 거짓(`Falsy`)인 값을 반환하는지에 따라 코드를 수행할지 말지 판단합니다.
// https://joooing.tistory.com/entry/%EA%B8%B0%EC%96%B5%ED%95%B4%EC%95%BC-%ED%95%A0-6%EA%B0%80%EC%A7%80-falsy-%EA%B0%92

// if문
// 조건에 따라 실행되는 조건문 중 if문은 가장 많이 사용되는 문법입니다.
// 아래는 기본적인 if문의 예시입니다.

if (조건식) {
  // 조건식이 참일 때 실행될 코드
}

let test=5;
if(test < 10){
	//codes
}

// 중괄호안의 코드가 한 줄 뿐이라면 중괄호를 아래와 같이 생략해서 쓸 수 있습니다.
// 하지만 코드를 여러사람이 같이 보게 될 경우 가독성을 위해 생략하지 않는 것을 추천합니다.

if (true) console.log("중괄호를 생략했습니다.");


//if-else 문
// if문은 조건이 참일 때만 실행되기 때문에, 그 밖의 상황인 조건이 거짓일 때 실행할 코드가 필요한 경우도 필요합니다. 이때 사용하는 것이 else문입니다.

let x = 3;
let y = 7;

if(x == y){
  document.write('if문으로 실행되었습니다.');
} else{
  document.write('else문으로 실행되었습니다.');
}



let score1 = 69;
let money = 1000;

if (score1 > 90){
  document.write('참 잘했습니다!<br>');
  money += 100000
} else if (score1 > 80){
  document.write('잘했습니다!<br>');
  money += 10000
} else if (score1 > 70){
  document.write('했습니다!<br>');
  money += 1000
} else {
  money = 0
}
document.write(money);
//위 코드에서는 score > 90이 참을 반환하면 첫 번째 블록 안의 코드가 실행되고, score > 90이 거짓을 반환고 score > 80가 참일 때는 두 번째 블록 안의 코드가 실행됩니다. 만약 모든 조건식이 거짓을 반환한다면 else 블록 안의 코드가 실행됩니다.


// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요. 
// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를 
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.

const age = parseInt(prompt('나이를 말씀해주세요!'));

if (age >= 18){
  console.log('안녕하세요');
} else if(age >=10){
  console.log('반가워 꼬마야!');
} else{
  console.log('부럽다..!');
}


// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요. 

// 1. 성적이 90점 이상이면 "A", 
// 2. 80점 이상이면 "B", 
// 3. 70점 이상이면 
// 4. "C", 60점 이상이면 "D", 
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.


const score = parseInt(prompt('점수를 입력해주세요!'));

if(score > 100){
  alert('값이 너무 커요!');
} else{
  if (score >= 90){
    console.log('A');
  } else if(score >= 80){
    console.log('B');
  } else if(score >= 70){
    console.log('C');
  } else if(score >= 60){
    console.log('D');
  } else{
    console.log('강해져서 돌아와라');
  }
}
// 100점이상일 경우를 대비해서 코드 작성
// 예외의 경우를 생각할 줄 알아야 함

// if (score >= 90){
//   console.log('A');
// } else if(score >= 80){
//   console.log('B');
// } else if(score >= 70){
//   console.log('C');
// } else if(score >= 60){
//   console.log('D');
// } else{
//   console.log('강해져서 돌아와라');
// }






// console.log 하나하나 개념 뜯어보기
// console : window 안의 객체
// window도 객체
// .log : 함수 / 메서드





// 삼항연산자 (Conditional ternary operator)
// 조건식 ? 조건식이 참일 때 실행될 코드 : 조건식이 거짓일 때 실행될 코드

//이처럼 삼항연산자는 코드의 실행도 해주고 값으로 사용할 수 있다는 점에서 if문과 다릅니다.
// 즉, if 문은 특정 코드 구문을 실행하는 문(Statement)이라면, 삼항연산자는 값으로 판단되는 표현식(Expression) 입니다.
// 식 : 문법 그 자체
// 표현식 : 값으로 표현
// 문과 표현식의 차이


// 식(statement)과 표현식의 차이
100 === true ? 100 : 200
//200
// 앞에도 조건문으로 인식하기 때문에
100 === (true ? 100 : 200)
//100
// ()로 묶어줘야함 ()는 표현식이고, 그 자체가 값임. 100의 값을 지니고 있음

//////////----Haileyham 추가 공부----//////////
// 문(statement)와 표현식(expression)의 차이
// - if 조건문 : 주어진 조건식의 평과 결과에 따라 블록문의 실행.
// > 여기서 조건식은 불리언 값으로 평가될 수 있는 표현식.

// - 삼항 조건 연산자 : 값으로 평가되는 표현식 만들옹. 이는 값처럼 사용할 수 있기 때문에 변수에 할당할 수 있음
// > if...else문은 표현식이 아닌 문이기에 변수에 할당할 수 없음.
// 타입변환 p.108
// Truthy, Falsy 불리언 타입으로 변환 p.113 
// - if 문이나 for 문과 같은 제어문 또는 삼항 조건 연산자의 조건식은 불리언 값, 즉 논리적 참/거짓으로 평가 되어야 하는 표현식. 자바스크립트 엔진은 조건식의 평가 결과를 불리언 타입으로 암묵적 타입 변환함.
// - 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(참으로 평가되는 값) 또는 Falsy 값(거짓으로 평가되는 값)으로 구분.
// - 제어문의 조건식과 같이 불리언 값으로 평가되어야 할 문맥에서 Truthy값은 true로, Falsy 값은 false로 암묵적 타입 변환.
// - false로 평가되는 Falsy 값 : false / undefined / null / 0,-0 / NaN /''
// - Falsy 값 외의 모든 값은 모두 true로 평가되는 Truthy 값.

/////\\\\\----Haileyham 추가 공부----\\\\\/////



const score2 = parseInt(prompt('점수를 입력해주세요!'));

let grade = score2 > 100 ? alert('숫자가 너무 커요!') : 
(score2 >= 90) 
? 'A' : (score2 >= 80) 
? 'B' : (score2 >= 70) 
? 'C': (score2 >= 60) 
? 'D' : '강해져서 돌아와라';
console.log(grade);


