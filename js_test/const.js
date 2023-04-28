const hello = "first hello";
// hello = "second hello"; //재할당안됨

if(true){
  const hello = "second hello";
  console.log(hello);//second hello
}
console.log(hello);//first hello


//const
//중괄호 scope
//재할당 X
//재선언 X