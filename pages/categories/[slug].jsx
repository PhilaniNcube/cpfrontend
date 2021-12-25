import React, { Fragment } from 'react';
import Banner from '../../components/Category/Banner';
import ProductsGrid from '../../components/Category/ProductsGrid';
import { API_URL } from '../../config/index';

const Category = ({ category }) => {
  return (
    <Fragment>
      <Banner category={category} />
      <ProductsGrid products={category.products} />
    </Fragment>
  );
};

export default Category;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/categories?slug=${slug}`);
  const categories = await res.json();

  return {
    props: {
      category: categories[0],
    },
  };
}
