import { numberFormat } from '@/utils/format';
import Link from 'next/link';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`product/${product.id}`}
      className="w-[160px] sm:w-[183px] bg-white shadow-xl rounded-lg">
      <img src={product.image} className="rounded-tl-lg rounded-tr-lg min-w-full" alt="Shoes" />
      <div className="card-body p-5 flex-col">
        <span className="text-xs">{product.title}</span>
        <span className="text-base font-bold">
          {numberFormat({
            num: product.special_price,
            opt: { style: 'currency' },
          })}
        </span>
        <div className="flex">
          <div className="bg-pink-200 text-[0.714286rem] text-red-500 font-bold w-[35px] h-[23px] p-1 rounded-md">
            {product.discount}%
          </div>
          <span className="line-through text-[0.714286rem] ml-1 font-normal text-gray-400">
            {numberFormat({
              num: product.price,
              opt: { style: 'currency' },
            })}
          </span>
        </div>
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4">
            <path
              fillRule="evenodd"
              d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-xs">{product.location}</span>
        </div>
        <div className="flex">
          <div className="rating rating-xs flex">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400 mr-1" />
            <span className="text-xs font-bold text-gray-400 mr-1">{product.ratting} | </span>
          </div>
          <div className="text-xs text-gray-500"> Terjual {product.total_sold}K</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
