// action 생성함수
// export를 붙이면 다른 모듈에서 부를때 {} 담아서 부를 수 있음
export const addNumber = () => {
  return { type: "ADD" }
}

export const substractNumber = () => {
  return { type: "STUBSTRACT" }
}

const initialState = {//state초기값
  stock: 100,
  goods: 1
}

//reducer
const goodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        stock: state.stock - 1,
        goods: state.goods + 1
      }
    case "SUBSTRACT":
      return {
        ...state,
        stock: state.stock + 1,
        goods: state.goods - 1
      }
    default:
      return state;
  }
}

export default goodsReducer
//export default 의 경우 다른 모듈에서 부를때 중괄호 없이 그냥 부름 
//action함수는 export붙여서 {} 로 부르고 reducer은 그냥 default 하는게 관습임