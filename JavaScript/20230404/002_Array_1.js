const arr = [10, 20, 30]
arr[0] = 100 //index 0에 10>100변화, const는 값의 변화가 안된다고 하지 않았나? // 변경 가능, mutable
console.log(arr) //[100, 20, 30]

arr = 100
arr = [10, 20, 30]
console.log(arr)
console.dir(arr) // 프러퍼티와 메서드를 볼 수 있음


//문자열(String)




// arr.1 //error
// 프로퍼티에 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자임. 문자로 입력된 값은 .을 찍어서 호출 가능함
arr[1] // 2
arr.length // 3
arr['length'] //3



//두개가 같은 얘기(값을 변화)
arr.length = 10 // 10
arr // (10)[100, 20, 30, empty x 7]

arr[0] = 100


// 프로퍼티를 추가하는 것도 가능합니다.
arr['leehojun'] = 100
// (10) [100, 20, 30, empty × 7, leehojun: 100]
arr.hojun = 1000
// (10) [100, 20, 30, empty × 7, leehojun: 100, hojun: 1000]



// 배열의 특징
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
const arr = [1, 2, 3];
arr.push(4) //4
// arr > (4) [1, 2, 3, 4]
arr.push(2) //2
// arr > (5) [1, 2, 3, 4, 2]

// push
const arr = [1, 2, 3];
arr.push(4)




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






//arr.splice(start, deleteCount, items)
const arr = [1, 2, 3];
arr.splice(1, 0, 4); //arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10,20,30(전개해서) 넣겠다.

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10,20,30을 넣겠다.



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
arr.splice(6,1,...x2) // [6]삭제하고, x2넣기


const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다
console.log(arr); 
// arr.splice().splice() // 메서드 체이닝이 안되는 이유는 splice는 삭제된 값을 반환합니다.


const arr = [10, 20, 30, 40, 50]
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

const arr = [10, 20, 30, 40, 50]
arr.splice(1)
arr

const arr = [10, 20, 30, 40, 50]
arr.splice(2)
arr




//arr.slice(start, end)
const myArray = ["apple", "banana", "cherry", "durian", "eldeerberry"]
console.log(myArray.slice(1,4)) //(3) ['banana', 'cherry', 'durian']
console.log(myArray) //(5) ['apple', 'banana', 'cherry', 'durian', 'eldeerberry']
myArray.slice(1) //(4) ['banana', 'cherry', 'durian', 'eldeerberry']
myArray.slice(0,100) //(5) ['apple', 'banana', 'cherry', 'durian', 'eldeerberry']



// arr.forEach() 
// 함수(callbackfn):(value:number, index:number, array:number[])
// forEach() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행합니다. 이 때, 함수는 인자로 배열 요소, 인덱스를 받습니다. forEach() 메소드는 배열의 요소를 순환하면서 해당 요소를 함수로 전달하고, 이 함수가 각 요소에 대해 실행

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