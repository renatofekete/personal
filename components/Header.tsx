import styles from './Header.module.css' 

const Header = () => {

  const changeTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light')

  }

  return (
    <header>
      <nav className={styles.navbar}>
        <label className={styles.switch}>
          <input className={styles.input} onChange={e => changeTheme(e)} type="checkbox"/>
          <span className={styles.slider}></span>  
        </label>
      </nav>
    </header>
  )
} 

export default Header