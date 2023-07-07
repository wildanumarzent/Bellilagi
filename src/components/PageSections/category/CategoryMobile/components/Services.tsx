import React from 'react';
interface Service {
  services?: ICategory;
}
const Services: React.FC<Service> = ({ services }) => {
  return (
    <div>
      <div className="carousel-item">
        <div className="flex flex-col justify-center items-center">
          <img src={services?.image} alt="" className="w-[24px] mb-2" />
          <span className="text-xs text-center w-16">{services?.title}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
