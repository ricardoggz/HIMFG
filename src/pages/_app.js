import { Montserrat } from 'next/font/google'
import { UserProvider, CourseProvider } from '@/contexts'
import { Layout } from '@/components'
import '../styles/global.css'

const font = Montserrat({ subsets: ['latin'] })
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CourseProvider>
        <main className={font.className}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </main>
      </CourseProvider>
    </UserProvider>
  )
}