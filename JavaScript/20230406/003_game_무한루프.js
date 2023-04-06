// let answer = Math.floor(Math.random()*100)
// // let answer = ~~(Math.random()*100)

// for(;;){
//   let userInput = window.prompt('값을 입력해주세요!') //window생략하고 prompt만 써도 됨
//   if(answer > parseInt(userInput)){
//     window.alert('UP!')
//   }
//   else if(answer < parseInt(userInput)){
//     window.alert('DOWN!')
//   }
//   else{
//     window.alert('Correct!')
//   }
//   count += 1
// }

// console.log(`${count}번째`)


//Math.floor(null)은 NaN 대신 0을 반환
let answer2 = Math.floor(Math.random() * 100)
// ~~(Math.random()*100)
let count2 = 0

for (;;) {
    let userInput = parseInt(window.prompt('값을 입력해주세요!'))
    if (answer2 > userInput) {
        window.alert('UP!')
    }
    else if (answer2 < userInput) {
        window.alert('DOWN!')
    }
    else {
        window.alert('Correct!')
        break
    }
    count2 += 1
}
console.log(`${count2}번째 맞추셨습니다!`)

// 문자 입력했는데 그냥 통과로 뜸



// random은 확률적으로 random이 맞나?
// 게임 확률



let answer3 = Math.floor(Math.random() * 100)
// 프로그래밍 언어에서 random은 seed라는 값을 주면 동일한 랜덤값이 나오는 수학수식.
// ~~(Math.random()*100)
let count3 = 0

for (;;) {
    count3 += 1  //밑에있던 것을 위로 올림.
    let userInput = parseInt(window.prompt('값을 입력해주세요!'))
    if (answer3 > userInput) {
        window.alert('UP!')
    }
    else if (answer3 < userInput) {
        window.alert('DOWN!')
    }
    else if (Number.isNaN(userInput)) {
        window.alert('다시 입력하세요!')
    }
    else {
        window.alert('Correct!')
        break
    }
}

console.log(`${count3}번째 맞추셨습니다!`)


// Number
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number

// isNaN
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN
// https://on1ystar.github.io/javascript/2021/03/30/JavaScript-7/
//isNaN() 함수는 어떤 값이 NaN인지 판별합니다. isNaN 함수는 몇몇 혼란스러운 케이스을 가지고 있으므로, ECMAScript 2015에서 추가한 Number.isNaN()으로 바꾸는 편이 좋을 수도 있습니다.
//  isNaN(value)
// value : 테스트되는 값
// 주어진 값이 NaN : true / 아니면 false

isNaN('hello')
// true
isNaN('123')
// false
isNaN('111')
// false
isNaN('hello')
false
isNaN('hello')
false
isNaN('hello')
false