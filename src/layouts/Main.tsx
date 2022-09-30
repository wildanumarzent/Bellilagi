import React from "react";
// Component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from "@/components/Banner";
// Type
import type { PagePropsWithChildren } from "@/types/pages";

export const Main = ({ children }: PagePropsWithChildren) => {
  return (
    <div className="flex flex-col transition-colors duration-150">
      <Banner />
      <Header />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Main
