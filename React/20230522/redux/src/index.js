import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';//react에서 가져오면 안되고 redux꺼 써야함
import GoodsCounter from './components/GoodsCounter'
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구



const store = createStore(rootReducer,composeWithDevTools());//하나로 합친 reducer 가져오기(여러개의 reducer를 하나처럼 관리 가능)
console.log(store.getState());



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
    <GoodsCounter/>
  </Provider>
);