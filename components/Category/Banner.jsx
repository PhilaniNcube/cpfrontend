import React from 'react';

const Banner3 = ({ category }) => {
  return (
    <div className="container mx-auto py-9 md:py-12 md:px-6 px-4">
      <div className="relative bg-gray-900 bg-opacity-40 rounded-md overflow-hidden shadow-md">
        <img
          className="hidden md:block object-center object-cover w-full h-64 md:h-80 bg-blend-overlay bg-gray-900 bg-opacity-40 mix-blend-darken"
          src={category.bannerImage.formats.large.url}
          alt="Background-img"
        />
        <img
          className="md:hidden object-center object-fill w-full h-48 md:h-full bg-blend-overlay bg-gray-900 bg-opacity-40 mix-blend-darken"
          src={category.bannerImage.formats.medium.url}
          alt="background-img"
        />
        <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
          <h1 className="text-xl md:text-6xl lg:text-6xl leading-5 md:leading-7 lg:leading-9 font-extrabold text-white">
            {category.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
