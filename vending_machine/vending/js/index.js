import ColaGenerator from "./classes/colaGenerator.js"; //자동완성후에 .js잊지말기!
import VendingMachineEvents from "./classes/vendingMachineEvents.js"; //모듈 불러오는 키워드

const colaGenerator = new ColaGenerator();
const vendingMachineEvents = new VendingMachineEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
// index.js 모듈로 연결되어있는데 탑레벨.
// 최상위에서는 await 써도 잘 작동함. async 사용 안해도 (근데 나온지 얼마 안된 것임)


//걍 결론은 콜라버튼 리스트들은 데이터를 받아와야하는 애들이니까 / 애초에 데이터를 가지고있는 애들이 btn-cola 얘네 / 다른애들은 데이터 처리가 안돼도 상관없는 애들
await colaGenerator.setup(); //setup() 다했을때 호출되도록
vendingMachineEvents.bindEvent();

// (async function(){
//   await colaGenerator.setup();
// vendingMachineEvents.bindEvent();
// })
// 기존에는 이렇게 썼음. 근데 2021년에 탑레벨 await 나온것임. 위아래 상관없이 사용 가능

// (async function () {
//     await colaGenerator.setup();
//     vendingMachineEvents.bindEvent();
// })()
