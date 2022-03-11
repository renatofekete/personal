import styles from './Header.module.css' 

const Header = () => {

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')

  }

  return (
    <header>
      <nav className={styles.navbar}>
        <label tabIndex={0} className={styles.switch} htmlFor="switch">
          <input tabIndex={1} className={styles.input} name="switch" id="switch" onChange={e => changeTheme(e)} type="checkbox"/>
          <span tabIndex={2} className={styles.slider}></span>  
        </label>
      </nav>
    </header>
  )
}     

export default Header