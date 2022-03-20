import Footer from './Footer'
import Header from './Header'

type PageProps = {
  children: JSX.Element | JSX.Element[],
}

const Page = ({children} : PageProps) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}
export default Page