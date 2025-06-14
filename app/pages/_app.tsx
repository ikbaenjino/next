// pages/_app.tsx
import '../styles/globals.css';
import Navbar from '../components/Navbar.client';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}