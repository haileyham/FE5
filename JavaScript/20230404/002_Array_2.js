const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
  return el % 2 === 0
})

// arr.filter(function(el){
//   return el % 2 === 1
// })

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
  return el % 2 !== 1
})

//el


function solution(n) {
  return Array(n)
      .fill() 
      .map((_, i) => i + 1) 
      .filter((v) => v % 2 === 0)
      .reduce((a, c) => a + c, 0);
}

// .여러개 찍히는 것 : 메서드체이닝
// _ : 원래는 item인데 의미없는 값으로 두고싶을때 _ 사용(i만 사용하기 위해)
// n 개의 array 생성 // Array(3); 넣으면 (3)[1,2,3] 생성됨
// filter : v % 2 가 0인 것만 출력
// 



//모음제거
Array.from('hello world').filter(v => !["a","e","i","o","u"].includes(v))
//includes() : 메서드의 매개변수에 인자로 전달되는 문자열이 대상 문자열에 포함되어 있으면 true, 아니면 false를 반환
//includes전에 ! 썼기 때문에 모음이 아닌 것들 추출



//MDN 공식문서 항상 확인하기(영문으로)

//reduce // 이거 그냥 통으로 외우기
const arr1 = [1, 2, 3, 4, 5, 6]
arr1.reduce((a, c) => a + c, 0)

// const arr1 = []
// arr1.reduce((a, c) => a + c)

// const arr1 = [1]
// arr1.reduce((a, c) => a + c)

// //0을 항상 넣어 주세요
// const arr1 = [1]
// arr1.reduce((a, c) => a + c, 0)




// includes
const arr4 = ['hello', 'world', 'hojun']
arr1.includes('world')

const arr5 = ['hello', 'world', 'hojun']
arr1.includes('leehojun')

const arr6 = ['hello', 'world', 'hojun']
arr1.includes('jun')


// join
const arr7 = ['hello', 'world', 'hojun']
arr1.join('!')

const arr8 = ['010', '5044', '2903']
arr2.join('-')

const arr9 = [010, 5044, 2903]
arr3.join('-') // 이렇게 하시면 안됩니다.

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.