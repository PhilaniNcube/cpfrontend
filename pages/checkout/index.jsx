import React, { useState, useContext, Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import AuthContext from '../../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import useCart from 'hooks/useCart';
import { NEXT_URL } from '../../config/index';

const CheckoutLogin = () => {
  const { error, user, login } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const { cart, cartTotal } = useCart();

  const router = useRouter();

  console.log(cart);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div
      className="
				flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16	md:py-12 py-9 px-4 md:px-6 lg:px-20	xl:px-44"
    >
      <ToastContainer />
      <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
        {!user && (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col justify-start items-start"
          >
            <div className="">
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>
            <div className="mt-2">
              <Link href="/cart">
                <a className="text-base leading-4 focus:outline-none focus:underline hover:underline hover:text-gray-800 text-gray-600">
                  Back to my cart
                </a>
              </Link>
            </div>
            <div className="mt-12">
              <p className="text-lg leading-4 text-gray-800">
                Sign in or continue as{' '}
                <Link href="/checkout/step2">
                  <a className="focus:outline-none hover:underline font-semibold md:focus:underline focus:underline">
                    guest?
                  </a>
                </Link>
              </p>
            </div>

            <div className="mt-12 flex flex-col justify-start items-start w-full space-y-8">
              <input
                className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600
			  py-4 w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                className="focus:ring-2 focus:ring-gray-500 focus:outline-none px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600
			  py-4 w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="mt-8	text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full
			md:w-4/12 lg:w-full	text-white bg-gray-800"
            >
              Sign In
            </button>
            <div className="mt-4 flex justify-between items-center w-full">
              <a
                href="/"
                className="focus:outline-none focus:underline hover:underline text-sm	leading-none text-gray-600"
              >
                Forgot password?
              </a>
              <a
                href="/"
                className="focus:outline-none focus:underline	hover:underline	text-sm	leading-none text-gray-600"
              >
                Creat an account
              </a>
            </div>
          </form>
        )}

        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
          <div>
            <h1 className="text-2xl font-semibold leading-6 text-gray-800">
              Order Summary
            </h1>
          </div>
          <div className="flex mt-7 flex-col items-end w-full space-y-6">
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">Subtotal</p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                R{(cartTotal / 100).toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between w-full items-center">
              <p className="text-lg leading-4 text-gray-600">
                Shipping charges
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-600">
                R150.00
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full items-center mt-32">
            <p className="text-xl font-semibold leading-4 text-gray-800">
              Total
            </p>
            <p className="text-lg font-semibold leading-4 text-gray-800">
              R{((cartTotal + 15000) / 100).toFixed(2)}
            </p>
          </div>
          <button
            onClick={() => router.push('/checkout/step2')}
            className="mt-8	text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black leading-4 py-4 w-full
			md:w-4/12 lg:w-full	text-white bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutLogin;
