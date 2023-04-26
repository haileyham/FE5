const container = document.querySelector('#root');


// 환경변수
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json'
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json'
// 리스트의 아이템을 딱 누르면 id에 슝 들어가서 보여주도록 $id로 비워둠
// API 주소들은 바뀌지 않을 것들이라 대문자로 작성


//data(api 데이터)를 가져오는 함수
async function getData(url) { //특정 url로 데이터 전달 받음
  try {
    const response = await fetch(url);//비동기통신이기 때문에 async await써야함 밑에 왜냐면 newsFeed(){}에서 콘솔찍을때는 데이터 안받아옴
    // console.log(response);
    if (!response.ok) {//fetch 제대로 응답 받고 있는지 확인
      throw new Error('네트워크에 문제가 있습니다.')//true나왔을때
    }
    return response.json();//제이슨 파싱해줌(제이슨>객체)
  } catch (error) {
    console.log(error);
  }

}



//data
async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL); //이것또한 async await 붙여주기 //getData도 비동기함수니까 콘솔로그가 먼저 실행되기때문
  // console.log(newsFeed);
  const newsList = [];

  newsList.push('<ul>');//newsList안에 ul문자 저장됨

  for (let i = 0; i < 10; i++) {//10번 for문 돌려서 li 10개 생성
    newsList.push(`
    <li>
      <a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>
    `);
  }

  newsList.push('</ul>');
  // console.log(newsList.join());
  container.innerHTML = newsList.join('');
}

newsFeed();


//뉴스 디테일 페이지 구성 함수
async function newsDetail(){
  const id = location.hash.substring(9); //location:브라우저에서 제공하는 API 현재떠있는 정보 
  //.substring(9)이후부터 나머지 문자열 반환함.(id만 뽑아오기위해서 #/detail/ 9번째꺼부터 나옴)
  const newsContent = await getData(CONTENT_URL.replace('$id', id)); //위의 id를 CONTENT_URL에 집어넣어야함 //그러기 위해서 replace사용, $id를 id변수로 변경

  container.innerHTML =`
    <h1>${newsContent.title}</h1>
    <div><a>목록으로 돌아가기</a></div>
  `;

  // console.log(newsContent);
}


// 라우터 : 화면을 중계하는 함수.
function router(){
  const routePath = location.hash;

  if(routePath === ''){
    newsFeed(); //목록에 아무것도 없으면 newsFeed();실행해줌
  }else{
    newsDetail();
  }
}

window.addEventListener('hashchange',router) //hashchange가 될때 router실행

router();