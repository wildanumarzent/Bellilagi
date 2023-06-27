import { numberFormat } from '@/utils/format';
import { MapPinIcon, TruckIcon } from '@heroicons/react/24/outline';
interface productDetailProps {
  product?: IProductDetail;
}
const InformationProduct: React.FC<productDetailProps> = ({ product }) => {
  return (
    <>
      <span className="text-xl lg:text-2xl font-bold">{product?.title}</span>
      <div className="flex">
        <span className="text-sm">Terjual {product?.sold}+</span>
        <span className="font-bold text-lg -mt-2 mx-2">.</span>
        <div className="rating rating-sm flex mb-4">
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400 mr-1" />
          <span className="text-sm font-bold text-gray-400 mr-1"> 4.6 {'( 96 rating )'} </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-2xl">
          {numberFormat({
            num: product?.special_price,
            opt: { style: 'currency' },
          })}
        </span>
        <div className="flex">
          <div className="bg-pink-200 text-[0.714286rem] text-red-500 font-bold p-1 rounded-md">
            {product?.discount}%
          </div>
          <span className="line-through text-sm ml-1 font-normal text-gray-400">
            {numberFormat({
              num: product?.price,
              opt: { style: 'currency' },
            })}
          </span>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col">
        <div className="variant-color">
          <div className="font-bold text-black mb-3">
            Pilih warna : <span className="text-gray-400">PUTIH</span>
          </div>
          <ul className="flex gap-2">
            {product?.variant_color.map((color) => (
              <li key={color.id}>
                <input
                  type="radio"
                  id={color.title}
                  name="variant_color"
                  defaultValue="variant-color"
                  className="hidden peer hover:text-success"
                />
                <label
                  htmlFor={color.title}
                  className="flex w-24 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg peer-checked:border-success peer-checked:text-success cursor-pointer hover:text-success ">
                  <img src={color.image} className="w-7 bg-slate-400 rounded-md" alt="" />
                  <span className="pl-2 font-normal text-gray-400">{color.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="variant-size mt-5">
          <div className="font-bold text-black mb-3">
            Pilih ukuran : <span className="text-gray-400">M</span>
          </div>
          <ul className="flex gap-2">
            {product?.variant_size.map((size) => (
              <li>
                <input
                  type="radio"
                  id={size.title}
                  name="variant_size"
                  defaultValue="variant-size"
                  className="hidden peer hover:text-success"
                />
                <label
                  htmlFor={size.title}
                  className="flex w-10 p-2 justify-center items-center text-gray-500 bg-white border border-gray-200 rounded-lg peer-checked:border-success peer-checked:text-success cursor-pointer hover:text-success ">
                  <span className="font-normal text-gray-400">{size.title}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tabs mt-5 " id="myTab" data-tabs-toggle="#myTabContent">
        <a
          className="tab tab-bordered font-bold text-success  tab-active border-success"
          id="profile-tab"
          data-tabs-target="#wildan">
          Detail
        </a>
        <a className="tab tab-bordered font-bold text-success">Spesifikasi</a>
        <a className="tab tab-bordered font-bold text-success">Info Penting</a>
      </div>
      <div className="">{product?.description}</div>
      <hr className="my-3" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex">
            <a href="">
              <img
                className="w-12 rounded-full"
                src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/11/19/647eed1e-a0b9-4425-826b-31031a342365.jpg"
                alt=""
              />
            </a>
            <div className="flex flex-col justify-center ml-2">
              <div className="flex justify-center items-center">
                <img
                  className="w-4 h-4"
                  src="https://images.tokopedia.net/img/official_store/badge_os.png"
                  alt=""
                />
                <span className="text-base font-bold">Cottonology Indonesia</span>
              </div>
              <span className="text-success font-bold">. Online</span>
            </div>
          </div>

          <button className="btn btn-outline btn-success btn-sm flex justify-center items-center mt-3">
            Follow
          </button>
        </div>
      </div>
      <hr className="my-5" />
      <div className="flex flex-col gap-2">
        <strong className="mb-2">Pengiriman</strong>
        <div className="flex gap-2 text-sm">
          <MapPinIcon className="w-5" />
          <span>
            Dikirim dari <strong>Kota Bandung</strong>
          </span>
        </div>
        <div className="flex gap-2 text-sm">
          <TruckIcon className="w-5 h-5" />

          <div>
            Ongkir Reguler 14 rb
            <br />
            <span className="text-sm text-gray-400">Estimasi tiba 22 - 24 Jun</span>
            <div className="flex">
              <div className="space-x-1">
                kurir lainnya : <div className="badge badge-ghost">Instan</div>
                <div className="badge badge-ghost font-bold">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-5" />
    </>
  );
};

export default InformationProduct;
