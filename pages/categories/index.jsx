import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../config/index';

const index = ({ categories }) => {
  console.log(categories);

  return (
    <div className="overflow-y-hidden">
      <div className="py-12 2xl:container 2xl:mx-auto px-4 md:px-6 lg:px-20 flex justify-center items-start flex-col">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-medium leading-6 md:leading-8 lg:leading-9 text-gray-800">
          Shop by Category
        </h1>
        <div className="mt-10 md:mt-6 lg:mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8 w-full">
          {categories.map((category) => {
            return (
              <Link
                key={category.name}
                href={`/categories/${category.slug}`}
                passHref
              >
                <div
                  className="flex justify-start items-start flex-col space-y-3 md:space-y-4 my-6 shadow-lg hover:shadow-sm"
                  style={{ minHeight: '25vh' }}
                >
                  <div
                    className="w-full min-h-full bg-no-repeat bg-cover bg-center rounded-md shadow-md"
                    style={{
                      backgroundImage: `url(${category.bannerImage.formats.medium.url})`,
                    }}
                  ></div>
                  <p className="text-sm md:text-base leading-4 text-gray-800 font-semibold">
                    {category.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const catRes = await fetch(`${API_URL}/categories`);
  const categories = await catRes.json();

  return {
    props: { categories },
  };
}
