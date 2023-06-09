import { Montserrat } from 'next/font/google'
import { UserProvider } from '@/contexts/UserContext'
import { Layout } from '@/components'
import '../styles/global.css'

const font = Montserrat({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
        <main className={font.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </main>
    </UserProvider>
  )
}