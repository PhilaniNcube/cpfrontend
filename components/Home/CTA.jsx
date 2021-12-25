import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div>
      <div className="bg-gradient-to-l from-gray-200 to-gray-100  flex justify-center item-center w-full py-12 px-4 md:px-6 lg:px-20">
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:space-x-8">
          <div className="md:hidden flex md:w-6/12 2xl:w-6/12 sm:jusitfy-start items-center md:items-start flex-col">
            <p className=" text-xl md:text-2xl lg:text-4xl text-center md:text-left font-semibold leading-6 md:leading-5 lg:leading-10 text-gray-800">
              Affordable University Supplies
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Order your laptop, textbooks, stationery, headphones and lots more
              from Cape Gadgets
            </p>
            <Link href="/shop?term=price:ASC" passHref>
              <button className="hidden focus:bg-gray-900 md:block mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
                Show Now
              </button>
            </Link>
          </div>
          <div>
            <img
              className="mt-8 md:mt-0 object-cover w-80 md:w-96 xl:w-96 2xl:w-auto"
              src="/images/hero-small.jpg"
              alt="headphones"
            />
          </div>
          <div className="hidden md:flex md:w-6/12 2xl:w-6/12 sm:jusitfy-start items-center md:items-start flex-col">
            <p className="w-60 lg:w-80 text-xl md:text-2xl lg:text-4xl text-center md:text-left font-semibold leading-6 md:leading-7 lg:leading-10 text-gray-800">
              Affordable University Supplies
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Order your laptop, textbooks, stationery, headphones and lots more
              from Cape Gadgets
            </p>
            <Link href="/shop?term=price:ASC" passHref>
              <button className="hidden focus:bg-gray-900 md:block mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
                Show Now
              </button>
            </Link>
          </div>
          <Link href="/shop?term=price:ASC" passHref>
            <button className="w-full focus:bg-gray-900 md:hidden mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
              Show Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
