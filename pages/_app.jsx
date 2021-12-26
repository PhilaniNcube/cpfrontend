import { Fragment } from 'react';
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '../components/Layout/Navbar';
import '../styles/globals.css';
import CartProvider from '@/context/CartContext';
import Footer3 from '../components/Layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer3 />
        </CartProvider>
      </AuthProvider>
    </Fragment>
  );
}

export default MyApp;
