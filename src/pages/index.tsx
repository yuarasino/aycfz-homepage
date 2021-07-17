import Head from "next/head"
import Top from "@/components/home/top"
import News from "@/components/home/news"
import Member from "@/components/home/member"

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>AYCFZ/えーゆーちごふれずも</title>
      </Head>

      <Top />
      <News />
      <Member />
    </>
  )
}

export default Home
