import Link from 'next/link'
import styles from './Header.module.css' 
import SunSvg from '../public/assets/icons/sun.svg'
import MoonSvg from '../public/assets/icons/moon.svg'
import { useContext, useEffect, useState } from 'react'
import AppContext from '../AppContext'

const Header = () => {

  

  const context = useContext(AppContext)
  let { theme } = context.state
  

  // CHANGE THEME WITH SWITCHER
  /*const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')

  }*/

  const changeTheme = () => {
    let newTheme = theme === 'dark' ? 'light' : 'dark'
    context.setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    saveToLocalStorage("theme", newTheme)  
  }

  const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)  
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navigation}>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/projects`}>Projects</Link>
          </li>
        </ul>
        <div className={styles.svgSwitch} onClick={changeTheme}>
          {theme === 'light' ? <MoonSvg/> : <SunSvg/>}
        </div>
        {/*
        <label role={"switch"} aria-checked className={styles.switch} htmlFor="switch">
          <input className={styles.input} name="switch" id="switch" onChange={e => changeTheme(e)} type="checkbox"/>
          <span className={styles.slider}></span>  
        </label>
        */}
      </nav>
    </header>
  )
}     

export default Header