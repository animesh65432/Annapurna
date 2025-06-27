import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { config } from "./config/index.ts"

createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
    <App />
    <ToastContainer />
  </GoogleOAuthProvider>
);
