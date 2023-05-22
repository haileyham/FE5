// action 생성함수
// export를 붙이면 다른 모듈에서 부를때 {} 담아서 부를 수 있음
export const sale = () => {
  return { type: "SALE" }
}

export const sold = () => {
  return { type: "SOLD_OUT" }
}

const initialState = {//state초기값
  message : '판매중!'
}

//reducer
const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SALE":
      return {
        ...state,
        message: '판매중!'
      }
    case "SOLD_OUT":
      return {
        ...state,
        message: '매진!'
      }
    default:
      return state;
  }
}

export default stockReducer
//export default 의 경우 다른 모듈에서 부를때 중괄호 없이 그냥 부름 
//action함수는 export붙여서 {} 로 부르고 reducer은 그냥 default 하는게 관습임