// https://joshua1988.github.io/web-development/javascript/promise-for-beginners/#%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4%EC%9D%98-3%EA%B0%80%EC%A7%80-%EC%83%81%ED%83%9Cstates
//https://joooing.tistory.com/entry/Promise-1-%EC%BD%9C%EB%B0%B1%ED%8C%A8%ED%84%B4%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90-Promise-%EC%83%9D%EC%84%B1%EC%9E%90
// pending //대기상태
// fulfilled //이행상태
// rejected //실패상태

function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "hello hello"
    resolve(hello);
  })
}
//sayHello 실행되고 결과값에 따라 성공하면 resolve 실패하면 reject를 호출

sayHello()
.then((resolveData) => {
  console.log(resolveData); //hello hello
  return resolveData;
})
.then((resolveData2)=>{
  console.log(resolveData2); //hello hello
  return resolveData2;
})
.then((resolveData3)=>{
  console.log(resolveData3); //hello hello
})
.then((resolveData4)=>{
  console.log(resolveData4); //undefined 뜸 위에서 return받은 값이 없어서 resolveData4파라미터에 인자로 들어오는 값이 없기 때문
}).catch((error)=> {
  console.log(error); 
});

//(1) sayHello 함수 실행 (2)promise가동 (3) then함수가 실행되면서 promise가 현재 진행됨 (4) resolve 성공적으로 가동되기 때문에 hello 상수가 resolve 파라미터로 잘 들어가고 (5) then의 콜백함수안에 파라미터의 인자로 hello를 받아서 resolveData를 return해주고 (6) 그다음 then에 앞의 return값이 인자로 또 들어가서 console.log에 hello가 찍히게 됨
//두번째 then의 파라미터 앞의 then 파라미터랑 달라도 됨. 인자로 받는거기때문에.



//만약 실패했다면 reject로 error핸들링 가능

// function sayHello2() {
//   return new Promise((resolve, reject) => {
//     reject(new Error());
//   })
// }

// sayHello2()
// .then((resolveData) => {
//   console.log(resolveData) 
// })
//   .catch((error)=> {
//     console.log(error); 
//   });
//error 출력





//async, await

//promise 자체가 비동기로 움직이기 때문에 await을 작성하지 않으면 밑에있는 코드들이 바로 실행될 수 있기때문에, await을 사용하여 sayHello0();실행후 밑에있는 코드들 실행하도록
//await은 함수 앞단에 async를 명시해줘야함
function sayHello0(){
  return new Promise ((resolve,reject)=>{
    resolve('hello!!');
  })
}

async function test(){
  const hello1 = await sayHello0();
  console.log(hello1);
}
//장점 : 익숙한 코드로 사용할 수 있다는 것이 장점임.
//sayHello0의 return값을 hello1에 저장이되고, console.log로 hello1을 찍게 됨
//async, await 을 사용하면 코드보기 더 편안하다.

test(); //hello!! 출력됨