// 개꿀팁! 크롬창에서 ctrl+shift+C 누르면 element selctor 클릭할 수 있도록 바로 켜짐~
// 프로젝트 뭘 해야하는지 모르겄다~ 참고 https://www.freecodecamp.org/korean/news/javascript-projects-for-beginners

class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.section1 .cola-list'); //콜라 목록 담고있는 ul 
  }

  async setup() {
    const response = await this.loadData(); //loadData에 저장되고
    this.colaFactory(response); //밑에 loadDate()를 colaFactory에 response를 인자로 받아서 실행
  }


  async loadData() {//json파일 불러오기 // count는 갯수

    //예외처리 try...catch로 /promise로 then..catch 대신에 사용했음
    //json에서 받아올때 시간걸리기에 비동기처리 해줘야함 / async await(loadData()에 붙여주고 fetch에 await붙여주기) / index.js에도 await해줘야함
    try {
      const response = await fetch('./items.json');//json 파일 가져오기
      // fetch는 promise 객체를 반환하고 promise 서버 연결이 잘 되면 resolve가 자동적으로 실행이 되고, resolve가 실행이 되면 그 콜백함수에 반환하는 그 안의 인자가 response임. 
      //근데 위의 과정은 fetch를 실행할 때 다 실행하고 await로 위의 fetch의 순서를 다 기다려서 실행하자 => 그래서 promise resolve(then) response 는 생략해도 된다.(await하는 동안 다 실행되기 때문)
      if (response.ok) { //response.ok  ok는 서버로부터 응답이 제대로 왔는지 확인/ ok는 true,false로 나옴 / 서버의 응답 코드가 200 ~ 299일 경우(200대는 제대로 응답이 옴) / 400번대는 제대로 오지 않은 것
        return response.json(); //json데이터를 객체로 바꿔서 받아옴
      } else {
        throw new Error(response.status);//status를 확인하면 catch로 던짐
      }
    } catch (error) {//status로 부터 받아서 error 띄움 //throw new Error(response.status); 안의 값을 error 파라미터에 인자로 넣어줌
      console.log(error);
    }
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    //메모리 효율적! 가짜하나만들고 나중에 진짜에 줌
    //가상돔에 안 넣고 바로 참돔(참의 돔)에 넣으면 메모리를 다 잡아먹음. (처음 페이지 로드 할 때)가상돔은 메모리 안잡아먹음:로드할때 한번에 다하지않기때문에.
    data.forEach((el) => {//받아온 json data를 통해서 각각의 콜라를 생성
      const item = document.createElement('li');
      const itemTemplate = `
            <button class="btn-cola" type="button" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
                <img class="cola-img" src="./img/${el.img}" alt="">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            </button>
            `;//button에다가 data-* 넣어서 사용하기 / 안에 있는 것을 밖으로 빼낼때 사용하기 위해서 / querySelector로 다 사용하면 성능상 이슈 생길 수도 있기에

      item.innerHTML = itemTemplate;//forEach문 안에서 쓰는 이유는 li템플릿 하나에만 계속 넣게 되기 때문에, createElemnt로 li만드는거에 각각 넣으려고
      docFrag.append(item);// this.itemList.append(item);대신에 사용 //가상메모리에 다 우겨넣고 나중에 한번에 실제로 append한다. 일일이 실제로 append하면 성능상 이슈발생
    })
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;//밖으로 내보낼 것 하나밖에 없을때 default, 받아올 곳에는 import ColaGenerator (이후자동완성하고 .js붙여주면됨);하면됨