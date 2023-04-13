// 문제 1) 전역 범위에서의 this
console.log(this)

function 함수(){
    console.log(this)
}
함수();

// 문제 1-2) 전역범위에서의 this
// 1. 일반 함수 범위에서 호출
function outside() {
    console.log(this); 

    // 2. 함수 안에 함수 내부에서 호출
    function inside() {
        console.log(this);
    }
    inside();
}
outside();
// 결과는 어떻게 나올까?


// 문제 2)  object 내부의 함수(메소드) 안에서의 this

const 오브젝트 = {
    name: 'Lee',
    함수 : function(){ console.log(this)}
}
오브젝트.함수() // 결과는 어떻게 나올까??


// 문제 2-2) 오브젝트 내부의 오브젝트 메소드로 this를 찍어보면?

const 오브젝트2 = {
        name : 'Kim',
    data: {
        함수 : function() { console.log(this)}
    }
}
오브젝트2.data.함수()
console.log(오브젝트2.data)


// 문제 2.3) function() 대신에 arrow function을 쓴다면?

const 오브젝트 ={
    name: 'Kim',
    data : {
        함수 : () => { console.log(this) }
    }
}
오브젝트.data.함수()


// 문제3) constructor(생성자) 내부의 this

function 생성자(){
    this.이름 = 'Kim'
    this.성별 = '남'
}
const 오브젝트 = new 생성자()


// 문제4-1) 이벤트리스너 내부 콜백함수에서의 this

<button id='버튼'>버튼</button>


document.getElementById('버튼').addEventListener('click',function(e){
    console.log(this)
    console.log(e.currentTarget)
})


// 문제 4-2) 이벤트리스너 안에서 콜백함수를 쓴다면 this는?

document.getElementById('버튼').addEventListener('click', function (e) {
    let arr = [1, 2, 3]
    arr.forEach(function () {
        console.log(this)
    })
})


// 문제 4-3) 오브젝트 내부 콜백함수에서의 this

var 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(function () { console.log(this) })
    }
}
오브젝트.함수() // 어떤 결과가 나올까?


// 문제 4-4) arrow function 안에서의 this

const 오브젝트 = {
    이름: ['김', '이', '박'],
    함수: function () {
        console.log(this)
        오브젝트.이름.forEach(()=> { console.log(this) })
    }
}
오브젝트.함수()