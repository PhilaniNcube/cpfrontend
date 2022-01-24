import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import useCart from 'hooks/useCart';
import { API_URL } from '../../config/index';
import { parseCookies } from '../../helpers/index';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

export default function Payment({ token }) {
  const router = useRouter();

  const { user } = useContext(AuthContext);

  const [paymentMethod, setPaymentMethod] = useState('Intellimali');
  const [cardNumber, setCardNumber] = useState('');

  const [shippingDetails, setShippingDetails] = useState({});

  const [intelliToken, setIntelliToken] = useState('');

  const {
    cart,
    addCartQty,
    reduceCartQty,
    removeItemFromCart,
    cartTotal,
  } = useCart();

  useEffect(() => {
    const initialShippingDateils = JSON.parse(
      localStorage.getItem('shippingDetails'),
    );

    setShippingDetails(initialShippingDateils);
  }, []);

  console.log(shippingDetails);

  const handleClick = async () => {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: user.id,
        orderTotal: Number(cartTotal + 15000),
        streetAddress: shippingDetails.address,
        city: shippingDetails.city,
        postalCode: shippingDetails.postalCode,
        cellNumber: shippingDetails.phoneNumber,
        firstName: shippingDetails.firstName,
        lastName: shippingDetails.lastName,
        emailAddress: shippingDetails.email,
        status: 'pending',
        orderItems: cart,
        paymentMethod: paymentMethod,
      }),
    });

    const order = await res.json();

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        alert('something went wrong');
        return;
      }
    }

    console.log(order);

    const tokenRequest = async (order) => {
      if (order.id) {
        const response = axios.post(`/api/getToken`, {
          username: 'capegadgets',
          password: '9d059e3fb4efe73760d5ecee6909c2d2',
          cardNumber: cardNumber,
          terminalId: '94DVA001',
          amount: parseInt(order.orderTotal / 100).toFixed(2),
          redirectSuccess: `http://localhost:3000/account/orders/${order.id}?payment=success`,
          redirectCancel: `http://localhost:3000`,
          reference: order.id,
        });

        const { data } = await response;
        console.log(data.token);

        localStorage.setItem('intelliToken', data.token);
        // const tokenResponse = await response.data.token;
        // setIntelliToken(tokenResponse);

        window.location.href = `https://portal.intellimali.co.za/web/payment?paymentToken=${data.token}`;
      }
    };

    tokenRequest(order);
  };

  return (
    <div>
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div className="p-2">
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>
            <div className="mt-2">
              <Link href="/cart">
                <a className="focus:outline-none  focus:text-gray-500 text-base leading-4 underline  hover:text-gray-800 text-gray-600">
                  Back to cart
                </a>
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Payment Method
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <div className="mx-auto py-12 flex justify-center">
                {/* Code block starts */}
                <div className="flex items-center">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      defaultChecked
                      type="radio"
                      name="radio"
                      onChange={(e) => setPaymentMethod('Intellimali')}
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                  </div>
                  <p className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-800">
                    Intellimali
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}
                <div className="flex items-center ml-6">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      type="radio"
                      name="radio"
                      onChange={(e) => setPaymentMethod('EFT')}
                      className="checkbox appearance-none focus:outline-none border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                    />
                    <div className="check-icon hidden border-4 border-indigo-700 rounded-full w-full h-full z-1" />
                  </div>
                  <p className="ml-2 text-sm leading-4 font-normal text-gray-800 dark:text-gray-800">
                    EFT/Internet Banking
                  </p>
                </div>
                {/* Code block ends */}
                {/* Code block starts */}

                {/* Code block ends */}
                <style>
                  {`  .checkbox:checked {
                        border: none;
                    }
                    .checkbox:checked + .check-icon {
                        display: flex;
                    }`}
                </style>
              </div>
              {paymentMethod === 'Intellimali' && (
                <input
                  className="px-2  focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                  type="text"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              )}
            </div>
            <button
              onClick={handleClick}
              className="mt-8 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full hover:bg-black text-white bg-gray-800"
            >
              Complete Purchase
            </button>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  R {cartTotal / 100}
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  R150
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Total
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                R {(cartTotal + 15000) / 100}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }
        
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token,
    },
  };
}
