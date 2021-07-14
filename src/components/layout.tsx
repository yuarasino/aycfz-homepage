import Header from "./header"
import Footer from "./footer"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
