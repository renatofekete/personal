import styles from './Header.module.css' 

const Header = () => {

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')

  }

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <label role={"switch"} aria-checked className={styles.switch} htmlFor="switch">
          <input className={styles.input} name="switch" id="switch" onChange={e => changeTheme(e)} type="checkbox"/>
          <span className={styles.slider}></span>  
        </label>
      </nav>
    </header>
  )
}     

export default Header