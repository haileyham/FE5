// - JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다.
//(문자열 = > 객체)
// - JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다.
//(객체 = > 문자열)

let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));