import React from 'react'
import s from './Header.module.scss'
import Button from '../Button/Button'

const Header = () => {
  return (
    <>
      <header className={s.header}>
         <div className="container">
            <nav className={s.nav}>

               <div className={s.logo}>
                  <img src="/logo.svg" alt="" />
                  <img src="/hydra.svg" alt="" />
               </div>

               <div className={s.menu}>
                  <a href="">ABOUT</a>
                  <a href="">SERVICES</a>
                  <a href="">TECHNOLOGIES</a>
                  <a href="">HOW TO</a>
               </div>

               <img className={s.burger} src="/burger.svg" alt="" />

               <div className={s.btns}>
                  <button className={s.btn}>CONTACT US</button>
                  <Button>JOIN HYDRA</Button>
               </div>
            </nav>
         </div>
      </header>
    </>
  )
}

export default Header