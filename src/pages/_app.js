import { UserProvider } from '@/contexts/UserContext'
import '../styles/global.css'
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}