import { Fragment } from 'react';
import { API_URL } from '../../config/index';
import BrandHeader from '../../components/Brands/BrandHeader';
import CategoryProducts from '../../components/Category/ProductsGrid';

export default function Brand({ brand }) {
  return (
    <Fragment>
      <BrandHeader brand={brand} />
      <CategoryProducts products={brand.products} />
    </Fragment>
  );
}

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/brands?slug=${slug}`);
  const brands = await res.json();

  return {
    props: {
      brand: brands[0],
    },
  };
}
