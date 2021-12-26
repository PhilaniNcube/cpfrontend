import React, { useContext } from 'react';
import Link from 'next/link';
import AuthContext from '@/context/AuthContext';

const Footer3 = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4">
      <div className="py-14 border-b border-t border-gray-200 lg:flex items-center justify-between sm:space-y-10 lg:space-y-0">
        <div className="lg:w-1/2 sm:flex items-start justify-between">
          <div className="md:w-1/2">
            <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">
              Customer services
            </h2>
            <Link href="/contact">
              <a>
                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                  Contact
                </p>
              </a>
            </Link>
            <Link href="/faq">
              <a>
                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                  FAQs
                </p>
              </a>
            </Link>
          </div>
          <div className="md:w-1/2 md:flex items-center justify-center mt-9 md:mt-0">
            <div className="flex flex-col items-left justify-start">
              <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">
                Online services
              </h2>
              <Link href="/faq#payments">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Payments
                  </p>
                </a>
              </Link>
              <Link href="/faq#shipping">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Shipping
                  </p>
                </a>
              </Link>
              {user && (
                <Link href="/account">
                  <a>
                    <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                      My Account
                    </p>
                  </a>
                </Link>
              )}
            </div>
          </div>
          <div className="lg:hidden md:w-1/2 sm:pt-0 md:flex items-center justify-center mt-9 md:mt-0">
            <div className="flex flex-col items-left justify-start">
              <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">
                Privacy &amp; legal
              </h2>
              <Link href="/privacy">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Privacy policy
                  </p>
                </a>
              </Link>
              <Link href="/terms">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Terms &amp; conditions
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 sm:flex items-start justify-between">
          <div className="hidden md:w-1/2 sm:pt-0 pt-4 lg:flex items-center lg:justify-center">
            <div className="flex flex-col items-left justify-start">
              <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">
                Privacy &amp; legal
              </h2>
              <Link href="/privacy">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Privacy policy
                  </p>
                </a>
              </Link>
              <Link href="/terms">
                <a>
                  <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">
                    Terms &amp; conditions
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 items-center justify-center">
        <Link href="/">
          <a className="cursor-pointer">
            <img src="/images/logo-wide.png" alt="" className="h-12" />
          </a>
        </Link>
        <p className="text-sm text-center text-gray-500 pt-3">
          © {new Date().getFullYear()} Cape Gadgets. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer3;
