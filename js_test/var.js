var hello = "hello";

function sayHello(){
  var hello = "hello hello"
  console.log(hello); //hello hello
}

sayHello();
console.log(hello); //hello

if(true){
  var hello = "hello hello2"
}

console.log(hello); //hello hello2 
// var hello가 hello hello2로 바뀜 > var는 function scope인데 if문은 아니기 때문에 초기화되고 변수 할당값이 바뀜

//터미널에 node var.js 치면 나옴
//폴더만들기 mkdir js_test
//폴더 들어가기 cd js_test


//var
//function scope
//재할당 O
//재선언 O