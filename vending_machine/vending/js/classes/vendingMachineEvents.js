class VendingMachineEvents {
  constructor() { //class 교실이라 생각하고 constructor은 청소도구라생각, 밑에 메서드들은 청소도구를 갖고, 각자의 역할들을 맡았다고 생각.
    //html section1을 담당하도록
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');//inputmoney의 형제요소 btn가져옴
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');

    //html section2을 담당하도록
    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong'); //입금액

    //html section3을 담당하도록
    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  //장바구니 콜라 생성 함수
  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');

    stagedItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt="">
            ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
        `;
    this.stagedList.append(stagedItem);
  }


  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼을 누르면 
     * 1) 소지금 === 소지금 - 입금액
     * 2) 잔액 === 기존 잔액 + 입금액
     * 3) 입금액이 소지금보다 많으면 경고창 출력
     * 4) 입금액이 정상적으로 입금되면 입금창은 초기화 되야한다.
     *입금액 : 음료구매에 필요한 금액 (밴딩머신에 입금할 금액)
     *소지금 : 사용자가 들고 있는 금액(충전해 놓은 금액)
     */
    this.btnPut.addEventListener('click', () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);//input안에 우리가 입력한 값이 얼마인지 가져올 수 있음 / parseInt로 정수처리
      // 소지금 
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));//,없애려고 replaceAll씀

      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));//잔액 가져옴

      if (inputCost) {
        // 입금액이 소지금 보다 적거나 같다면
        if (inputCost <= myMoneyVal && inputCost > 0) {//myMoneyVal 상수로 HTML처리해서 버튼으로 누를때는 -값걱정안해도 되는데 키보드 입력했을때는 -값 입력되기 때문에 JS처리해야함
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';//myMoneyVal은 25,000원 //format(number) 메소드는 숫자를 통화 형식에 맞게 변환, 각 나라의 화폐단위로 해주는 것 //쉼표 찎히는 위치 자동 계산..

          //> const koDtf = new Intl.DateTimeFormat("ko", { dateStyle: "long" });
          // undefined
          //   > koDtf.format(new Date())
          // '2022년 3월 8일'

          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';

          // 입금액이 소지금보다 많다!
        } else {
          alert('소지금이 부족합니다.');
        }
        // 입금액 초기화 
        this.inputCostEl.value = "";
      }
    });


    /**
     * 2. 거스름돈 반환 버튼
     * 1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     * 2) 반환버튼을 누르면 잔액창이 초기화됩니다.
     */
    this.btnReturn.addEventListener('click', () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));//,없애려고 replaceAll씀

      // 소지금 
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));//잔액 가져옴

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 장바구니 채우기
     * 1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     * 2) 아이템 가격이 잔액보다 크다면 경고메세지를 줍니다.
     * 3) 아이템이 장바구니에 들어갑니다.
     * 4) 아이템의 count가 -1이 됩니다. 아이템의 카운트가 0이되면 품절 표시를 합니다.
     */

    //비동기라서 위에 안하고 바로 안불러와줌ㅠ 그래서 밑에 여기로 뺌/그리고 index.js에 await colaGenerator.setup();해줌
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
      item.addEventListener('click', (event) => {
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        const targetElPrice = parseInt(event.currentTarget.dataset.price);//리스너 달려있는 놈, dataset은 해당요소 data에 접근하는 메서드

        if (balanceVal >= targetElPrice) {
          //잔액(기계돈)이 아이템 가격보다 같거나 클 경우
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

          //장바구니 콜라 생성
          this.stagedItemGenerator(event.currentTarget);
          // for (const item of this.stagedList) {

          // }

        } else {
          alert('입금한 금액이 부족합니다.');
        }
      })
    })
  }
}

export default VendingMachineEvents;