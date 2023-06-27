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
        <div className="flex">
          <img
            className="w-4 h-4"
            src="https://images.tokopedia.net/img/official_store/badge_os.png"
            alt=""
          />
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
