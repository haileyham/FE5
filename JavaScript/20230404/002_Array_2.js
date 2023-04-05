//filter()
//  filter() 메소드는 기존의 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 만듭니다.
//https://paullabworkspace.notion.site/5-Type2-a13e2d6da1b0423daf311896681c620f

//filter() 메소드는 배열에서 특정한 숫자나 날짜 등의 필요한 정보를 가진 원소만 추출할 때 매우 유용한 메소드입니다.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
  return el % 2 === 0
})
console.log(newArr);


// arr.filter(function(el){
//   return el % 2 === 1
// })

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.filter(function(el){
  return el % 2 !== 1
})

//el

//////////----Haileyham 추가 공부----//////////

//filter
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
//callback
// 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.
// 다음 세 가지 매개변수를 받습니다.
// element: 처리할 현재 요소.
// index Optional: 처리할 현재 요소의 인덱스.
// array Optional: filter를 호출한 배열.
// thisArg Optional: callback을 실행할 때 this로 사용하는 값.

//테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.

//filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성합니다. callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다; 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않습니다. callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않습니다.
//filter()는 호출되는 배열을 변화시키지(mutate) 않습니다.
//filter()에 의해 처리되는 요소의 범위는 callback의 첫 호출 전에 설정됩니다. filter() 호출 시작 이후로 배열에 추가된 요소는 callback에 의해 방문되지 않습니다. 배열의 기존 요소가 변경 또는 삭제된 경우, callback에 전달된 그 값은 filter()가 그 요소를 방문한 시점에 값이 됩니다; 삭제된 요소는 반영되지 않습니다.


//   arr.filter(callback(element[, index[, array]])[, thisArg])
//https://velog.io/@haleyjun/JavaScript-filter-%EC%82%AC%EC%9A%A9%EB%B2%95
//
let array = [3,5,11,0,9,'string'];
let result = array.filter((value) => value < 10)
console.log(result);

//output : array [3, 5, 0, 9]

//위의 코드를 보면, array라는 배열이 있다. 이 배열에서 10미만의 값만 추출하려고 한다.
// 이를 위해 우선 결과값들을 담아둘 result 변수를 만들었다. 그 후 기존 배열에 .filter()를 붙이고 괄호 안에는 필터조건이 되는 함수를 넣어 주었다.

// filter사용법
// filter 를 쓸 때, 조건식을 filter()의 괄호 안에 쓰는 방법이 있고 filter외부에 사용하는 방법이 있다.

let array2 = [3, 5, 10, 15, 20, 'hello']

//#1 solution
let result2 = array2.filter((value => value < 10))

//#2 solution
function lessThanTen(value){
  return value < 10
}
let result3 = array2.filter(lessThanTen)

// 함수를 filter 내에 주기
// 위 사진의 #1 solution을 보면, filter 메서드의 조건식을 괄호 안에 바로 작성해 주었다.
// 이 방법은 조건식이 간단할 경우 유용하며, 코드 라인을 줄일 수 있고 한 눈에 보기 편한 장점이 있다.

// 함수를 filter 외부에 사용
// 위 사진의 #2 solution 을 보면, filter 의 조건을 외부함수로 선언한 후 callback하고 있다.
// 이 방법은 filter 조건식이 복잡해질 수록 코드 관리에 유용할 것 같다.
/////\\\\\\----Haileyham 추가 공부----\\\\\//////




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


//fill
// arr.fill(value[, start[, end]])
//value
// 배열을 채울 값.

// start Optional
// 시작 인덱스, 기본 값은 0.

// end Optional
// 끝 인덱스, 기본 값은 this.length.

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]
// [2]~[4]번째까지 0으로 채우기

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]
// [1]번째부터 5로채우기

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]
// 6으로 채우기



//모음제거
Array.from('hello world').filter(v => !["a","e","i","o","u"].includes(v))
// (8) ['h', 'l', 'l', ' ', 'w', 'r', 'l', 'd'])
//includes() : 메서드의 매개변수에 인자로 전달되는 문자열이 대상 문자열에 포함되어 있으면 true, 아니면 false를 반환
//includes전에 ! 썼기 때문에 모음이 아닌 것들 추출


//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//filter()
//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
//  arr.filter(callback(element[, index[, array]])[, thisArg])
// callback 각 요소를 시험할 함수. true를 반환하면 요소를 유지하고, false를 반환하면 버립니다.
// 다음 세 가지 매개변수를 받습니다.
// element: 처리할 현재 요소.
// index Optional: 처리할 현재 요소의 인덱스.
// array Optional: filter를 호출한 배열.
// thisArg Optional : callback을 실행할 때 this로 사용하는 값.



//////////----Haileyham 추가 공부----//////////
//from()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from
//Array.from() 메서드는 유사 배열 객체(array-like object)나 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.
// 얕은 복사 : 바로 아래 단계의 값만 복사(나중에 추가공뷰)

// Array.from(arrayLike[, mapFn[, thisArg]])
// arrayLike: 배열로 변환하고자 하는유사 배열 객체나 반복 가능한 객체.
// mapFnOptional: 배열의 모든 요소에 대해 호출할 맵핑 함수.
// thisArgOptional: mapFn 실행 시에 this로 사용할 값.

// 다음과 같은 경우에 Array.from()으로새Array를 만들 수 있습니다.

// 유사 배열 객체 (length 속성과 인덱싱 된 요소를 가진 객체)
// 순회 가능한 객체 (en-US) (Map, Set 등객체의 요소를 얻을 수 있는 객체)
// Array.from()은 선택 매개변수인 mapFn를 가지는데, 배열(혹은 배열 서브클래스)의 각 요소를맵핑할 때 사용할 수 있습니다. 즉,Array.from(obj, mapFn, thisArg)는 중간에 다른 배열을 생성하지 않는다는 점을 제외하면Array.from(obj).map(mapFn, thisArg)와 같습니다. 이 특징은 typed arrays와 같은 특정 배열 서브클래스에서 중간 배열 값이 적절한 유형에 맞게 생략되기 때문에 특히 중요합니다.

// from() 메서드의 length 속성은 1입니다.

//String에서 배열 만들기
Array.from('foo');
// ["f", "o", "o"]

//Set에서 배열 만들기
const s = new Set(['foo', window]);
Array.from(s);
// ["foo", window]

//Map에서 배열 만들기
const m = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

//배열 형태를 가진 객체(arguments)에서 배열 만들기
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [1, 2, 3]

// Array.from과 화살표 함수 사용하기
// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

function createArray() {
  return Array.from({length: 5}, function(v, i) {
    return i;
  });
}


//Array.from() 의 첫 번째 인자는 배열로 만들 이터러블한 객체가 되며, 두 번째 인자는 생성한 배열의 모든 원소에 대해 수행할 맵핑 함수입니다. (Array.map() 이라고 생각하시면 됩니다.)
//한번 Array.from()과 반복문을 활용해 1부터 31까지의 수를 원소로 갖는 배열을 생성
// 맵핑 함수의 첫 번째 인자 언더스코어(_) 는 특별한 인자가 아니라,
// 불필요한 인자의 공간을 채우기 위한 용도입니다.

const arr3 = Array.from(Array(31), (_, index) => index + 1);
//arr3
//(31) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const bb = [];
for (let i = 1; i <= 31; i++) {
  bb.push(i);
}
//31
//만약 Array.from()을 사용하지 않는다면 아래처럼 고전적인(?) 반복문을 사용해야 할 텐데요, 취향에 따라 다르겠지만 저는 Array.from()을 통해 배열을 생성하는 방식이 더 깔끔해 보이네요! 


//https://merrily-code.tistory.com/158
//https://paperblock.tistory.com/73







//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
//includes()
//includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
//   arr.includes(valueToFind[, fromIndex])
// valueToFind: 탐색할 요소.> 참고: 문자나 문자열을 비교할 때, includes()는 대소문자를 구분합니다.
// fromIndex Optional: 이 배열에서 searchElement 검색을 시작할 위치입니다. 음의 값은 array.length + fromIndex의 인덱스를 asc로 검색합니다. 기본값은 0입니다.

[1, 2, 3].includes(2);     // true //2있니
[1, 2, 3].includes(4);     // false //4있니
[1, 2, 3].includes(3, 3);  // false //[3]번째에 3있니(2번째에있음)
[1, 2, 3].includes(3, -1); // true //[-1]번째에 3있니
[1, 2, NaN].includes(NaN); // true //NaN있니
/////\\\\\\----Haileyham 추가 공부----\\\\\//////



//MDN 공식문서 항상 확인하기(영문으로)

//reduce // 이거 그냥 통으로 외우기
const arr1 = [1, 2, 3, 4, 5, 6]
arr1.reduce((a, c) => a + c, 0)

arr1.reduce(function(a, c){return a + c})

// const arr1 = []
// arr1.reduce((a, c) => a + c)



// const arr1 = [1]
// arr1.reduce((a, c) => a + c)

// //0을 항상 넣어 주세요
// const arr1 = [1]
// arr1.reduce((a, c) => a + c, 0)


// reduce
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
const arr10 = [1, 2, 3, 4, 5]
arr10.reduce((a, c) => a + c, 0)
// reduce()는 reduce(콜백함수, 초기값)의 형태, 배열의 각 요소가 주어진 콜백함수를 거치게 된다.
// reduce는 배열의 각 요소에 대해 callback을 실행하며 단 1개의 출력 결과를만든다.
// 이 코드는 현재 배열 요소의 값을 누적시키면서 합계를 계산한다.
// `a`는 누적값(accumulator)을, `c`는 현재 배열 요소(current value)를 나타낸다.
// 0은 초기값(초기값이 없다면 배열의 첫번째 요소인 0번 인덱스), a는 accumulator(콜백의 반환 값을 누적), c는 currentValue(현재 처리할 요소)
// 따라서, 최종적으로 `reduce()` 메소드는 배열의 모든 요소를 더한 값을 반환합니다. 해당 코드에서는 1 + 2 + 3 + 4 + 5 = 15가 반환된다.


//1) 배열 원소들의 합 구하기
// 딕셔너리의 quntity(수량)
let total = [{quntity: 1}, {quntity: 2}, {quntity: 1}].reduce(
  (acc, cur) => acc + cur.quntity
  , 0
)
console.log(total) // 결과값: 4

//2) 배열 원소들 중 최대값 구하기
//음수무한대부터 초기화하고 가장 큰 값을 구합니다.
// 참고로 Math.max( ) 함수를 이용해서 배열 원소들의 최대 값을 바로 구할 수 있습니다. (최하단 소스코드 참고)

// 최대값을 구한다
let max = [1, 2, 3, 4, 5].reduce(
  ( max, cur ) => Math.max( max, cur ), 
  -Infinity
);
console.log(max) // 결과값: 5

// 3) 배열안에 배열이 있는 원소들을 펼치기
//배열안에 배열이 있는 경우 순회하면서 concat으로 붙여서 펼처진 배열을 구할 수 있습니다.

// 여러 배열을 펼친다
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( acc, cur ) => acc.concat(cur),
  []
)
// [0, 1, 2, 3, 4, 5]

//concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다. 
// 기존배열을 변경하지 않습니다.
// 추가된 새로운 배열을 반환합니다.



// includes
const arr4 = ['hello', 'world', 'hojun']
arr4.includes('world')

const arr5 = ['hello', 'world', 'hojun']
arr5.includes('leehojun')

const arr6 = ['hello', 'world', 'hojun']
arr6.includes('jun')


// join
const arr7 = ['hello', 'world', 'hojun']
arr7.join('!')

const arr8 = ['010', '5044', '2903']
arr8.join('-')

const arr9 = [010, 5044, 2903]
arr9.join('-') // 이렇게 하시면 안됩니다.

// 0b100 // b는 바이너리의 첫글자입니다.
// 0o100 // o는 옥타의 첫글자입니다.
// 0x100 // x는 헥사를 표현합니다.