let value1; //undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
// null : 비어있음을 명시적으로 나타냄

var value2 = null;
console.log(value2); //null



//참고삼아서만 알기

let 반점수 = [10, 20, 30, null, 40, 50]
let 반평균 = 0;

for (const i of 반점수){
  console.log(i)
  반평균 += i
}

반평균 / 5




let 반점수2 = [10, 20, 30, undefined, 40, 50]
let 반평균2 = 0;

for (const i of 반점수2){
  console.log(i)
  반평균2 += i
}

반평균2 // NaN