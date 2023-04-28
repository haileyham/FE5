const http = require("http");

http
.createServer((req,res) => { 
  if(req.url === "/"){
    res.writeHead(200); //writeHead는 응답을 보냈을때 정상적으로 잘 동작을하면은 숫자를 넣어주면됨 / 404는 잘못했을때 / 모두 status코드라고 생각하면됨
    res.end("main url");
  }else if(req.url === "/upload"){
    res.writeHead(200);
    res.end("upload url");
  }else if (req.url === "/delete"){
    res.writeHead(200);
    res.end("delete url");
  }else{
    res.writeHead(404);//해당 url에 해당하는 요청이 없을때
    res.end("not found!!!");
  }
}) 
.listen(3001,()=>{ 
  console.log('3001번 포트 서버 접속 완료~!');
});  //다른곳에서 3000해서 3001로함 // postman으로 확인하고 오면 이미쓰고잇어서 안된다고 이러네..ㅇ.?ㅇ
//terminal은 node로 해야함 cmd말고