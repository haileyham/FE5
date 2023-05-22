// modules파일의 두가지 reducer를 합쳐줌
import {combineReducers} from 'redux';
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';

// rootReducer안에 객체 형태로 두가지 reducer들어있어서 밖에서는 rootReducer만 부르면 됨
const rootReducer = combineReducers({
  goodsReducer,
  stockReducer
})

export default rootReducer;