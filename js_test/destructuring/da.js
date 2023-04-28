//object 객체
const object = { a: 1, b: 2 };

const a = object.a;
const b = object.b;
//객체 안의 key를 통해서 받아와서 a,b 상수에 할당

console.log(a); //1
console.log(b); //2



//위에것들 객체 많고 복잡해졌을때 쓰기 힘듦 그래서 
//비구조화 코드 사용
const object2 = { c: 10, d: 20 };

const {c,d} = object2;
//한번에 받아올 수 있음
// c,d상수에 object2키들 쉽게 할당

console.log(c);//10
console.log(d);//20
// console.log(e);//만약 const{e}=object2; 하면 undefined나옴. 객체안에 키값이 없기 때문.



//array 배열
const array = [1,2];
const [one,two] = array;
//one상수에 1 할당, two할당에 2할당

console.log(one);//1
console.log(two);//2
