// https://ko.javascript.info/nullish-coalescing-operator
// 스펙에 추가된 지 얼마 안 된 문법. 구식 브라우저는 폴리필이 필요
// 폴리필 : 최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것

let firstName = Null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? nickName)
console.log(firstName ?? lastName ?? nickName)
console.log(firstName ?? lastName ?? '익명 사용자')

let a;
let b = 10;
let c = null;

console.log(a ?? b ?? c)  // 10



//단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100) //100 //height가 0이기에 false
console.log(height ?? 100) //0 //height가 null이야? > 아니기에 0 출력



let height2;
console.log(height2 || 100) 
console.log(height2 ?? 100)


let height3 = '';
console.log(height3 || 'hello') 
console.log(height3 ?? 'world')

//지금 밑에 주석으로 다는 내용은 여기서 몰라도 됨
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined

