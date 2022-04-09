import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const setInitialTheme = `
    function getUserPreference() {
      return localStorage.getItem('theme') || "light"
    }
    document.documentElement.dataset.theme = getUserPreference()
  `

  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{__html: setInitialTheme}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}