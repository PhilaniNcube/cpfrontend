import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';

const useCart = () => useContext(CartContext);

export default useCart;
