let hello = "first hello";
hello = "second hello"

console.log(hello); //second hello

if(true){
  let hello = "third hello";
  console.log(hello); //third hello
}

console.log(hello)//second hello

//let
//중괄호 scope
//재할당 O
//재선언 X