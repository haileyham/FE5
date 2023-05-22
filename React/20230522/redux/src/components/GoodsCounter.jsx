import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, substractNumber } from '../modules/goodsCounter'

export default function GoodsCounter() {

  // useSelector : store의 상태 조회 Hook
  const { stock, goods } = useSelector(state => {
    console.log(state);
    return ({
      stock: state.goodsReducer.stock,
      goods: state.goodsReducer.goods
    })
  })


  // useDispatch : store의 dispatch를 함수 내부에서 사용할 수 있는 Hook
  const dispatch = useDispatch(); //dispatch 그냥 못씀. useDispatch써야함. dispacth로 쓰기위해서 변수에 한번 담아주기

  const onAddNumber = () => dispatch(addNumber());//addNumber는 action을 생성하는 함수 / action들이 dispatch로 인하여 reducer에게 전달 / modules폴더의 goodsCounter.js파일에 있음(addNumber(),SubstractNumber()) / import로 받아와야함.
  const onSubstractNumber = () => dispatch(substractNumber());

  return (
    <div>
      <h2>딥러닝 개발자 무릎 담요</h2>
      <span><strong>17,500</strong>원</span>
      <div>
        <button type="button" onClick={onSubstractNumber}>MINUS</button>
        <span>{goods}</span>
        <button onClick={onAddNumber}>PLUS</button>
      </div>
      <div>
        총 수량 <strong>{goods}</strong>
      </div>
      <div>
        <strong>{goods * 17500}</strong>원</div>
      <div>
        재고 <strong>{stock}</strong>
      </div>
    </div>
  )
}

