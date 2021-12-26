import React, { useState } from 'react';
import Link from 'next/link';

export default function BrandHeader({ brand }) {
  return (
    <div>
      <div className="flex justify-center item-center w-full py-12 px-4 md:px-6 lg:px-20">
        <div className="flex sm:flex-row flex-col bg-gray-100 py-10 px-4 md:px-6 lg:px-12 xl:px-20 justify-between items-center w-full sm:space-x-8">
          <div className="flex sm:jusitfy-start items-center sm:items-start flex-col">
            <h1 className=" mt-2 lg:mt-3 text-xl sm:text-2xl lg:text-4xl font-semibold md:leading-6 lg:leading-9 text-gray-800">
              {brand.name}
            </h1>
            <Link href="/shop?term=price:ASC" passHref>
              <button className="hidden focus:bg-gray-900 sm:block mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
                Back To Shop
              </button>
            </Link>
          </div>
          <div>
            <img
              className="mt-8 sm:mt-0 object-cover w-80 md:w-96 xl:w-96 2xl:w-auto"
              src={brand.logo.url}
              alt={brand.name}
            />
          </div>
          <Link href="/shop?term=price:ASC" passHref>
            <button className="w-full focus:bg-gray-900 sm:hidden mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
              Back To Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
