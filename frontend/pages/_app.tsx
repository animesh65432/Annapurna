import "@/lib/i18n"
import '@/styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from 'react-toastify';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </>
}

export default appWithTranslation(MyApp);
