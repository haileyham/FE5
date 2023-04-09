for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//arr.length; 는 arr의 길이만큼 순회한다는건데 
// [1,2,3,4,5]의 경우 5개임.
// 인덱스는 0-4번째이고.
// 5개의 길이가 되기전까지 순회니까 0-4번째 순회.






// airbnb 컨벤션에 권장
// IE에서도 사용 가능
let arr1 = [10, 20, 30, 40, 50]
let obj1 = {'one': 10, 'two': 20}
for (const i in arr1) {
  console.log(arr1[i]) // element 요소 가져옴
}

for (const i in obj1) {
  console.log(obj1[i]) // value 가져옴
}

for (const i in 'hello world') {
  console.log(i) //index
}

let s2 = 0
for (const i in '.'.repeat(101)) {
  s2 += parseInt(i)
}
console.log(s2)
//1부터 100까지의 합 50×101=5050
//1 + 100 = 101
// 2 + 99 = 101
// 3 + 98 = 101
// 50 + 51 = 101
// 그러므로
// 101 × 50개 = 5050


// for in
// hello world 의 각각의 index만 가져옴
// .을 10번 repeat했는데 거기의 index만 가져옴
// i는 문자열로 나옴

// for..in 문은 임의의 순서로 객체의 속성들에 대해 반복
// for...in반복문은 정수가 아닌 이름을 가진 속성, 상속된 모든 열거 가능한 속성들을 반환


//for/in문
// for...in 문은 해당 객체의 몯ㄴ 열거할 수 있는 프로퍼티(enumerable properties)를 순회할 수 있도록 함. (열거할 수 있는 프로퍼티란 내부적으로 enumerbale 플래그가 true로 설정된 프로퍼티를 의미)

//for (변수 in 객체){
//   객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
// }




//for/of문
//for...of 문은 반복할 수 있는 객체(iterable objects)를 순회할 수 있도록 해주는 반복문. JS에서 반복할 수 있는 객체는 Array, Map, Set, arguments 객체 등이 있음. 이 반복문은 루프마다 객체의 열거할 수 있는 프로퍼티의 값을 지정된 변수에 대입.

//for (변수 of 객체){
//   객체의 모든 열거할 수 있는 프로퍼티의 개수만큼 반복적으로 실행하고자 하는 실행문;
// }





// airbnb 컨벤션에 권장
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50]
let obj2 = {'one': 10, 'two': 20}

for (const item of arr2) {
  console.log(item)
}

let z = 0
for (const item of arr2) {
  z += item
}
console.log(z)

for (const item of obj2) { // of 뒤에 iterable한 값이 나와야 합니다.
  console.log(item)
}

for (const item of 'hello world') { 
  console.log(item)
}

//for of는 index가 아니라 값이 들어옴
// 순회 가능한 객체가 들어와야 순회 가능
// of 뒤에 iterable한 값이 나와야함
// https://helloworldjavascript.net/pages/260-iteration.html




//why? for of와 for in문에서는 const가 가능한가요?
for (var i = 0; i < products.length; i++ ) {

  const product = products[i]}

  const price = product.price

// 첫번째(i = 0) 반복문이 돌고 두번째  반복문(i = 1)의 차례가 올때 product변수가 const로 선언되어서 값을 재할당 할시  오류가 발생할거라 생각하시지만 지금(첫번째 반복문이 방금 종료되고 두번째 반복문이 시작될 상황)이 프로그램은 product변수가 아예 없다고 판단합니다. 이유는 const로 선언된 변수는 {}로 구성되어 있는 문장 (함수, 반복문, 조건문 등등) 밖에서 사용할 수 없고 반복문이 한번 실행된 상태라면 두번쨰 반복문에서는 애초에 존재하지 않았던 상태가 되기 때문에 재할당을 해도 오류가 발생되지 않습니다. 따라서 계속해서 const로 선언된 변수를 사용할수 있게 되는거죠
//반복문을 보면 {}  코드 블록 내부에서 로직을 작성하고 있는데요. 요거는 반복이 될때마다 공간이 초기화되는 , 즉 이터레이션(반복)마다 격리되는 환경이라고 보면 됩니다. var, let으로 해도 무방합니다. 다만 변화하지 않는 변수라고 가정하면 보통 const를 적용해주는 게 관례이기에 그렇게 사용했습니다 :) 

// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
//결론 : 그냥 명세서에서 const 쓰라해서 const로 쓰는거...



// 아까 호준님께서 수업시간에 설명하셨던 ECMAScript와 TC39에 대해서 조금 더 찾아봤습니다!

// ECMAScript는 자바스크립트 언어의 국제 표준을 지정하는 기관이고, 현재 최신 버전은 ECMAScript 2022라고 하네요

// ECMAScript의 표준화는 TC39라는 기술 위원회에서 이루어지는데, 매년 열리는 회의를 통해서 결정한다고 합니다.

// 구글, 알리바바, 모질라, 넷플릭스, 애플 등의 다양한 기업들도 참여하며, 회의록은 깃허브에 공개되어 있습니다!

// https://github.com/tc39/notes/blob/main/meetings/2023-01/feb-02.md

// 이건 2023년 2월 회의록입니다!









// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
  console.log(s[i+1] - s[i]) 
}

// i는 index 위치
//s.length-1 해주는 이유는 범위 밖으로 벗어나기 때문에, 제대로 유지해주기위해서. 범위 밖으로 벗어나는이유는 길이 5개인데 index는 4번째까지만있고, 여기에 +1해버리면 5번째 index되버림. 근데 index는 5번째가없음
// 혹은 밑에 방법으로 해도됨 (같은코드임)



// for (const i = 0; i < s.length-1; i++)
for (let i = 0; i < s.length-1; i++) {
  console.log(s[i], s[i+1]) // 마지막 값을 확인해보세요.
  console.log(s[i+1] - s[i])
}

for (let i = 1; i < s.length; i++) {
  console.log(s[i-1], s[i]) // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i-1]) 
}


//위보다 깔끔한 코드가 나오지는 않음
let s1 = [1, 3, 4, 8, 13, 17, 20]
for(const i in s1){
  console.log(parseInt(i))
  console.log(s1[i], s1[parseInt(i)+1])
}





//문제(문제 암기)
//다음 수학 점수의 반평균을 구하세요
let 수학점수 = [10, 99, 89, 70]


//step1
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3])/수학점수.length
// = ((10,99,89,70)/4)
// 어디까지가 반복문을 사용할 수 있는 지, 쪼개서 살펴보기 **
// 위에서는 (수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) 반복 가능


//step2
let a = 0;
for(let i = 0; i < 수학점수.length; i++){
  a += 수학점수[i];
}
console.log(a / 수학점수.length)


// 문제
// 다음 user의 나이 평균을 구하세요.
let user2 = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  }
]


// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

let y = 0
for (let i = 0; i < user2.length; i++) {
  console.log(user2[i]['age'])
  y += user2[i]['age']
}
console.log(Math.floor(y / user2.length))


//////////풀이/////////////

//for of
let age1 = 0;
for(const value of user2){
  age1 += value.age //value['age']
}
console.log(age1 / user2.length)

//for
let age2 = 0;
for (let i = 0; i < user2.length; i++) {
  age2 += user2[i].age;
}
console.log(age2 / user2.length); 

//for in
let age3 = 0;
for (const i in user2) {
  age3 += user2[i].age
}
console.log(age3 / user2.length)


/////////////풀이 수업////////////////

//for
let w = 0
for (let i = 0; i < user.length; i++) {
  console.log(user[i]['age'])
  w += user[i]['age']
}
// console.log(Math.floor(s / user.length))
console.log((w / user.length).toFixed(2))

//of
let of = 0;
for(const i of user){
  of += user.age
}
console.log((of / user.length).toFixed(2))

//in
let inn = 0;
for(const i in user){
  inn += user[i]['age']
}
console.log((inn / user.length).toFixed(2))

///////////////////////



///////심화////////
///// 심화 수업/////
let user = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

let s3 = 0
for (const i of user) {
  console.log(i) //s3 list안에 object 하나
  console.log(i.age) // 마지막에 undefined
  console.log(s3) // 마지막에 102
  console.log('----------')
  s3 += i.age // 마지막에 undefined + 102
}
console.log((s3 / user.length).toFixed(2))



/////////

let s = 0
for (const i of user) {
  console.log(i)
  console.log(i.age) // 마지막에 undefined
  console.log(s) // 마지막에 102
  console.log('----------')
  s += i.age ?? 0
}
console.log((s / user.length).toFixed(2))


/////
s = 0
for (const i of user.map((v, i) => v.age)) {
  if (!!i) {
      s += i
  }
}
console.log((s / user.length).toFixed(2))

user.map((v, i) => v.age)
// (4) [31, 32, 39, undefined]
user.map((v, i) => v.age)
// 여기의 i가 헷갈리게 만들었다ㅠ a로 바꿔서 해보면 이해 편함.


/////
!true // false
!false // true
!!10 // true
!!1 // true
!!-1 // true
!!0 // false
!!'hello' // true
!!NaN // false
!!undefined // false
!!null // false

////외우세요////

user
  .map(v => v.age)
  .filter(v => !!v)
  .reduce((a, b) => a + b, 0)
  //성능면에서는 for가 더 좋음
  //위의 방법은 가독성면에서 좋음

  