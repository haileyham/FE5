// 고급 템플릿 리터럴(React)문법을 한 번 더 함

const x = 10;
const y = 20;
const result = x2 * y2;
console.log('x값은 10이고 y값은 20이고 두개를 곱한 값은 200입니다.')
console.log('x값은 10이고 y값은 20이고 두개를 곱한 값은', x*y,'입니다.')
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x*y}입니다.`)
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${result}입니다.`)


console.log(`h
e
l
l
o`)
//h
//e
//l
//l
//o

const s = 'hello'
const ss = 'world'
const result2 = s + '\n' + ss
console.log(result2)
//hello
//world


// 단점을 '굳이' 뽑는다면
// 가독성 떨어짐
if(true){
  if(true){
    if(true){
      console.log(`h
      e
      l
      l
      o
      `)
    }
  }
}
//h
      // e
      // l
      // l
      // o