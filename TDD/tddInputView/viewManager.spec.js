describe("클릭이벤트가 일어나면 데이터를 가져와서 화면에 뿌려주는 클래스입니다.", () => {
  it('viewManager에 textManager 객체가 잘 전달되는지 확인합니다.', () => {
    const textManager = null; //가짜(더미) textManager 
    const btnEl = document.createElement('button');
    const viewerEl = document.createElement('strong');
    const inpTxt = document.createElement('input');

    //인자가 잘 전달되는지 확인하는 함수를 만들자
    const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    expect(actual).toThrowError(); //그냥 함수 넣어야함 actual()실행아니규
  });


  it('viewManager에 요소들이 인자로 잘 전달되는지 확인합니다.', () => {
    const textManager = new TextManager(); //실제 생성자함수 인스턴스
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    //인자가 잘 전달되는지 확인하는 함수를 만들자
    const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    expect(actual).toThrowError(); //
  });


  //(이 공간에서)viewManager인스턴스 만들기위해서 재료들 필요
  const textManager = new TextManager();
  const btnEl = document.createElement('button');
  const viewerEl = document.createElement('strong');
  const inpTxt = document.createElement('input');
  const viewManager = new ViewManager(textManager,{btnEl, viewerEl, inpTxt});

  it('click 이벤트가 발생했을때 changeValue 함수가 실행되는지 확인합니다.', () => {
    // 특정 모듈의 함수를 감시. (자스민함수)
    spyOn(viewManager, 'changeValue');//viewManager실행했을때 changeValue계속 감시
    btnEl.click(); //클릭을 실행시키는것. jasmine문법아님

    //toHaveBeenCalled() : 함수가 호출된적이 있는지 판별.
    //expect 애가 btnEl.click();이거 된 후에 되는거에
    expect(viewManager.changeValue).toHaveBeenCalled();
  });


  it('changeValue 함수가 실행되고나서 updateView 함수가 실행되는지 확인합니다.', () => {
    spyOn(viewManager, 'updateView');
    viewManager.changeValue();//changeValue가 실행되고나서 확인하면됨

    expect(viewManager.updateView).toHaveBeenCalled();
  });
})