import '../styles/globals.css'
import { Layout } from '../components'
import Router, { useRouter } from 'next/router'
import nProgress from 'nprogress'
import "../styles/Nprogress.css"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from '../components/ProtectedRoute'

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());
nProgress.configure({ easing: 'ease', speed: 500, showSpinner: false, trickle: false, minimum: 0.8 })

const authProtected = ["/login", "/register"]


function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <StateContext>
      <Layout>
        <Toaster />
        {authProtected.includes(router.pathname) ? (<ProtectedRoute><Component {...pageProps} /></ProtectedRoute>) : (<Component {...pageProps} />)}

      </Layout>
    </StateContext>
  )
}

export default MyApp
