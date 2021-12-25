import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';

import { API_URL } from '../config';
import axios from 'axios';
import useCart from 'hooks/useCart';

export default function Cart() {
  const {
    cart,
    addCartQty,
    reduceCartQty,
    removeItemFromCart,
    cartTotal,
  } = useCart();

  console.log(cart);

  return (
    <div className="container mx-auto">
      <div className="py-9 px-4 md:px-6 md:py-12 w-full">
        <div className="">
          <p className="text-base leading-4 lg:leading-none text-gray-600">
            <Link href="/" passHref>
              <span className="font-bold hover:underline">Home</span>
            </Link>
            /{' '}
            <Link href="/shop?term=price:ASC" passHref>
              <span className="font-semibold hover:underline">Shop</span>
            </Link>{' '}
            /Cart
          </p>
          <h1 className="text-3xl lg:text-4xl leading-4 lg:leading-9 font-semibold text-gray-800 mt-2">
            Your Shopping Cart
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Cart Items */}

          {cart.length === 0 ? (
            <div className="md:w-full">
              <h2 className="text-md lg:text-xl leading-4 lg:leading-9 font-semibold text-gray-800 mt-2">
                Your Shopping Cart Is Empty
              </h2>
            </div>
          ) : (
            <div className="md:w-full">
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full flex flex-col md:flex-row items-strech mt-10 md:mt-14 lg:mt-16 pb-12 border-gray-200 border-b"
                  >
                    <div className="flex justify-end md:hidden">
                      <button className="mt-2">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                            fill="#1F2937"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center md:w-2/5">
                      <img
                        className="object-center object-cover"
                        src={item.mainImage.formats.small.url}
                        alt={item.name}
                        role="img"
                      />
                    </div>
                    <div className="md:flex hidden w-full justify-between md:ml-6">
                      <div className="w-full">
                        <div className="flex flex-row justify-between">
                          <div className="flex justify start">
                            <p className="text-2xl font-semibold leading-normal text-gray-800">
                              {item.name}
                            </p>
                          </div>
                          <div className="flex justify-end">
                            <button
                              onClick={() => removeItemFromCart(item.id)}
                              aria-label="Cancel product"
                              className="mt-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                                  fill="#1F2937"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <p className="text-base leading-none text-gray-800 mt-4">
                          R{(item.price / 100).toFixed(2)}
                        </p>
                        <div className="mt-20 flex w-full items-center justify-between">
                          <div className="w-full flex flex-col h-full md:flex-row justify-between">
                            <div className="flex justify-start">
                              <div className=" flex items-center justify-center space-x-3">
                                <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                                  <button
                                    onClick={() => reduceCartQty(item)}
                                    aria-label="decrease quantity"
                                    className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                                  >
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M10 4L6 8L10 12"
                                        stroke="#1F2937"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                  <p className="quantity2 text-base text-gray-800">
                                    {item.qty}
                                  </p>
                                  <button
                                    onClick={() => addCartQty(item)}
                                    aria-label="increase quantity"
                                    className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                                  >
                                    <svg
                                      width={16}
                                      height={16}
                                      viewBox="0 0 16 16"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6 4L10 8L6 12"
                                        stroke="#1F2937"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="hidden md:block  justify-end">
                              <p className="md:mt-3 text-gray-800 text-right">
                                <span className="text-xl leading-tight text-gray-800">
                                  Total:{' '}
                                </span>
                                <span className="text-xl font-medium">
                                  R
                                  {(
                                    (item.price * Number(item.qty)) /
                                    100
                                  ).toFixed(2)}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div />
                    </div>
                    <div className="flex flex-col md:hidden">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="mt-1 text-2xl font-semibold leading-6 text-gray-800">
                            {item.name}
                          </h2>
                        </div>
                      </div>
                      <p className="mt-4 w-11/12 text-base leading-4 text-gray-600">
                        R{(item.price / 100).toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-6">
                        <div>
                          <p className="mt:mt-3 text-gray-800 text-right">
                            <span className="text-xl leading-5 text-gray-800">
                              Total:{' '}
                            </span>
                            <span className="text-xl leading-5 font-medium">
                              R
                              {((item.price * Number(item.qty)) / 100).toFixed(
                                2,
                              )}
                            </span>
                          </p>
                        </div>
                        <div className="  flex items-center justify-center space-x-3">
                          <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                            <button
                              onClick={() => reduceCartQty(item)}
                              aria-label="decrease quantity"
                              className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10 4L6 8L10 12"
                                  stroke="#1F2937"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                            <p className="quantity2 text-base text-gray-800">
                              {item.qty}
                            </p>
                            <button
                              onClick={() => addCartQty(item)}
                              aria-label="increase quantity"
                              className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                            >
                              <svg
                                width={16}
                                height={16}
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 4L10 8L6 12"
                                  stroke="#1F2937"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/*Order Summary */}
          <div className="flex justify-center items-center flex-col-reverse md:flex-row md:mt-28 mt-20 w-full">
            <div className="w-full md:w-9/12 lg:w-9/12 p-4 md:p-10 bg-gray-50">
              <p className="text-2xl font-semibold leading-normal text-gray-800">
                Order Summary
              </p>
              <div className="flex items-center justify-between mt-14">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Subtotal
                </h3>
                <p className="text-base font-medium leading-none text-gray-800">
                  R{(cartTotal / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between mt-10">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Shipping Charges
                </h3>
                <p className="text-base font-medium leading-none text-gray-800">
                  R{(15000 / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-between mt-32">
                <h3 className="text-xl font-semibold leading-tight text-gray-800">
                  Total Price
                </h3>
                <p className="text-2xl font-semibold text-gray-800">
                  R{((cartTotal + 15000) / 100).toFixed(2)}
                </p>
              </div>
              <Link href="/checkout" passHref>
                <button className="focus:outline-none hover:focus:ring-2 hover:focus:ring-offset-2 hover:focus:ring-gray-800 w-full mt-4 bg-gray-800 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 py-5 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                  Proceed to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
