import Navbar from '../components/NavBar'
import '../styles/globals.css'
import '../components/Navbar.css'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
