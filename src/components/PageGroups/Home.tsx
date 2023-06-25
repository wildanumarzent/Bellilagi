/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BannerContent from '../PageSections/Hero';
import Category from '../PageSections/category/Category';
import ProductList from '../PageSections/products';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl xl:px-10 px-3 py-5">
      <BannerContent />
      <Category />
      <ProductList />
    </div>
  );
};

export default Home;
