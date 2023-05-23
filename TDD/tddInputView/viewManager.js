// class ViewManager{
//   constructor(textManager, options){
//     if(textManager.constructor !== TextManager){//textManager인자를 통해서 만들어진게 TextManager가 생성한거 맞아?
//       throw Error("올바른 textManager 객체가 전달되지 않았습니다.")
//     }
//     if(!options.btnEl || !options.viewerEl || !options.inpTxt){//options에 btnEl,viewerEl,inpTxt가 없으면 부정연산자(!) 때문에 if가 true가 됨. || 이기때문에 하나라도 true라면 반환. 그래서 블록문이 실행하게 됨.
//       throw Error("전달받지 못한 요소가 존재합니다.")
//     }


//     //index.html에 변수선언함
//     this.textManager = textManager;
//     this.inpTxt = options.inpTxt; //인자로 받아온 것의 inpTxt
//     this.viewerEl = options.viewerEl;
//     this.btnEl = options.btnEl;

//     options.btnEl.addEventListener('click',()=>{
//       this.changeValue();
//     })
//   }

//   changeValue(){
//     this.textManager.setValue({data : this.inpTxt.value});
//     this.updateView();
//   }

//   updateView(){//html strong에 보여줄 것임 / 화면에 뿌려주는 역할
//     this.viewerEl.txtContent = this.TextManager.getValue();
//   }
// }


class ViewManager {
  constructor(textManager, options) {
      if (textManager.constructor !== TextManager) {
          throw Error("올바른 textManager 객체가 전달되지 않았습니다.");
      }

      if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
          throw Error("전달받지 못한 요소가 존재합니다!");
      }

      this.textManager = textManager;
      this.inpTxt = options.inpTxt;
      this.viewerEl = options.viewerEl;

      options.btnEl.addEventListener("click", () => {
          this.changeValue();
      })
  }

  changeValue() {
      this.textManager.setValue({ data: this.inpTxt.value });
      this.updateView();
  }

  updateView() {
      this.viewerEl.textContent = this.textManager.getValue();
  }
}