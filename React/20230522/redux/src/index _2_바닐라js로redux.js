import { createStore } from "redux";//권장안하기때문/근데 기초수업이니까 일단 go

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;



// dispatch 함수 선언
const addNumber = () =>{//dispatch를 부르는 함수를 만들어서 사용하면 가공가능
  store.dispatch({type:"ADD"}); 
}

const substractNumber = () =>{
  store.dispatch({type:"SUBSTRACT"});
}



// reducer 함수 선언
const countReducer = (state = 0,action)=>{//state값 직접할당해서 초기화해줄수도있음
  switch(action.type){
    case "ADD":
      minus.disabled = false;
      return state + 1;
    case "SUBSTRACT":
      plus.disabled = false;
      return state - 1;
    default :{
      return state;
    }
  }

}

const store = createStore(countReducer);//reducer이름 

let count = 0; 



// JS part

// UI Update - text
const handleWrite = () => {
    number.innerText = store.getState();
    quantity.innerHTML = store.getState();
    totalPrice.innerHTML = store.getState() * PRICE;
};

store.subscribe(handleWrite);



// //redux라고 생각했을때 밑에가 reducer함수라고 볼 수 잇음

// // State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// // State Change
// const substractNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// // Init
// number.innerHTML = count;
// updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);