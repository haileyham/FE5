// this(***)
// - 자신을 호출한 객체
// - 자신이 생성할 객체
// this로서 자기 자신의 변수를 갖게해줌.
function a() {
  console.log(this);
}
a(); // a를 호출한 애가 누구인가 ? window를 출력해줌. window.a()와 같다 console.log()는 window.console.log()와 같다. 함수의 이름도 변수다..

function b() {
  console.log("hello world");
}
b();
window.b(); // .앞에있는 애를 출력.. window를 호출. this가 윈도우가 되는것임

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
    // this가 누구일까?
    // 찍어보면 됩니다. console.log
    // 1. func1
    // 2. myObj
    // 3. window
  },
};

myObj.func1(); //myObj를 호출

/////////////

let myObj = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

let test = myObj.func1;
test(); // 이건 window가 나옴. 결국 호출하는게 test가 되어 test를 호출한 애가 window로 바뀜..
//this가 어려운 이유는 this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라지기 때문이다.
// bind를 포함한 예외사항이 있습니다.

function sayName() {
  //함수의 이름은 어차피 변수!
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
};

var a = {
  // var a = {b}
  b: b,
};

// 문제를 조금 더 꼬아보겠습니다.
function sayName() {
  console.log(this);
}

var c = {
  "he  llo": "world",
  say: sayName,
};

var b = {
  // var b = {c}
  c: c,
  say: sayName,
};

var a = {
  // var a = {b}
  b: b,
  say: sayName,
};

//추가예제
var name = "hojun";

function sayName() {
  console.log(this.name); //this만 찍으면 window
}
sayName(); // hojun , 결과적으론 window.name을 찍은거니까

let peter = {
  name: "Peter Parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

peter.say(); //Peter Parker
bruce.say(); //Bruce Wayne

///

function attackBeam() {
  this.hp -= 20;
}

let jombi = {
  name: "busan jombi",
  damaged: attackBeam,
  hp: 10000,
  power: 100,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged(); // jombi의 hp는 9980이 됨. damaged()는 attackBeam을 의미하고, 그 펑션 안에는 나를 호출한 jombi(this)의 hp를 깎는다.
jombi;

///
function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 레이저 공격
  this.hp -= 5;
}

let jombi = {
  name: "jombi",
  damaged1: attackBeam,
  damaged2: attackKnife,

  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged1(); // Beam
jombi.damaged2(); // Knife
jombi.hp; // 9975 빔과 칼을 맞아버린 좀비

// this 사용예시
let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());
// bind는 내가 원하는 곳에 this를 묶어줄 수 있다.

/////

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();

// a(), b(), c()모두 window
// 위 함수는 a.b.c()이런 식으로 호출한 객체를 타고 올라가는 형태가 아닙니다.
// 함수로 계속 타고 올라가면 호출하는 것은 window다

//let const는 보이지 않는 블럭형성.. 전역으로 선언되지 않음
