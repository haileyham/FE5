'abcde1abc12abb'.split('').filter(Number).reduce(function(a,c){
  let result = a+parseInt(c);
  return result;
})
'112'



'abcde1abc12abb'.split('').filter(Number).reduce(function(a,c){
  let result = a+parseInt(c);
  return result;
},0)
4


/*
  위 아래 다른 이유는 초기값을 여부.
  위에는 초기 값이 '1'문자열 1로 들어가고 그다음꺼는 숫자로 되지만 문자열 출력

  밑에는 초기값을 숫자 0으로 해줘서 그 다음 것들은 parseInt로 숫자로 변환해주니까 1+1+2 = 4 나옴
*/