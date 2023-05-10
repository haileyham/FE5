import React from 'react'
import './Modal.css'

export default function Modal({ children, modalClose }) {//props 전개구문으로 가져오기 / children도 가져오는 것 APP.js의 h2,p,a같은 요소태그들
    return (
        <div className='modal-backdrop'>
            <article className='modal'>
                {children}
                {/* <h2>홈페이지에 오신것을 환영합니다!</h2>
                <p>좋은하루 되세요!</p> */}
                <button onClick={modalClose}>닫기</button>
            </article>
        </div>
    )
}
