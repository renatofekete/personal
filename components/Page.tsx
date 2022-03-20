import Footer from './Footer'
import Header from './Header'
import styles from './Page.module.css'

type PageProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode,
}

const Page = ({children} : PageProps) => {
  return (
    <>
      <Header />
        <div className={styles.contentContainer}>
        {children}
        </div>
      <Footer />
    </>
  )
}
export default Page