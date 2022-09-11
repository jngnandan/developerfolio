import '../styles/globals.css'
import {ContentProvider} from '../context/ContentContext'

function MyApp({ Component, pageProps }) {
  return (
  <ContentProvider>
  <Component {...pageProps} />
  </ContentProvider>)
}

export default MyApp
