import React from "react";
import ProductCard from '@/components/PageSections/products/component/CardProduct';
import ProductSkeleton from '@/components/atoms/skeleton/ProductSkeleton';
import useProductByCategories from "@/store/products/byCategories";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import HeaderDefault from "@/components/Header/HeaderDefault";
import CategoryMobile from "@/components/PageSections/category/CategoryMobile/CategoryMobile";

const ProductByCategories = () => {
  const router = useRouter();
  const id = router.query.id;
  
    const { loading, productCategories, getProduct } = useProductByCategories();
    useEffect(() => {
      getProduct(Number(id));
    }, [id]);
    if (loading) {
      return <ProductSkeleton />;
    }
    
    return (
      <>
       <HeaderDefault />
       <div className="p-5">
        <CategoryMobile />
       </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-5 py-9">
          {productCategories?.length == 0 ? 
          <>
            <div className="flex flex-col justify-center items-center mt-10">
              <img src="/empty_box.jpeg" className="w-24" alt="Image" />
              <span>Product Kosong</span>
            </div>
          </> 
          : 
          <>
          {productCategories?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </>}

        </div>
      </>
    );
}

export default ProductByCategories;