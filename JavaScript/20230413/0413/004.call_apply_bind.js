// apply, call, bind

// call
var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName(); //Peter Parker
peter.sayName.call(bruce); //Bruce Wayne 내가 사용할 this를 ()안의 값을 사용해라.

var peter = {
  name: "Peter Parker",
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, "!"); // Bruce Wayne! 또한 아규먼트 값 (!)도 전달 가능
peter.sayName("!"); // Peter Parker!
peter.sayName(); // Peter Parkerundefined

//apply
var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};

peter.sayName.apply(bruce, ["batman", "richman"]); //Bruce Wayne is batman or richman

// call과 apply 비교
// 비교1
var peter = {
  name: "Peter Parker",
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, "!", "!!");

// 비교2
var peter = {
  name: "Peter Parker",
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce, ["!", "!!"]);

//bind
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();

/* peter.sayName() 과 bruce.sayName() 의 결과 값이 무엇이 될지 생각해봅시다. */

//bind
// bind() 는 this가 고정된 새로운 함수를 반환합니다.
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: "bruce",
  sayName: sayName,
};

var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};

peter.sayName();
bruce.sayName();
