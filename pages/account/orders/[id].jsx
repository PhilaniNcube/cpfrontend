import { API_URL } from '../../../config/index';
import { parseCookies } from '../../../helpers/index';
import React from 'react';

const OrderSummary = ({ order, token }) => {
  console.log(order);

  return (
    <div className="py-14 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex flex-col xl:flex-row justify-center items-center w-full xl:space-x-8 space-y-8 md:space-y-10 xl:space-y-0">
        <div className="flex justify-center items-center w-full xl:w-8/12 flex-col space-y-4 md:space-y-8">
          {order.orderItems.map((item) => {
            return (
              <div
                key={item.id}
                className="flex md:flex-row flex-col justify-start items-start md:items-center  border border-gray-200 w-full"
              >
                <div className="w-full md:w-52">
                  <img
                    className="hidden md:block"
                    src={item.mainImage.formats.thumbnail.url}
                    alt={item.mainImage.name}
                  />
                  <img
                    className="md:hidden w-full"
                    src={item.mainImage.formats.thumbnail.url}
                    alt={item.mainImage.name}
                  />
                </div>
                <div className="flex justify-start items-start flex-col w-full p-4 md:px-8">
                  <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                    {item.name}
                  </h3>
                  <div className="flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-6 items-start mt-4 ">
                    <p className="text-sm leading-none text-gray-600">
                      Category:{' '}
                      <span className="text-gray-800">
                        {' '}
                        {item.category.name}
                      </span>
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      Size: <span className="text-gray-800"> {item.size}</span>
                    </p>
                    <p className="text-sm leading-none text-gray-600">
                      Color:{' '}
                      <span className="text-gray-800"> {item.colour}</span>
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full mt-8">
                    <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 py-4 px-6 bg-gray-50 text-sm leading-none text-gray-600">
                      Quantity:{' '}
                      <span className="font-semibold text-gray-800">
                        {item.qty}
                      </span>
                    </button>
                    <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">
                      R{((item.price * item.qty) / 100).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-start flex-col items-start w-full xl:w-4/12 ">
          <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full text-center md:text-left text-gray-800">
            Order Summary
          </h3>
          <div className="flex flex-col md:flex-row xl:flex-col justify-start items-start mt-8 xl:mt-10 xl:space-y-10 w-full space-y-8 md:space-y-0 md:space-x-24 xl:space-x-0 ">
            <div className="flex justify-start items-start flex-col space-y-8 w-full md:w-auto lg:w-full">
              <div className="flex jusitfy-start items-start flex-col space-y-2">
                <p className="text-base font-semibold leading-4  text-gray-800">
                  Shipping Address
                </p>
                <p className="text-sm leading-5 text-gray-600">
                  {`${order.streetAddress}, ${order.city}, ${order.postalCode}`}
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Total
                </p>
                <p className="text-base font-semibold leading-4 text-gray-600">
                  R{(order.orderTotal / 100).toFixed(2)}
                </p>
              </div>
              <div className="flex w-full md:w-8/12 lg:w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                {order.status === 'paid' && (
                  <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">
                    Track Your Order
                  </button>
                )}
                <p className="text-base leading-none text-gray-800">
                  Payment Method{' '}
                  <span className="font-semibold">{order.paymentMethod}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

export async function getServerSideProps({ params: { id }, req }) {
  const { token } = parseCookies(req);
  const res = await fetch(`${API_URL}/orders/mine/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const order = await res.json();

  return {
    props: {
      order: order[0],
      token,
    },
  };
}
