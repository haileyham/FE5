// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형입니다.

let s = new Set('aabbbccccdd') // 중복을 제거하는구나
s.size

회사게시판 = ['이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '김연하', '김연하', '최흥석', '이나영']
let 게시자 = new Set(회사게시판)

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}
// e 들어온 element 에서 




// https://ko.javascript.info/map-set
// 맵과 셋
// 이 풀이는 매우 어렵습니다. 초급자 분들에게 권장하지 않습니다.
let map = new Map() //new Map() – 맵을 만듭니다.
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1)
}


// 1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.get('이호준') // undefined

map.set('이호준', 1) // 최종

//map.get(key) – key에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환




// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

map.set('이호준', 2) // 최종
// 첫번째에 i에는 '이호준'이 들어감 / 오른쪽 부분은 연산이 끝나면 반환되서 2가 i에 들어감
// i -- > (키) , (map.get(i) || 0) + 1 --> (벨류)
// map.set(key, value) – key를 이용해 value를 저장

// undefined || 0 이면 0이 출력, undefined 앞에나와서 뒤에 봐야하기때문
// 0에 1이 더해지면 1이 출력됨. i에 1이 들어감

// 1이 나오면 뒤에꺼 안봄
// 1+1 하면 2됨





/// set 연습 ///
//이터러블 객체 : 순회가능한 객체
// set은 순서를 지닌 이터러블객체

let s2 = new Set('aabbbccccdd')
s2.sizes.has('a') // a가 있는지 확인
s2.sizes.has('f') // f가 있는지 확인
s2.sizes.add('z') // z 추가
s
for (const i of s){
  console.log(i)
}

let s3 = new Set(['a','a','b','b','b','c','c','c','c','d','d'])


// 교집합
let a = new Set('abc')
let b = new Set('cde')
let cro = [...a]

// [...a]로부터 들어온 e:element를 b가 가지고 있는지
// 배열 a 의 요소element를 b에서 가지고 있는가



// 합집합
let union = new Set([...a].concat(...b)) //concat처음이자 마지막 쓸수도, 
// let union = new Set([...a],[...b]) //Set(3) {'a', 'b', 'c'}
let union = new Set([...a, ...b]) //Set(5) {'a', 'b', 'c', 'd', 'e'}




// set, map, object, array가 이터러블 객체인지? 순서는 보장하는지?
// 이터러블한 객체란? 순회가 가능한 객체다.
// set, map, array, string

// 순서를 보장하나요?
// set, map, array, string (순서를 보장함)
// object는 (순서를 보장하지 않음)



