import App from "next/app"
import type { AppProps } from "next/app"
import Layout from "@/components/layout"
import "@/styles/globals.css"

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
