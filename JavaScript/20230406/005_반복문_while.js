// why? 10까지 출력이 되는가?

let x1 = 0;
while(x1 < 10){
  console.log(x1)
  x1 += 1
}
//마지막에 10 나오는건 반환된 값임

let x2 = 0;
while(x2 < 10){
  x2 += 1
  console.log(x2)
}
//순서바꾸면 마지막에 undefined나오는데 console.log(x)꺼임

//마지막의 반환값이 찍히는 것



let x = 0;
while(x < 10){
  console.log('start')
  console.log(x)
  x += 1
  console.log('end')
}


////////////

let input;

do {
    input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

////////////

let input2;

do {
    input2 = confirm('다음에도 저희와 함께 하시겠습니까?')
} while (!input2);

console.log("감사합니다.");


////////////
//구구단

//for
for(let i = 2; i < 10; i++){
  for(let j = 1; j < 10; j++){
    console.log(`${i} x ${j} = ${i * j}`)
  }
}

//while
let i1 = 2;
while(i1 < 10){
  let j = 1; //j를 초기화
  while(j < 10){
    console.log(`${i1} x ${j} = ${i1 * j}`);
    j++
  }
  i1++
}

// while 오답 : 초기화를 안했기 때문에
let i = 2;
let j = 1;
while(i < 10){
  //오답이 아니게 하려면 j=1 을 여기에 넣어야 정답됨.
  //j = 1을 안하면 j는 계속 10인 상태로 남아있음.
  while(j < 10){
    console.log(`${i} x ${j} = ${i * j}`);
    j++
  }
  i++
}




// 암기코드 2

//for
let s2 = 'hello world'
let result2 = ''
for(let i = 0; i < s.length; i++){
  // console.log(i)
  // result2 = result + s[i]
  result2 = s[i] + result
}
console.log(result2)

// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + 'h' => 'eh'
// s[2] + result => 'l' + 'eh' => 'leh'
// ...



let a = 'hello world';
a.split("").reverse().join(""); 
//'dlrow olleh'


//while
let s = 'hello world'
let result = ''
let count = 0
while (count < s.length) {
    result = s[count] + result
    count++;
}

console.log(result)



// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1

let w = 1;
for (let i = 1; i < 6; i++){
  w *= i
}
console.log(w);
//120
// w = w * i 
// w = 1 * 1
// w = 1 * 2
// w = 2 * 3
// w = 6 * 4
// w = 24 * 5


let w2 = 1;
i = 1;
while(i < 6){
  w2 *= i
  i += 1
}
console.log(w2)
//120