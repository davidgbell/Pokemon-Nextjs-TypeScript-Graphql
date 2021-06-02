import '../styles/globals.css';
import { AppProps } from 'next/app';
import { CaughtProvider } from '../contexts/CaughtContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CaughtProvider>
      <Component {...pageProps} />
    </CaughtProvider>
  );
}

export default MyApp;
