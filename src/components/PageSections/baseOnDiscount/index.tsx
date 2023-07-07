import CardDiscount from '../products/component/CardDiscount';
import useProducts from '@/store/products';

const BaseOnDiscount = () => {
  const { products, getProducts } = useProducts();
  return (
    <div className="py-3 hidden sm:block">
      <div className="flex">
        <div className="text-black font-bold text-2xl">
          Kejar Diskon Spesial
          <span className="text-sm font-normal text-gray-400"> Berakhir dalam</span>
        </div>
        <div className="space-x-1 ml-1">
          <span className="badge badge-success py-5 rounded-lg text-white font-bold">03</span> :
          <span className="badge badge-success py-5 rounded-lg text-white font-bold">00</span> :
          <span className="badge badge-success py-5 rounded-lg text-white font-bold">36</span>
          <a href="" className="text-success font-bold">
            Lihat semua
          </a>
        </div>
      </div>
      <div className="flex relative">
        <div className="bg-success w-[calc(24% - 6px)] pl-10 pr-40 rounded-lg ">
          <img
            src="https://images.tokopedia.net/img/cache/240/zssuBf/2023/6/22/fcc2526b-1ee8-4cd8-bf8e-61d1dfbe1660.png.webp?ect=4g"
            alt="image"
            className="w-[280px]"
          />
        </div>
        <div className="carousel rounded-box gap-3 mt-5 -ml-32">
          {products.map((product) => (
            <div className="carousel-item rounded-none mb-3">
              <CardDiscount key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseOnDiscount;
