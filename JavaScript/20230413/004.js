// apply, call, bind

// call
var peter = {
  name: 'Peter Parker',
  sayName: function () {
      console.log(this.name);
  }
}

var bruce = {
  name: 'Bruce Wayne',
}
peter.sayName.call(bruce);
//call 뒤에 나오는 값으로 호출해줘