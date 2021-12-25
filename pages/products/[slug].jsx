import React, { Fragment } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { API_URL } from '../../config/index';
import useCart from 'hooks/useCart';

const Product = ({ product }) => {
  console.log(product);
  const router = useRouter();

  const { cart, addItemToCart } = useCart();

  console.log(cart);

  const handleClick = (e) => {
    e.stopPropagation();
    addItemToCart(product);
  };

  return (
    <Fragment>
      <div className="flex justify-center items-center w-full">
        <div className="md:w-10/12 lg:w-8/12 xl:w-full flex justify-start flex-col items-start py-16 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex jusitfy-start items-start flex-col space-y-3">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              Product details
            </p>
            <p className="text-base leading-6 md:leading-4 text-gray-600">
              <span className="hover:underline font-bold">
                <Link href="/"> Home</Link>
              </span>{' '}
              {'>'}{' '}
              <span className="hover:underline font-semibold">
                <Link href={`/categories/${product.category.slug}`}>
                  {product.category.name}
                </Link>
              </span>{' '}
              {'>'}{' '}
              <span className="hover:underline font-medium">
                <Link href={`/brands/${product.brand.slug}`}>
                  {product.brand.name}
                </Link>
              </span>{' '}
              {'>'} {product.name}
            </p>
          </div>
          <div className="mt-5 flex jusitfy-start  items-start xl:items-center flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8">
            <div className="w-full mt-5 flex jusitfy-start items-stretch flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 xl:space-x-8">
              <div className="flex justify-start items-start flex-row ">
                <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-3 xl:grid-cols-1 justify-items-start gap-x-2 xl:gap-x-0 xl:gap-y-4">
                  {product.images.map((image) => {
                    return (
                      <img
                        key={image.id}
                        className="w-full"
                        src={image.formats.small.url}
                        alt={image.name}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <img
                  className="hidden xl:block w-full shadow shadow-sky-100 rounded"
                  src={product.mainImage.formats.small.url}
                  alt={product.name}
                />
                <img
                  className="xl:hidden w-full"
                  src={product.mainImage.formats.small.url}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="w-full xl:w-7/12 flex justify-start items-start flex-col">
              <p className="text-xl lg:text-2xl font-semibold leading-5 xl:leading-6 text-gray-800 ">
                {product.name}
              </p>
              <p className="text-lg md:text-xl font-medium leading-5 text-gray-600 mt-3">
                R{(product.price / 100).toFixed(2)}
              </p>
              <p className="text-base leading-normal text-gray-600 mt-5 ">
                {product.description}
              </p>
              <p className="text-base font-medium leading-4 text-gray-600 mt-6">
                Colour: {product.colour}
              </p>

              <div className="mt-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-4 ">
                <button
                  onClick={handleClick}
                  className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-4 md:px-8 bg-gray-800 text-center text-white border border-gray-800 "
                >
                  Add to cart
                </button>
                <Link href="/shop?term=price:ASC">
                  <button className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-300 text-base font-medium leading-4 bg-white border border-gray-800  md:px-8 text-center text-gray-800">
                    Back to Shop
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/products?slug=${slug}`);
  const products = await res.json();

  return {
    props: {
      product: products[0],
    },
  };
}
