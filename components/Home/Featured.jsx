import React from 'react';
import Link from 'next/link';

const Featured = () => {
  return (
    <div className="xl:container xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="hidden lg:flex justify-center items-center space-x-8">
          <div className="relative bg-blend-overlay bg-slate-500 bg-opacity-40">
            <img
              src="/images/laptops-wide.jpg"
              alt="Laptops"
              className="h-96 object-center object-cover "
            />
            <div className="absolute z-10 bottom-0 ml-12 mb-12">
              <h1 className="text-4xl font-semibold text-white">Laptops</h1>
              <Link href="/categories/laptops" passHref>
                <button className="border border-white py-4 px-9 bg-white bg-opacity-0 md:hover:bg-opacity-100 hover:text-black transition duration-150 text-base font-medium text-white mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50 hover:bg-opacity-10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/headphones-wide.jpg"
              alt="headphones"
              className="h-96 object-center object-cover"
            />
            <div className="absolute z-10 bottom-0 ml-12 mb-12">
              <h1 className="text-4xl font-semibold text-white">Headphones</h1>
              <Link href="/categories/headphones">
                <button className="border border-white py-4 px-9 bg-white bg-opacity-0 md:hover:bg-opacity-100 hover:text-black transition duration-150 text-base font-medium text-white mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50 hover:bg-opacity-10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:hidden justify-center items-center space-y-6">
          <div className="relative">
            <img
              src="/images/laptops-wide.jpg"
              alt="Laptops"
              className="object-center object-cover h-96 md:h-auto"
            />
            <div className="absolute bottom-0 px-3 md:px-10 pb-6 md:pb-10 w-full">
              <h1 className="text-xl font-semibold text-white">Laptops</h1>
              <Link href="/categories/laptops" passHref>
                <button className="border border-white py-4 px-8 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-black transition duration-150 text-center w-full lg:w-5/12 text-base font-medium text-white mt-4 md:mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50 md:hover:bg-opacity-10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/headphones-wide.jpg"
              alt="headphones"
              className="object-center object-cover h-96 md:h-auto"
            />
            <div className="absolute bottom-0 px-3 md:px-10 pb-6 md:pb-10 w-full">
              <h1 className="text-xl font-semibold text-white">Headphones</h1>
              <Link href="/categories/headphones">
                <button className="border border-white py-4 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-black transition duration-150 text-center w-full lg:w-5/12 text-base font-medium text-white mt-4 md:mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50 md:hover:bg-opacity-10">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
