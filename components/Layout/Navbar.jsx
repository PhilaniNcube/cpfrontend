import React, { useState, useContext, Fragment } from 'react';
import Link from 'next/link';
import AuthContext from '../../context/AuthContext';

export default function Index() {
  const { user, logout } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto relative">
        <div className="py-4 mx-4 md:mx-6">
          <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 md:w-full">
            <div className="md:hidden" />
            <div
              role="img"
              aria-label="Cape Gadgets Logo"
              className="cursor-pointer"
            >
              <div className="hidden lg:block">
                <Link href="/" passHref>
                  <img src="/images/logo-wide.png" alt="" className="h-12" />
                </Link>
              </div>
              <div className="hidden md:block lg:hidden">
                <Link href="/" passHref>
                  <img src="/images/logo-wide.png" alt="" className="h-12" />
                </Link>
              </div>
              <div className="md:hidden">
                <Link href="/" passHref>
                  <img src="/images/logo-wide.png" alt="" className="h-12" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                {user ? (
                  <Fragment>
                    <li>
                      <Link href="/account">
                        <a className="text-gray-800 dark:text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          <div>
                            <svg
                              className="fill-stroke"
                              width={18}
                              height={20}
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="text-base text-right">My account</p>
                        </a>
                      </Link>
                    </li>
                    <li onClick={() => logout()}>
                      <a className="text-gray-800 dark:text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        <div>
                          <svg
                            className="fill-stroke"
                            width={18}
                            height={20}
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base text-right text-red-400">
                          Logout
                        </p>
                      </a>
                    </li>
                  </Fragment>
                ) : (
                  <Fragment>
                    <li>
                      <Link href="/account/login">
                        <a className="text-gray-800 dark:text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          <div>
                            <svg
                              className="fill-stroke"
                              width={18}
                              height={20}
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="text-base text-right">Login</p>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/account/register">
                        <a className="text-blue-800 dark:text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          <div>
                            <svg
                              className="fill-stroke"
                              width={18}
                              height={20}
                              viewBox="0 0 18 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <p className="text-base text-right text-blue-400">
                            Register
                          </p>
                        </a>
                      </Link>
                    </li>
                  </Fragment>
                )}

                <li className="relative">
                  <Link href="/cart">
                    <a className="text-gray-800 dark:text-white flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      <div>
                        <svg
                          className="fill-stroke"
                          width={20}
                          height={22}
                          viewBox="0 0 20 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 5H19"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-base text-right">Cart</p>

                      {/*
                      {cart.length > 0 && (
                        <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-white text-black">
                          {cart.length}
                        </span>
                      )} */}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:hidden flex justify-right">
              <button
                onClick={() => setShowMenu(true)}
                aria-label="open menu"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
              >
                <svg
                  className="fill-stroke"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 18H20"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-2 md:mt-3 lg::mt-4 flex items-center justify-between">
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link href="/shop?term=price:ASC">
                    <a className="dark:text-white text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      {' '}
                      Shop{' '}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/categories">
                    <a className="dark:text-white text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      {' '}
                      Categories{' '}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/brands">
                    <a className="dark:text-white text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      {' '}
                      Brands{' '}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 flex items-center dark:bg-gray-800 space-x-3 p-3 w-full md:w-72">
              <div>
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.0004 18.9999L14.6504 14.6499"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="text-sm text-gray-600 dark:text-white dark:placeholder-gray-300 bg-transparent focus:outline-none"
                placeholder="Search for products"
              />
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenu ? 'flex' : 'hidden'
          } dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white py-4`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
              <div />
              <div role="img" aria-label="Cape Gadgets Logo">
                <img src="/images/logo-wide.png" alt="" className="h-12" />
              </div>
              <button
                aria-label="close menu"
                onClick={() => setShowMenu(false)}
                className="focus:outline-none focus:ring-2 focus:ring-gray-800 text-gray-800 dark:text-white"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <ul className="flex flex-col space-y-4">
              <Link href="/shop?term=price:ASC" passHref>
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                    {' '}
                    Shop{' '}
                  </a>

                  <button
                    aria-label="Add"
                    className="dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </Link>
              <Link href="/categories" passHref>
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                    {' '}
                    Categories{' '}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </Link>
              <Link href="/brands" passHref>
                <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                  <a className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline">
                    {' '}
                    Brands{' '}
                  </a>
                  <button
                    aria-label="Add"
                    className="dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                  >
                    <svg
                      className="fill-stroke"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 3.3335V12.6668"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.33203 8H12.6654"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-full h-full flex items-end dark:bg-gray-900">
            <ul className="bg-gray-50 py-10 px-4 flex flex-col space-y-8 w-full dark:bg-gray-800">
              {user ? (
                <Fragment>
                  <li>
                    <Link href="/account">
                      <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        <div>
                          <svg
                            className="fill-stroke"
                            width={18}
                            height={20}
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base">My account</p>
                      </a>
                    </Link>
                  </li>
                  <li onClick={() => logout()}>
                    <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      <div>
                        <svg
                          className="fill-stroke"
                          width={18}
                          height={20}
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                            stroke="currentColor"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-base text-red-400">Logout</p>
                    </a>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li>
                    <Link href="/account/login">
                      <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        <div>
                          <svg
                            className="fill-stroke"
                            width={18}
                            height={20}
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base">Login</p>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/account/register">
                      <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        <div>
                          <svg
                            className="fill-stroke"
                            width={18}
                            height={20}
                            viewBox="0 0 18 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                              stroke="currentColor"
                              strokeWidth="1.25"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-base text-blue-500">Register</p>
                      </a>
                    </Link>
                  </li>
                </Fragment>
              )}

              <li>
                <Link href="/cart">
                  <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                    <div>
                      <svg
                        className="fill-stroke"
                        width={22}
                        height={22}
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5H21"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-base">Cart</p>
                    {/*
                      {cart.length > 0 && (
                        <span className="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-white text-black">
                          {cart.length}
                        </span>
                      )} */}
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
