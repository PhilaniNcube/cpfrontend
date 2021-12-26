import React, { useState } from 'react';

const BrandProducts = ({ products }) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center items-center">
      <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-start flex-col">
        <div className="">
          <p className="text-4xl font-semibold leading-9 text-gray-800">
            Products
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 justify-items-between gap-y-4 md:gap-y-8 lg:gap-y-0 gap-x-8">
          {products.map((product) => {
            return (
              <div className="group">
                <div
                  onMouseOver={() => setShow(true)}
                  onMouseOut={() => setShow(false)}
                  className="group-hover:shadow relative cursor-pointer"
                >
                  <img
                    className="hidden lg:block"
                    src="https://i.ibb.co/F0zYQdr/Rectangle-249-3.png"
                    alt="laptop-4"
                  />
                  <img
                    className="lg:hidden"
                    src="https://i.ibb.co/xhPLv7K/Rectangle-249-2.png"
                    alt="laptop-4"
                  />
                  <div className="flex justify-start flex-col absolute bottom-0 w-full">
                    <div className="ml-6">
                      <p className="text-base font-bold leading-4 text-white">
                        Macbook Pro 11
                      </p>
                    </div>
                    <div className="mt-3 ml-6 mb-6">
                      <p className="text-base font-medium leading-4 text-white">
                        $1,725.00
                      </p>
                    </div>
                    <button
                      className={
                        'bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 ' +
                        (show4 ? 'block' : 'hidden')
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandProducts;
