import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../config/index';

const Brands = ({ brands }) => {
  return (
    <div className=" 2xl:container 2xl:mx-auto md:py-12 xl:px-20 px-0 py-9">
      <div className=" md:hidden bg-gray-50 text-gray-500 grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 lg:gap-14 lg:px-12 lg:py-20 md:py-10 md:px-6 py-12 px-20">
        {brands.map((brand) => {
          return (
            <Link href={`/brands/${brand.slug}`} key={brand.id}>
              <div className="w-56 w xl:h-10 h-56  flex justify-center items-center mx-auto lg:mt-0 md:mt-10 mt-16">
                <img
                  src={brand.logo.url}
                  alt={brand.name}
                  className=" w-full h-full  "
                />
              </div>
            </Link>
          );
        })}
      </div>

      <div className="bg-gray-50 lg:px-12 lg:py-20 md:py-10 md:px-6 py-12 px-20">
        <div className="hidden md:grid md:grid-cols-4 gap-6 text-gray-500  ">
          {brands.map((brand) => {
            return (
              <Link href={`/brands/${brand.slug}`} key={brand.id}>
                <div className="w-56 w xl:h-56 h-56  flex justify-center items-center mx-auto lg:mt-0 md:mt-10 mt-16">
                  <img
                    src={brand.logo.url}
                    alt={brand.name}
                    className=" w-full h-full  "
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Brands;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/brands`);
  const brands = await res.json();

  return {
    props: { brands },
  };
}
