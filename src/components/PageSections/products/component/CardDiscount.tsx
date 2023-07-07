import { numberFormat } from '@/utils/format';
import Link from 'next/link';

interface ProductCardDiscountProps {
  product: IProduct;
}

const CardDiscount: React.FC<ProductCardDiscountProps> = ({ product }) => {
  return (
    <Link
      href={`product/${product.id}`}
      className="w-[160px] sm:w-[183px] bg-white shadow-xl rounded-lg">
      <img src={product.image} className="rounded-tl-lg rounded-tr-lg min-w-full" alt="Shoes" />
      <div className="card-body p-5 flex-col">
        <span className="text-base font-bold">
          {numberFormat({
            num: product?.special_price,
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
        <div className="flex flex-col">
          <progress className="progress progress-error w-36 h-1" value="100" max="100"></progress>
          <span className="text-xs font-semibold text-gray-500 mt-1">Segera habis</span>
        </div>
      </div>
    </Link>
  );
};

export default CardDiscount;
