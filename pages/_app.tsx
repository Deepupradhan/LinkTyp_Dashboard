import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './UserContext';


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <UserProvider >
    <Component {...pageProps} />
    <ToastContainer />
    </UserProvider >
    </>
  )
  
}
