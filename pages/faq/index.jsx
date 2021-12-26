import React, { useState } from 'react';

const FAQ2 = () => {
  const [open, setOpen] = useState('');

  function click(e) {
    setOpen(e.currentTarget.id);
    if (open === e.currentTarget.id) {
      setOpen('');
    }
  }

  return (
    <div className="2xl:container 2xl:mx-auto py-12 lg:px-20 md:px-6 px-4 flex justify-center items-center flex-col space-y-20">
      <div className="flex justify-center items-center flex-col text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="w-full md:w-5/6 2xl:w-9/12 text-base leading-6 text-center text-gray-600">
          Here are few of the most frequently asked questions by our valueable
          customers
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full  justify-start items-start md:space-x-8 lg:space-x-0">
        <div className="hidden w-2/5  sm:pr-10 lg:pr-0 2xl:w-5/12 text-left  md:flex flex-col justify-start items-start space-y-8">
          <a
            className="text-lg font-medium text-left  leading-6 lg:leading-4 underline focus:text-gray-500 focus:outline-none text-gray-800"
            href="#shipping"
          >
            Shipping
          </a>

          <a
            href="#payments"
            className="text-lg font-medium text-left  leading-6 lg:leading-4 hover:underline focus:text-gray-500 focus:outline-none text-gray-800"
          >
            Payments
          </a>
          <a
            href="#returns"
            className="text-lg font-medium  text-left leading-6 lg:leading-4 hover:underline focus:text-gray-500 focus:outline-none text-gray-800"
          >
            Return and Exchange
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-left  leading-6 lg:leading-4 hover:underline focus:text-gray-500 focus:outline-none text-gray-800"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-16 md:mt-0 flex w-full 2xl:w-5/12 justify-start items-start flex-col space-y-20">
          <div
            className="w-full flex justfiy-start items-start flex-col"
            id="shipping"
          >
            <h2 className="text-xl font-medium leading-5 text-gray-600 uppercase">
              Shipping
            </h2>
            <div className="mt-8 w-full flex flex-col justfiy-start items-start space-y-7">
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      Do you ship countrywide?
                    </p>
                  </div>
                  <button id="menu1" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu1' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className={open === 'menu1' ? 'mt-6 w-full' : 'hidden'}>
                  <p className="text-base leading-6 text-gray-600">
                    Yes we ship our products all over South Africa.{' '}
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      What are shipping and return rates?
                    </p>
                  </div>
                  <button id="menu2" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu2' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu2"
                  className={open === 'menu2' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    Shipping costs are generally R150 for every order. Should we
                    need to increase the shipping costs we will contact you to
                    let you know.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      How do I track my order?
                    </p>
                  </div>
                  <button id="menu3" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu3' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu3"
                  className={open === 'menu3' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    Once your order has been sent from our premises, the courier
                    company that we use will sms you with the status of your
                    delivery and your tracking number so that you can track your
                    parcel.{' '}
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      What happens if I havent received my order yet?
                    </p>
                  </div>
                  <button id="menu4" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu4' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu4"
                  className={open === 'menu4' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    If there is a delay in your order being delivered we will
                    contact you with the reasons. If we need to we can replace
                    the items and send them with another courier.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-full flex justfiy-start items-start flex-col"
            id="payments"
          >
            <h2 className="text-xl font-medium leading-5 text-gray-600 uppercase">
              PAYMENTS
            </h2>
            <div className="mt-8 w-full flex flex-col justfiy-start items-start space-y-7">
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      What payment methods are accepted?
                    </p>
                  </div>
                  <button id="menu8" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu8' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu8"
                  className={open === 'menu8' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    We accept Intellimali, Fundi, Bank Transfers/EFT as the
                    payment methods
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      Are payments secure?
                    </p>
                  </div>
                  <button id="menu9" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu9' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu9"
                  className={open === 'menu9' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    Yes Paymnts are secure as we use HTTPS to handle payment
                    requests.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex justfiy-start items-start flex-col"
            id="returns"
          >
            <h2 className="text-xl font-medium leading-5 text-gray-600 uppercase">
              RETURNS AND EXCHANGE
            </h2>
            <div className="mt-8 w-full flex flex-col justfiy-start items-start space-y-7">
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      What is your return policy?
                    </p>
                  </div>
                  <button id="menu10" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu10' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu10"
                  className={open === 'menu10' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    We accept returns for products that arrive damaged or are
                    the incorrect product. We require that you let us know about
                    this within 2 days of delivery in order for us to process
                    the returns. We will dispatch our couriers to come pick the
                    products that have been approved fr a return.
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      Do your products have warranty?
                    </p>
                  </div>
                  <button id="menu11" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu11' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu11"
                  className={open === 'menu11' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    Our products are covered by the manufacturers warranty. We
                    will facilitate communication with the manufacturer to
                    determine if the product is covered under warranty. Warranty
                    does not cover physical damage that has occured from user
                    error.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex justfiy-start items-start flex-col"
            id="contact"
          >
            <h2 className="text-xl font-medium leading-5 text-gray-600 uppercase">
              CONTACT US
            </h2>
            <div className="mt-8 w-full flex flex-col justfiy-start items-start space-y-7">
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      How do I get support?
                    </p>
                  </div>
                  <button id="menu12" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu12' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu12"
                  className={open === 'menu12' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    You can contact us via email: sales@capegadgets.co.za or via
                    WhatsApp on 073 206 2822
                  </p>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xl font-medium leading-7 md:leading-5 text-gray-800">
                      What are your support hours?
                    </p>
                  </div>
                  <button id="menu13" onClick={click}>
                    <svg
                      className={
                        'transform ' +
                        (open === 'menu13' ? 'rotate-180' : 'rotate-0')
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 10L8 6L12 10"
                        stroke="#1F2937"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  id="menu13"
                  className={open === 'menu13' ? 'mt-6 w-full' : 'hidden'}
                >
                  <p className="text-base leading-6 text-gray-600">
                    Support hours are between 9am and 6pm during weekdays
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ2;
