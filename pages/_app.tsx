import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../AppContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
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
