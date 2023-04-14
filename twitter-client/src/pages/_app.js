import Layout from '@/layout/Layout'
import '@/styles/style.scss'



export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>)
  return getLayout(<Component {...pageProps} />)
}
