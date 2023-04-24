const lol = ["카타리나","조이","킨드레드","하이머딩거"]


lol.forEach((item, i) => {
  lol[i] = item + "★";
});
//기존 배열을 수정

lol.map((item,i) =>{
  return item + `★`;
})
//map으로 새로운 배열 만들어 사용

//forEach보다 map 사용하기