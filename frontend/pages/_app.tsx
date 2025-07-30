import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from "next-i18next";
import { ToastContainer } from 'react-toastify';
import { useAuthstore } from "@/store/useauth"
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { loadToken } = useAuthstore();

  useEffect(() => {
    loadToken();
  }, []);
  return <>
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
