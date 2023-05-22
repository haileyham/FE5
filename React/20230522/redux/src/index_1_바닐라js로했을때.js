const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number"); // 수량
const quantity = document.getElementById("quantity"); // 페이지 하단에 총 수량
const totalPrice = document.getElementById("total"); // 페이지 하단에 총 가격

const PRICE = 17500;

let count = 0; //redux라고 생각했을때 state



//redux라고 생각했을때 밑에가 render임

// UI Update - text
const updateResult = (c) => {
    number.innerText = count; //이것도 c해도됨 어차피 받는게 count여서
    quantity.innerHTML = c;
    totalPrice.innerHTML = c * PRICE;
};



//redux라고 생각했을때 밑에가 reducer함수라고 볼 수 잇음

// State Change
const addNumber = () => {
    count += 1;
    minus.disabled = false;
    updateResult(count);
};

// State Change
const substractNumber = () => {
    count -= 1;
    plus.disabled = false;
    updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);


// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);