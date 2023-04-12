<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title></title>
</head>

<body>
  <script>
    // 참고자료 : https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
    // JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
    // 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
    // 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
    // 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
    // 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
    // let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장

    let foo = 1;
    {
      // 일시적 사각지대에 빠지기 때문 
      console.log(foo);
      let foo = 2; // 2라는 값을 가지지 않은채로 블록레벨 최상단으로 올라감(메모리 누적) 그다음 콘솔로그가 스코프 체이닝을 하면 같은 블록의 최상단에 누적된 let foo의 자리(undefined로 나옴)에 의해 에러가 남. 호준님의 네모상자를 그려보자
    }

    let a = 10
    if (true) {
      let a = 20
      if (true) {
        let a = 30 // 이경우엔 30출력
        console.log(a)
        //let a = 30  아래있을 경우엔 30이 선언되지 않은채(메모리 공간만 할당한채)console보다 높이 블록레벨스코프 최상단으로 올라가기 때문에 일시적 사각지대에 빠짐. 그래서 에러 뿜습니다.
      }
    }

    console.log(add1(10, 20)); // 30
    console.log(add2(10, 20)); // 30
    console.log(mul1); // undefined

    // console.log(mul1(10, 20)); // not a function
    // console.log(mul2); // Cannot access 'mul2' before initialization
    // console.log(mul2(10, 20)); // 위와 같은 애러
    // console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문
    // console.log(test);
    console.log(test2);

    function add1(x, y) {
      return x + y;
    }

    function add2(x, y) {
      return x + y;
    }

    var mul1 = function (a, b) {
      return a * b;
    };

    let mul2 = function (a, b) {
      return a * b;
    };


    let const 호이스팅이 안된다
    >> 안되는 이유를 설명할때 TDZ 일시적사각지대 


        // let test = 100;
        // var test2 = 100;
  </script>
</body>

</html>


console.log(mul1);
    var mul1 = function (a, b) {
      return a * b;
    };
VM3670:1 undefined


console.log(mul2);

    let mul2 = function (a, b) {
      return a * b;
    };