import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../AppContext'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("")
  const setThemeFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      let themeOnLoad = localStorage.getItem('theme') || "light"
      setTheme(themeOnLoad) 
      document.documentElement.setAttribute('data-theme', themeOnLoad as string)
    }
  }
  useEffect(() => {
    setThemeFromLocalStorage()
  }, [])
  
  return (
    <AppContext.Provider value={{
      state: {
        theme: theme
      },
      setTheme: setTheme
    }}>
    <Component {...pageProps} />
    </AppContext.Provider>
  )
}

export default MyApp
