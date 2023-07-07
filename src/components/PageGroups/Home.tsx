/* eslint-disable @next/next/no-img-element */
import React from 'react';

import BannerContent from '../PageSections/Hero';
import Category from '../PageSections/category/Category';
import ProductList from '../PageSections/products';
import BaseOnSearch from '../PageSections/baseOnSearch';
import BaseOnDiscount from '../PageSections/baseOnDiscount';

const Home = () => {
  return (
    <div className="mx-auto max-w-7xl xl:px-10 px-3 py-5">
      <div className="hidden sm:flex">
        <BannerContent />
      </div>
      <Category />
      <BaseOnDiscount />
      <BaseOnSearch />
      <ProductList />
    </div>
  );
};

export default Home;
