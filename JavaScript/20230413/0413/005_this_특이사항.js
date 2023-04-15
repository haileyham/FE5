const person = {
  name: "hojun",
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c();
    }
    b();
  },
};
person.a();

//출력
{name: 'hojun', age: 25, a: ƒ}
hojun

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''

Window {window: Window, self: Window, document: document, name: '', location: Location, …}
''
hojun


// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person

// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 됩니다.
// a함수는 object 안에 함수입니다.
const person = {
  name: 'hojun',
  age: 25,
  a(){
      console.log(this); //person
      console.log(this.name); //hojun
      let b = () => {
          console.log(this);
          console.log(this.name);
          let c = () => {
              console.log(this);
              console.log(this.name);
          }
          c()
      }
      b()
  }
}
person.a()

//출력
{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ} 
hojun

{name: 'hojun', age: 25, a: ƒ}
hojun