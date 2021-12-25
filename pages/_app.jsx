import { Fragment } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import CartProvider from '@/context/CartContext';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
        </CartProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
