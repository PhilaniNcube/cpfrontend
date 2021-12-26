/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';
import Link from 'next/link';
import { PER_PAGE } from '../../config/index';

export default function Pagination({ page, total, start, end }) {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <div className="bg-white px-4 py-3 max-w-7xl mx-auto flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        {page > 1 && (
          <Link href={`/shop?term=price:ASC&page=${page - 1}`}>
            <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </a>
          </Link>
        )}

        {page < lastPage && (
          <Link href={`/shop?term=price:ASC&page=${page + 1}`}>
            <a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Next
            </a>
          </Link>
        )}
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{start}</span> to{' '}
            <span className="font-medium">
              {lastPage ? total : start + PER_PAGE}
            </span>{' '}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            {page > 1 && (
              <Link href={`/shop?term=price:ASC&page=${page - 1}`}>
                <a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-md">Previous Page</span>
                </a>
              </Link>
            )}

            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}

            {page < lastPage && (
              <Link href={`/shop?term=price:ASC&page=${page + 1}`}>
                <a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span className="text-md">Next Page</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}
