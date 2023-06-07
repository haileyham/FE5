import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
//npm install normalize.css
import logo from '../img/logo.svg'

export default function Header() {
  return (
    <div>
      <header>
        <div className={styles["header-wrap"]}>
          <h1>
            <Link href="./">
              <img className="logo" src={logo} alt="두근두근 비밀일기" />
            </Link>
          </h1>
          <div>
            <Link to="./signup" className="btn-join">회원가입</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
