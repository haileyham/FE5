const arr = [10, 20, 30]
arr[0] = 100 //index 0에 10>100변화, const는 값의 변화가 안된다고 하지 않았나? // 변경 가능, mutable
console.log(arr) //[100, 20, 30]




//////////----Haileyham 추가 공부----//////////
//immutable value vs. mutable value
// https://poiemaweb.com/js-immutability
//Javascript의 원시 타입(primitive data type)은 변경 불가능한 값(immutable value) / (변경이 불가능하다는 뜻은 메모리 영역에서의 변경이 불가능하다는 뜻이다. 재할당은 가능하다)
//원시 타입 이외의 모든 값은 객체(Object) 타입이며 객체 타입은 변경 가능한 값(mutable value)이다. 즉, 객체는 새로운 값을 다시 만들 필요없이 직접 변경이 가능하다는 것이다.
/////\\\\\\----Haileyham 추가 공부----\\\\\//////



// 문자열(String)
const s = 'hello world'
console.log(s[0])
s[0] = 'i' // 불변, immutable



//////////----Haileyham 추가 공부----//////////
//Array
var car = ['소나타', 50000]
console.log(car[1]); //출력
car[1] = 60000; // car[1] 값 변경

//Object
var car2 = {name:'소나타', price:50000}
console.log(car2.name); //출력
console.log(car2['name']); //출력
car2.name = '싱싱카'; //car2의 name 값 변경
car2['name'] = '싱싱카'; //car2의 name 값 변경
/////\\\\\\----Haileyham 추가 공부----\\\\\//////



const arr = 100
const arr = [10, 20, 30]
console.log(arr)
console.dir(arr) // 프러퍼티와 메서드를 볼 수 있음


//////////----Haileyham 추가 공부----//////////
// console.log 와 console.dir 의 차이
// https://velog.io/@jeongda/console.log-%EC%99%80-console.dir-%EC%9D%98-%EC%B0%A8%EC%9D%B4
// console.log()	HTML과 같은 형태의 트리 구조로 출력	/ 태그 내용 출력	/ 코드 출력
// console.dir()	JSON과 같은 형태의 트리 구조 출력	/ 태그 속성 출력	/속성 출력
/////\\\\\\----Haileyham 추가 공부----\\\\\//////




// arr.1 //error
// 프로퍼티에 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자임. 문자로 입력된 값은 .을 찍어서 호출 가능함
arr[1] // 2
arr.length // 3
arr['length'] //3



//두개가 같은 얘기(값을 변화)
arr.length = 10 // 10 // arr에 length 10 부여
arr // (10)[100, 20, 30, empty x 7]


//////////----Haileyham 추가 공부----//////////
//여기서 empty 값과 undefined
// https://joooing.tistory.com/entry/undefined-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B8%B0-1-undefined-empty-%F0%9F%A7%90
// Javascript에서 undefined 값이 반환되는 경우는 크게 두 가지
//1. 사용자가 '명시적'으로 지정하는 경우
// 말 그대로 사용자가 '여기에는 값을 넣지 않을거야'하고 undefined를 통해 알리는 경우이다.
// 2. Javascript 엔진이 반환하는 경우
// Javascript 엔진은 사용자가 어떤 값을 지정할 거라고 예상했는데 하지 않은 경우에 undefined를 반환한다. 어떤 경우에 이런 일이 생기는 지는 이어서 예제와 함께 알아보자. 
//2-1. 값이 할당되지 않은 변수에 접근할 때
// 2-2. 존재하지 않는 속성(property)에 접근할 때
// 2-3. 함수에 return문이 없을 때, 호출되지 않는 함수를 실행할 때

// empty 
// arr1이라는 빈 배열을 만들고 크기만 5로 지정해주었다. 이 상태로 arr1의 모습을 출력했더니 [empty x 5]라고 나온걸 볼 수 있다. empty는 아무 값도 없다는 뜻이다. undefined조차 할당되지 않은, 정말 말 그대로 '비어 있는' 요소를 말한다.
// undefined를 직접 배열에 넣어줘 보면 empty와는 다르게 동작하는 것을 확인할 수 있다. undefined 3개가 들어있는 배열을 할당하면, 그대로 undefined들이 할당된 채로 출력된다.

// 배열도 객체 중 하나. 객체의 경우 값이 존재하지 않는 속성 = 존재하지 않는 속성이라고 할 수 있는데, 이렇게 존재하지 않는 속성에는 당연히 접근도 할 수 없다.

// 배열의 속성은 바로 index라고 할 수 있는데, 여기에 방금 두 가지 사실을 조합해서 생각해보면 배열의 경우에도 값이 존재하지 않는 index = 존재하지 않는 index라고 할 수 있고, 이런 존재하지 않는 index에는 접근할 수 없다는 결론이 나온다.

//empty ⇒ 비어 있는 상태 ⇒ 값이 존재하지 않음 ⇒ 속성에 접근 불가!

// undefined vs empty
// 지금까지의 이야기가 중요한 이유는, 속성에 접근이 불가능하면 순회 대상에서 제외되기 때문이다. 대표적인 순회와 관련된 배열 메서드에는 forEach, map, filter, reduce.. 등이 있었다. (메서드 사용법) 이런 배열 메서드들에 undefined와 empty를 적용해보면 둘의 차이점이 드러난다.


//그럼 먼저 undefined를 할당한 배열에 순회 메서드들이 적용되었을 때부터 살펴보자. 비록 연산을 하면 NaN이 나오기도 하지만, 모든 경우에 인덱스에 접근할 수 있는 것을 볼 수 있다. 다시말해 할당된 undefined는 순회 대상에 포함되는 것이다.

let arr1 = [undefined, 10];

arr1.forEach(function (val, i) {console.log(val, i);});
// undefined 0
// 10 1

arr1.filter(function (val) {return !val;});
// [undefined]

// <filter>
// arr.filter(callback(element[, index[, array]])[, thisArg])
// element : 처리할 현재 요소.
// index Optional :처리할 현재 요소의 인덱스.
// array Optional :filter를 호출한 배열.
// thisArg Optional : callback을 실행할 때 this로 사용하는 값.
// 반환 값 : 테스트를 통과한 요소로 이루어진 새로운 배열. 어떤 요소도 테스트를 통과하지 못했으면 빈 배열을 반환합니다.
// filter()는 배열 내 각 요소에 대해 한 번 제공된 callback 함수를 호출해, callback이 true로 강제하는 값을 반환하는 모든 값이 있는 새로운 배열을 생성합니다. ** callback은 할당된 값이 있는 배열의 인덱스에 대해서만 호출됩니다; 삭제됐거나 값이 할당된 적이 없는 인덱스에 대해서는 호출되지 않습니다. ** callback 테스트를 통과하지 못한 배열 요소는 그냥 건너뛰며 새로운 배열에 포함되지 않습니다.
// callback은 다음 세 인수와 함께 호출됩니다:
// 요소값
// 요소 인덱스
// 순회(traverse)되는 배열 객체
// filter()는 호출되는 배열을 변화시키지(mutate) 않습니다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

arr1.map(function (val, i) {return val + i;});
// [NaN, 11]
// undefined + 1 이기 때문에 NaN 뜸

arr1.reduce(function (acc, cur) {return acc + cur;}, '');
// undefined10
// reduce()뒤에서 살펴보기


//이제 empty에 순회 메서드를 적용해보며 undefined와는 어떻게 다른지 살펴보자. 아래의 예제들을 쭉 보면 empty부분은 연산에 포함되지 않을 뿐 아니라, 인덱스 자체에 접근하지 못하는 것을 볼 수 있다. empty는 순회대상에서 제외되기 때문에 메서드도 무시하고 지나가버리게 되는 것이다.

let arr2 = [];
arr2[1] = 10;
console.log(arr2);    
// [empty, 10]

arr2.forEach(function (val, i) {console.log(val, i);});
// 1 10  (0번째 인덱스 제외)

arr2.filter(function (val) {return !val;});
// []

arr2.map(function (val, i) {return val + i;});
// [empty, 2]

arr2.reduce(function (acc, cur) {return acc + cur;}, '');
// 10

/////\\\\\\----Haileyham 추가 공부----\\\\\//////




arr[0] = 100


// 프로퍼티를 추가하는 것도 가능합니다.
arr['leehojun'] = 100
// (10) [100, 20, 30, empty × 7, leehojun: 100]
arr.hojun = 1000
// (10) [100, 20, 30, empty × 7, leehojun: 100, hojun: 1000]

//property는 이름(string 이나 symbol)과 값(원시함수(primitive), 메서드(method) 또는 객체 참조(object reference))을 가지고 있습니다.
//프로퍼티는 object를 위해서 데이터를 저장한다. 
//메소드는 object가 요청 받을 수 있는 액션이다. 


// 배열의 특징
//배열(Array)은 데이터를 순서대로 저장하는 객체입니다. 하나의 데이터를 표현하는 원시타입과 달리 여러개의 데이터를 한 변수에 저장할 수 있기 때문에 데이터를 추가하거나, 제거, 정렬, 검색 등 다양한 작업을 수행할 수 있도록 여러가시 메소드를 제공합니다.
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 1. 배열은 순서가 존재. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 함. 배열 안에 값을 원소(elements)라고 함.

const arr = [10, 20, 30]
arr[0] = 100


// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있음.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

arr[0]
// [1, 2, 3]
arr[1]
// [4, 5, 6]
arr[2]
// [7, 8, 9]
arr[1][2]
// 6 // [1]=2번째 index의 [2]=3번째 값


//3. 배열은 가지고 있는 원소의 길이를 나타내는 length 프로퍼티를 가지고 있습니다. (문자열에서도 사용했었죠?)
let myArray3= [1, 2, 3, 4, 5];
console.log(myArray3.length); // 5


// 4. 배열은 배열 안에 다른 배열을 포함할 수 있습니다. 이러한 배열을 다차원 배열이라고 합니다.

const arr2 = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(arr[0][0]);
console.log(arr[2][1]);



// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10 // 스칼라
const b = [10, 20, 30] // 벡터
const c = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] // 메트릭스
const d = [
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]],
    [[1, 2], [1, 2], [1, 2]]
] // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다. 



// 💡 배열의 요소 추가

// 배열의 메소드 // push()와 pop() //shift()와 unshift()
const arr = [1, 2, 3];
arr.push(4) //4
// arr > (4) [1, 2, 3, 4]
arr.push(2) //2
// arr > (5) [1, 2, 3, 4, 2]

// push
const arr = [1, 2, 3];
arr.push(4)
//(4) [1, 2, 3, 4]




// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`          
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

const arr = [1, 2, 3, 4, 5]
arr.pop() 
// 1. 마지막에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr
// (4) [1, 2, 3, 4]
arr.pop() 
//4
arr
// (3) [1, 2, 3]
arr.pop() 
//3
arr
//(2) [1, 2]


// pop
const arr = [1, 2, 3, 4, 5]
let lastValue = arr.pop()
arr
//(4) [1, 2, 3, 4]

// unshift
// 배열의 앞에 값을 추가
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고 
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2); 

let firstValue = myArray2.shift();
firstValue
// 사과



// 문제(*****)
// ||답변||
// pop, shift, unshift, push에 대해 설명
/*
||
```
pop():배열의 맨 뒤에서 데이터를 추출
shift():배열의 맨 앞에서 데이터를 추출
unshift():배열의 맨 앞에 데이터를 추가
push():배열의 맨 뒤에 데이터를 추가


pop - 뒤에서 값을 꺼내고 반환
shift - 앞에서 값을 꺼내고 반환
unshift - 배열의 앞에 값을 추가한다
push - 배열의 뒤에 값을 추가한다. 
```
||
*/




// 메서드(method)란? 때로는 메소드라고 불리기도 하는 메서드는 어떤 객체가 가지고 있는 어떤 동작을 말한다. 언어마다 조금씩 의미가 다르긴 하지만 자바스크립트에서는 일반적으로 객체 안에 프로퍼티로 정의된 함수를 메서드라고 부른다.

//arr.splice(start, deleteCount, items)
//splice() 메소드는 배열의 요소를 추가, 제거 또는 교체합니다.
// 메소드는 3개의 전달인자를 받습니다. 첫 번째  인자는 삭제나 추가를 시작할 인덱스입니다. 두 번째 인자는 삭제할 요소의 개수입니다. 세 번째 인자부터는 추가할 요소들입니다. 추가할 요소가 없다면 생략할 수 있으며 이때는 요소를 삭제만 하게됩니다.

const arr = [1, 2, 3];
arr.splice(1, 0, 4); //arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다
console.log(arr); // [1, 4, 2, 3]
arr.splice(2, 1, 5);
console.log(arr); // [1, 4, 5, 3]

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10,20,30(전개해서) 넣겠다.
//(6) [1, 10, 20, 30, 2, 3]

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10,20,30을 넣겠다.
// (6) [1, 10, 20, 30, 2, 3]



// 예제풀어보기
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3]
//만들고 싶은 값은 == [10, 1, 2, 3, 20, 30, 1, 2, 3, 40, 50]
arr.splice(1,0,...x)
arr.splice(6,0,...x) 


const arr = [10, 20, 30, 40, 50];
const x2 = [1, 2, 3]
//만들고 싶은 값은 == [10, 1, 2, 3, 20, 30, 1, 2, 3, 50]
arr.splice(1,0,...x2)
//[]
//(8) [10, 1, 2, 3, 20, 30, 40, 50]
arr.splice(6,1,...x2) // [6]삭제하고, x2넣기
//[40]
arr
// (10) [10, 1, 2, 3, 20, 30, 1, 2, 3, 50]


const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다
console.log(arr); 
// (5) [10, 20, 5, 40, 50]
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.


const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); 
//(2) [30, 40]
// 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50]
arr.splice(1)
//(4) [20, 30, 40, 50]
// 1번부터 삭제(1번 포함)
arr
//[10]

const arr = [10, 20, 30, 40, 50]
arr.splice(2)
//(3) [30, 40, 50]
// 2번부터 삭제(2번 포함)
arr
//(2) [10, 20]


// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);
// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
// 2번 인덱스에서 2개 요소 제거

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
// -2번 인덱스에서 2개 요소 제거
// 이건 그냥 배열 마지막 요소에 관하여 참고 https://all-dev-kang.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%B0%EC%97%B4%EC%9D%98-%EB%A7%88%EC%A7%80%EB%A7%89-%EC%9A%94%EC%86%8C%EB%A5%BC-%EA%B0%80%EC%A0%B8%EC%98%A4%EB%8A%94-%EB%B0%A9%EB%B2%95%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC




//arr.slice(start, end)
// slice() 메소드는 배열에서 요소들을 추출하여 새로운 배열로 반환하는 메서드입니다. / 원본 데이터 그대로
// 메소드는 2개의 전달인자를 받습니다. 첫 번째 인자는 추출을 시작할 인덱스입니다. 두 번째 인자는 추출을 끝낼 인덱스입니다. 추출할 요소는 첫 번째 인자에서 시작하여, 두 번째 인자에서 바로 이전 요소까지입니다. 두 번째 인자는 생략 가능하며, 생략하거나 배열의 길이보다 큰 값을 전달하면 배열의 끝까지 추출합니다.
const myArray = ["apple", "banana", "cherry", "durian", "eldeerberry"]
console.log(myArray.slice(1,4)) 
//(3) ['banana', 'cherry', 'durian']
// 1번째부터 4번째이전까지 (1~3)
console.log(myArray) 
//(5) ['apple', 'banana', 'cherry', 'durian', 'eldeerberry']
//***원본값 그대로 존재***//
myArray.slice(1) 
//(4) ['banana', 'cherry', 'durian', 'eldeerberry']
myArray.slice(0,100) 
//(5) ['apple', 'banana', 'cherry', 'durian', 'eldeerberry']
console.log(myArray.slice());  
//(5) ['apple', 'banana', 'cherry', 'durian', 'eldeerberry']




// arr.forEach() 
// 함수(callbackfn):(value:number, index:number, array:number[])
// forEach() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행합니다. 이 때, 함수는 인자로 배열 요소, 인덱스를 받습니다. forEach() 메소드는 배열의 요소를 순환하면서 해당 요소를 함수로 전달하고, 이 함수가 각 요소에 대해 실행
//forEach() 메소드는 배열의 각 요소에 대해 특정 작업을 수행할 때 사용됩니다. 예를 들어, 배열의 각 요소를 이용하여 다른 배열을 만들거나, 요소를 삭제하거나, 값을 변경하는 등의 작업을 수행할 수 있습니다.

const arr = [10, 20, 30, 40, 50]

arr.forEach(function(item,index){
  console.log(item)
  console.log(index,item) //순서상관없음
  console.log('hello')
})
//이렇게 되면 10 / 0 10 / 'hello'  ... 이런식으로 출력됨!

arr.forEach(function(item,index,arr){
  console.log(index,item,arr) //순서상관없음
  console.log('hello')
})
//0 10 (5) [10, 20, 30, 40, 50] / hello  이런식으로 출력!



//실무에서 사용하는 코드는 아님
const arr = Array(100).fill(0)
const arr2 = []

// arr.forEach(function(item, index){
//   arr2.push(index)
// })

// arr에 하나씩 순회를 하는데 arr의 index를  
// arr2에다가 push해주고있음.



// 같은 코드1 (이름이 없는 함수 사용)
// arr.forEach(function(item, index){
//   arr2.push(index+1)
// })

// 같은 코드2 (화살표 함수 사용)
// arr.forEach((item, index) => {
//   arr2.push(index+1)
// })

// 같은 코드3 (중괄호를 생략한 화살표 함수 사용) (주로 이렇게 실무에서 사용함)
arr.forEach((item,index) => arr.push(index+1))

// 같은 코드4 (이렇게는 사용하지 않음. 이름이 있는 함수 사용)
function hojun(item,index){
  arr2.push(index+1)
}

arr.forEach(hojun)


// 어제 진행했었던 코드
fetch('http://test.api.weniv.co.kr/mall')
    .then(data => data.json())
    .then(data => {
        data.forEach(item => {
            console.log(item.thumbnailImg)
            console.log(item.productName)
            console.log(item.price)
        })
    })

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];

const newAvengers = [];
avengers.forEach(function (item) {
    newAvengers.push('💖' + item + '💖');
});
console.log(newAvengers)




// map (면접 질문에서도 많이 나옴. 데이터를 뽑으려고 많이 사용)
// map은 forEach와 다르게 새로운 배열을 생성

const arr = [1, 2, 3];
const newArr = arr.map(function(item, index) {
  return item * index;
});

console.log(newArr);

// map() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고, 그 결과를 새로운 배열로 반환합니다.
// map() 메소드의 첫 번째 인자로는 배열의 각 요소를 처리할 함수를, 두번째는 요소의 인덱스를 전달합니다. 이 함수는 배열의 각 요소를 매개변수로 받아 처리한 후, 그 결과를 반환합니다.
// forEach()와 map()은 별로 다르지 않아보여요!
// 맞습니다. forEach()와 map()은 둘 다 배열의 각 요소에 대해 주어진 함수를 실행합니다. 하지만 forEach 메소드의 경우 반환값이 없지만 map 메소드는 새로운 배열을 반환한다는 차이가 있습니다.
// 이러한 차이점은 배열의 원소를 변경하여 새로운 배열을 반환하고자 할때 더 잘 드러납니다.

const arr = [1, 2, 3]
arr.map(function(item, index){
  return item ** 2
})


arr.map(function(x){
  return x ** 2
})

arr.map(x => x **2)

const arr = Array(100).fill(0)

//같은 코드 1
const arr = Array(100).fill(0)
arr.map((v,i) => i)

//같은 코드 2
const arr = Array(100).fill(0)
arr.map(function(v,i){
  return i
})
// forEach는 배열하는 행위
// map은 새로운 배열 적시해주는 것이라 return필요


//같은 코드 3
const arr = Array(100).fill(0)
function hojun(v, i){
  return i
}
arr.map(hojun)

//같은 코드 4
const arr = Array(100).fill(0)
arr.map((v, i) => {
  return i
})


//////////----Haileyham 추가 공부----//////////
// forEach() map() 차이
// https://velog.io/@limes/Javascript-Array-Method-for-each-%EC%99%80-map%ED%95%A8%EC%88%98%EC%9D%98-%EC%B0%A8%EC%9D%B4
// forEach()메소드
// - 배열의 각 요소에 대해 주어진 함수를 실행한다. (함수는 인자로 배열 요소, 인덱스를 받음)
// - 배열의 요소를 순환하면서 해당요소를 함수로 전달하고, 이 함수가 각 요소 실행된다.
// map() 메소드 
// - 배열의 각 요소에 대해 주어진 함수 실행하고, 그 결과 새로운 배열로 반환한다.

// 공통점 
// - 배열의 각 요소에 대해 주어진 함수를 실행한다.

// 차이점
// - forEach()메소드의 경우 반환값이 없지만, map()메소드는 새로운배열을 반환한다.
// -> 배열의 원소 변경 후 새로운배열 반환할 때 차이점이 두각된다.
// - forEach()메소드는 콜백함수로 현재 Array를 변환하며, map()메소드는 새로운 Array를 리턴한다.
// map() 메소드는 Array안에 요소들을 호출한다. forEach()와 다른점은 값을 사용하고 Array와 동일한 사이즈의 새로운 Array을 반환한다.
// map()은 메모리를 할당하고 리턴 값을 저장하지만, forEach()는 리턴 값을 버리고 항상 undefined를 리턴한다.

// <map() 메소드를 이용하는게 더 좋은 경우>
// -  배열의 데이터를 변경하고자 하는 경우
// -> 더 빠르게 처리할 수 있으며, 새로운 배열을 반환하기 때문이다.
// - 함수 안의 결과값을 계산하지 않고, 값을 배열로 받는 경우 
// map()은 데이터를 변경할 때 선호될 수 있다. 더 빠를 뿐 아니라 새로운 배열을 반환하며, 이는 다른 메소들과 함께 사용하는 것 같이 멋진 일을 할 수 있다는 것을 의미한다.(map(), filter(), reduce() 등)
/////\\\\\\----Haileyham 추가 공부----\\\\\//////




// 실무 팁 (****)
let tip1 = [1, 2, 3, 4, 5]
console.log(tip1[tip1.length-1])
//index는 0~4이니까 '-1'
//원본 수정 없이 [1,2,3,4]값과 [5]라는 값을 얻어내고 싶을 때
console.log([...tip1].pop())


let tip2 = [...tip1]
console.log(tip2.pop())
console.log(tip2) //(4) [1, 2, 3, 4]

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]

console.log([...tip3, 1000, ...tip4])
// ...하면 전개해줌



const tip5 =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat())

const tip6 = [
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
]

tip6.flat()
tip6.flat(1)
tip6.flat(2)
tip6.flat(Infinity) // 다 펼쳐지면 스톱


const tip7 = new Array(10).fill(0) // Array(10).fill(0)도 됨.
const tip8 = Array.from('hello world')

// '.'.repeat(100).split('.') // 권하지는 않음. split from중에 from쓰기

let tip9 = [1, 2, 3, 4, 5]
//주의 : 마지막에 slice 한 값이 반영
console.log([...tip9.slice(2), 1000, ...tip9.slice(2,5)])
//(7) [3, 4, 5, 1000, 3, 4, 5]
console.log([tip9.slice(0, 2), 1000, tip9.slice(2,5)])
//(3) [Array(2), 1000, Array(3)]
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2,5)])
//(6) [1, 2, 1000, 3, 4, 5]

let tip10 = [1, 2, 3, 4, 5]
tip10.splice(2,0,1000)


// map하고 다시 오겠습니다.
const tip11 = Array(100).fill(0).map((v, i) => i + 1)


const tip12 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
]

//askup 인공지능 물어보기

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
    return item.age
});
console.log(ages1, ages2);

// 같은말

// item이   
// {
//   "_id": "642ba3980785cecff3f39a8d",
//   "index": 0,
//   "age": 28,
//   "eyeColor": "green",
//   "name": "Annette Middleton",
//   "gender": "female",
//   "company": "KINETICA"
// } 
// 이거 하나

// 그 item에서 age만 뽑아서 전달