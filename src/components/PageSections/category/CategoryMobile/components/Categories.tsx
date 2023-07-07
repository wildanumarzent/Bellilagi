import React from 'react';
interface categories {
  categories?: ICategory;
}
const Categories: React.FC<categories> = ({ categories }) => {
  console.log('test', categories);

  return (
    <div>
      <div className="carousel-item">
        <div className="flex flex-col justify-center items-center">
          <img src={categories?.image} alt="" className="w-[24px] mb-2" />
          <span className="text-xs text-center w-16">{categories?.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Categories;
