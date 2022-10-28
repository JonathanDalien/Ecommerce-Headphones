import '../styles/globals.css'
import { Layout } from '../components'
import Router from 'next/router'
import nProgress from 'nprogress'
import "../styles/Nprogress.css"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
nProgress.configure({ easing: 'ease', speed: 500, showSpinner: false, trickle: false, minimum: 0.8 })


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
