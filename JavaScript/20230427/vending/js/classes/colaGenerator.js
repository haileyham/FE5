// 개꿀팁! 크롬창에서 ctrl+shift+C 누르면 element selctor 클릭할 수 있도록 바로 켜짐~
// 프로젝트 뭘 해야하는지 모르겄다~ 참고 https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners
class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector(".section1 .cola-list"); //콜라 목록 담고있는 ul
  }

  async setup() {
    //다른 함수들 실행하는 시동함수
    const response = await this.loadData(); //loadData에 저장되고 //통신 실행
    this.colaFactory(response); //밑에 loadDate()를 colaFactory에 response를 인자로 받아서 실행 //받아온 데이터로 기능 실행
  }

  async loadData() {
    //json파일 불러오기 // count는 갯수

    //예외처리 try...catch로 /promise로 then..catch 대신에 사용했음
    //json에서 받아올때 시간걸리기에 비동기처리 해줘야함 / async await(loadData()에 붙여주고 fetch에 await붙여주기) / index.js에도 await해줘야함
    try {
      const response = await fetch("./items.json"); //json 파일 가져오기
      // fetch는 promise 객체를 반환하고 promise 서버 연결이 잘 되면 resolve가 자동적으로 실행이 되고, resolve가 실행이 되면 그 콜백함수에 반환하는 그 안의 인자가 response임.
      //근데 위의 과정은 fetch를 실행할 때 다 실행하고 await로 위의 fetch의 순서를 다 기다려서 실행하자 => 그래서 promise resolve(then) response 는 생략해도 된다.(await하는 동안 다 실행되기 때문)

      //fetch 다 될 때까지 기다려!
      //async await는 fetch에서 then catch와 같이 체이닝 일어나는 것도 코드가 길어지니까 fetch 다될때까지 기다리자(then~catch다 될 때까지)..(promise->resolve->then->콜백->최종적으로 response객체 반환) 즉 response(써버의 상태를 알려주는 정보들 가지고있음)는 then이 반환하는 콜백함수 안에 들어가는 인자이다..설탕 문법이다..

      if (response.ok) {
        //response.ok  ok는 서버로부터 응답이 제대로 왔는지 확인/ ok는 true,false로 나옴 / 서버의 응답 코드가 200 ~ 299일 경우(200대는 제대로 응답이 옴) / 400번대는 제대로 오지 않은 것
        // 서버의 응답 코드가 200 ~ 299 일 경우
        return response.json(); //json데이터를 객체로 바꿔서 받아옴
      } else {
        throw new Error(response.status); //status를 확인하면 catch로 던짐 //가장 가까운 catch로 인자 전달
      }
    } catch (error) {
      //status로 부터 받아서 error 띄움 //throw new Error(response.status); 안의 값을 error 파라미터에 인자로 넣어줌
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    //DocumentFragment 는 또 가상돔이 아니고 미니돔!!!(밑에내용 알아서 받아들이기//미니돔이 정확한 것임.)
    //메모리 효율적! 가짜하나만들고 나중에 진짜에 줌
    //가상돔에 안 넣고 바로 참돔(참의 돔)에 넣으면 메모리를 다 잡아먹음. (처음 페이지 로드 할 때)가상돔은 메모리 안잡아먹음:로드할때 한번에 다하지않기때문에.
    //메모리상의 가상돔에 어펜드하자
    //loadData를 통해서 온 json객체
    data.forEach((el) => {
      //받아온 json data를 통해서 각각의 콜라를 생성
      const item = document.createElement("li");
      const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `; //button에다가 data-* 넣어서 사용하기 / 안에 있는 것을 밖으로 빼낼때 사용하기 위해서 / querySelector로 다 사용하면 성능상 이슈 생길 수도 있기에

      //data사용해서 html요소들을 하나의 객체처럼 사용가능 버튼에다가 여러 데이터를 심어놓는다.. 장바구니 넣는 것 등과 같은 기능들과..함께..결국 버튼에서 이벤트가 발생할 것이기 때문에.. 쿼리셀렉을 너무 남용하면 성능이 떨어지기 때문에
      item.innerHTML = itemTemplate; //forEach문 안에서 쓰는 이유는 li템플릿 하나에만 계속 넣게 되기 때문에, createElemnt로 li만드는거에 각각 넣으려고 //이건 포이치 안에 꼭 있어야함. li안에 생성되어야 하기 때문
      docFrag.append(item); // this.itemList.append(item);대신에 사용 //가상메모리에 다 우겨넣고 나중에 한번에 실제로 append한다. 일일이 실제로 append하면 성능상 이슈발생 //가상돔을 이용해서 계속 붙이는 방식을 피하자.
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator; //밖으로 내보낼 것 하나밖에 없을때 default, 받아올 곳에는 import ColaGenerator (이후자동완성하고 .js붙여주면됨);하면됨 //모듈 내보내는 키워드, 내보낼 것이 1개뿐일 때는 default.
