import React from 'react';

import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
// Component
import Header from '@/components/Header';
// Type
import type { PagePropsWithChildren } from '@/types/pages';

export const Main = ({ children }: PagePropsWithChildren) => {
  return (
    <div className="flex flex-col transition-colors duration-150">
      <Banner />
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
