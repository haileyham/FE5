//함수의 일반적인 형태
//함수 선언문
//파선아실
function one(a,b){  //1
  let z = a + b  //2
  return z ** 2  //3
}

// a, b는 parameter 파라미터(매개변수)

console.log (one(7,3)) // 100
console.log (one(7,3)) //

// 7,3은 argument 아규먼트(인수, 인자)




//화살표 함수
const two = (a, b) => (a + b)**2  //1번과 3번만 존재
console.log(two(7,3))
console.log(two(7,3))


//이름 없이 선언하는 함수
//함수 표현식
const three = function(a,b){  //1
  let z = a + b  //2
  return z ** 2  //3
}
console.log(three(7,3))
console.log(three(7,3))


//콜백함수
//콜백함수 : 함수를 아규먼트로 전달해서, 언젠가 사용해줄게
function four(a, b, c){
  let z = c(a, b) + c(a, b) // 100 + 100 
  return z * 2 // 400
}
//one이 a+b에 return z ** 2였음
//one(7,3) 넣은 것

four(7, 3, one)
// 400
// one 함수가 (아규먼트)인자값으로 들어감



//아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없음.
//외부에서 직접 값을 가져오는 것을 지양하기.
//인자 값을 넣어서 예측 가능하게 하기.
function four(a, b, c){
  let z = one(a, b) + one(a, b)
  return z * 2 // 400
}

four(7, 3, one)



// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics
// return 과 console.log를 헷갈려 함.


function hello(para){
  console.log(para)
  console.log('hello')
  return 100
}

console.log(hello(10))
//10 / hello / 100 출력됨
//return 은 hello(10)이 있던 자리에 return 100 들어감


console.log('hello')
//hello 출력
//undefined 나오는 이유는 return 값이 없어서.



//함수, 메서드(클래스 안에서 사용되는 함수)
// .을 찍어서 접근 할 수 있는 함수 >>> 메서드
// 함수를 호출할 수 있는 이름은 결국 변수임.
let x = console.log
x('hello')
//hello 출력



// 2번(아래 3개는 같은 코드)
function hello1(){
  console.log('hello');
}

function hello2(){
  console.log('hello');
  return
}

function hello3(){
  console.log('hello');
  return undefined
}

let a = hello1()
let b = hello2()
let c = hello3()



// return
function hello4() {
  console.log('hello')
  console.log('hello')
  console.log('hello')
  return
  console.log('hello')
  console.log('hello')
  console.log('hello')
}

hello4()

function hello5() {
  if (true) {
      if (false) { // 이 값을 바꿔보세요.
          if (true) {
              return
          }
      }
  }
  console.log('hello')
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료되는 것은 아닙니다.
const x1 = [10, 20, 30, 40];
x1.forEach(function (el) {
  console.log(el)
  return
  console.log('world')
});


/////////////////////

function 함수1(a, b, c){
  return a + b + c
}

함수1(10, 20, 30, 40) //error가 발생하지 않음
함수1(10, 20) //NaN뜸 / error가 발생하지 않음(빨간색 떠야 error임)

function 함수1(a=10, b=20, c=30){
  return a + b + c
}
함수1(1,1) //32출력


function 함수1(a=10, b=20, c=30){
  return a + b + c
}
//a와 c에 들어갈 것이라고 생각했지만, a와 b에 들어감.
함수1(a=1, c=1)


//아래와 같은 식별 이슈가 있을 경우 object로 넘김
// roro기법
function runPython(user, time, code, lv){
}
//사이에 1000줄 있으면 알 수 있을까? > nope
runPython('leehojun', 100, 'function...',3)



// 식별이 보다 쉬워짐
function runPython({user, time, code, lv}){

}
runPython(
  {
    user:'leehojun',
    time:100,
    code:'funtion...',
    lv:3
  }
)

//기본값 설정
function runPython({
  user='',
  time=0,
  code='',
  lv=0
})



///////////////////////////

///화살표함수의 다양한 예제 (****)

// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// let 함수2 = x => {
//   return x  10
// }

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);


//즉시 실행 함수
(function(){
  console.log('이 함수는 만들어지자마자 바로 실행됨!')
})();

function 함수(){
}

함수()