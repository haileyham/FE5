const http = require("http");//http패키지를 사용하겠다. require은 해당패키지를 불러와서 사용할 수 있게끔 하는 역할
//http는 서버를 쉽게 구축하기위한 패키지

http.createServer((req,res) => {//매개변수 req,res / req는 요청보낼때 정보담김, res는 해당 client에 응답보낼때 
  res.writeHead(200,{"Content-Type":"text/html"});//Head값에 추가해서 보낸다. 응답을 보낼때 head값을 통해서 상태코드라는 숫자를 보내게 되면서, 어떤 타입인지도 보내게됨 / 200번대는 응답을 잘 보냈을때, 404는 wrteHead에 해당응답이 제대로 이루어지지 않았음을명시(200대신에 404를 넣은것임) / 앞으로 html을 반환해주겠다

  //createServer는 서버를 구축하기위해 서버를 생성하고, 그에대한 콜백함수로 req,res 요청과 응답을 진행할수있게

  //hello world를 서버에 전달해줘야 client가 받아볼수있음
  res.end("<p>Hello World~!!!</p>");//응답보낼 코드를 작성한 것임
}) .listen(3000,()=>{  //서버를 실행할 코드
  console.log('3000번 포트 서버 접속 완료~!');
});  //listen은 3000번 포트내에서 대기하고있다가 서버에서 할슈잇도록

//크롬에서 http://localhost:3000/ 
// localhost:3000 치면 hello world 떠있음

//local host : 현재 컴퓨터의 내부 주소(우리가 컴퓨터에 접근하기 위한 주소) / 서버 개발할 때 테스트 용으로 많이 쓰임
//localhos = 127.0.0.1  / 두개 동일 의미
//127.0.0.1 는 IP(Internet Protocol)이런 주소를 통해서 인터넷에 접속 가능해짐

//포트(Port) : 서버내의 프로세스를 구분하는 번호
//서버에서는 다양한 일을 처리(HTTP, DB등등). 이를 처리할 수 있도록 분리해 놓은 개념.
//기능에따라 포트번호로 접근 구분 / HTTP(80),HTTPS(443),DB(27017)...등등

//Postman 서버 개발 시 이를 테스트할 수 있는 툴

//API서버 : 요청을 받고 응답을 하는 서버 
//클라이언트(요청주체)가 서버에게 요청하면 서버가 처리해서 응답을 보내는 서버

