// 반복문
//단순한 작업을 여러번 반복해야 할때 사용하는것이 바로 반복문입니다.

var cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

var text = "";


`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)
// document.body.innerHTML = text


// 이런 반복문 중에 가장 널리 사용되는것이 바로 `for`문입니다.
// `for`문은 변수를 선언하는 **초기화식**과, 결과(true or false)에 따라 실행문의 실행 여부를 판단하는 **조건식**, 실행문 이후 변수의 증감을 나타내는 **증감식**으로 구성되어 있다.

//for(초기화식; 조건식; 증감식) { 
//   실행문; 
// }

var cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text2 = '';
for (let i = 0; i < cars2.length; i++){
  text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}
text2
document.body.innerHTML = text2


for (let i = 0; i < 10; i++){
console.log(i)
}
// console.log(i) // i는 반복문이 끝난 다음 호출할 수 없음


for (let i = 0; i < 10; ++i){ //위 구문과 차이 없음
console.log(i)
}

for (let i = 0; i < 10; i += 2){  //let을 생략하면 안됨. i가 전역으로 생성되어버림
  console.log(i)
  }
//0 2 4 6 8






  // for (;;){  
  //   console.log('실행하지 마세요')
  //   }
//무한반복 코드 
//실행하지마시오(메모리 사용하느라 줌까지 끊길수도있음) 
//이런 코드는 작성하지도 마시오
//의도한 무한반복은 매우 위험
//무한반복은 메모리를 많이 잡아먹기 때문에 시스템 전체의 영향이 감.
// 1. 반복의 시간을 가능하다면 정해주는 것이 좋음
// 2. 탈출 조건을 명확히 해주기


for(let i = 0; i < 10;){
  console.log('실행하지 마세요')
  i += 1
}

for(let i = 0;;){ // i < 10; 밑으로 내릴 수 있음
  console.log('실행하지 마세요')
  i += 1
  if(i>=10){
    break
  }
}


// for(;;){ 
//   let i = 0
//   console.log('실행하지 마세요')
//   i += 1
//   if(i>=10){
//     break
//   }
// }
// 무한반복문임 //실행하지말기 //계속 돌음


let i = 0
for(;;){ 
  console.log('실행하지 마세요')
  i += 1
  if(i>=10){
    break
  }
}
// 위와 동일해 보이지만 let i = 0 을 위로뺐음. 무한반복 아님