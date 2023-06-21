import CounterInputForm from '@/components/atoms/form/CounterForm';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import useProduct from '@/store/products/detail';
import { useEffect } from 'react';
import { numberFormat } from '@/utils/format';
import { useRouter } from 'next/router';
import { string } from 'yup';
const DetailProduct = () => {
  const router = useRouter();
  const id = router.query.id;

  const { product, getProduct } = useProduct();
  useEffect(() => {
    getProduct(String(id));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-10 py-5 bg-white">
      <div className="flex p-5">
        <div className="w-1/3 pr-5">
          <img src={product?.image} className="min-w-full rounded-lg" alt="" />
          <div className="flex justify-start mt-3 gap-3">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-16 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-16 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-16 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-16 bg-slate-400 rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/3 scroll-smooth">
          <span className="text-xxl font-bold">{product?.title}</span>
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
                      for={color.title}
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
                      for={size.title}
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
                  {/* <div className="flex">
                    <div className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      <div className="text-sm flex justify-center items-center ml-1 gap">
                        4.8 <span className="text-gray-500 text-xs">rata-rata ulasan</span>
                      </div>
                    </div>
                  </div> */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>
                Dikirim dari <strong>Kota Bandung</strong>{' '}
              </span>
            </div>
            <div className="flex gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>

              <div>
                Ongkir Reguler 14 rb
                <br />
                <span className="text-sm text-gray-400">Estimasi tiba 22 - 24 Jun</span>
                <div className="flex">
                  <div className="space-x-1">
                    kurir lainnya : <div className="badge badge-ghost">Instan</div>
                    <div className="badge badge-ghost">COD</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-5" />
        </div>
        <div className="w-1/3">
          <div className="border mx-10 px-3 rounded-lg py-3">
            <span className="font-bold text-base">Atur jumlah dan catatan</span>
            <div className="flex py-5 gap-2">
              <img
                src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
                className="w-10 rounded-lg"
                alt=""
              />
              <span className="text-black mt-2">Putih, L</span>
            </div>

            <hr />
            <div className="flex flex-col">
              <div className="flex">
                <CounterInputForm />
                <div className="ml-2 flex justify-center items-center">
                  Stok : <strong>43</strong>
                </div>
              </div>
              <span className="text-xs text-gray-400">Max. pembelian 43 pcs</span>
            </div>
            <input
              type="text"
              placeholder="Contoh: Warna Putih, Size M"
              className="input input-bordered input-md w-full max-w-xs bg-white border border-success mt-3"
            />
            <div className="line-through flex justify-end text-gray-400 mt-6">Rp172.000</div>
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="text-lg font-bold">Rp43.5000</span>
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <button className="btn btn-success text-white font-bold">+ Keranjang</button>
              <button className="btn btn-outline btn-success">Beli Langsung</button>
              <div className="flex"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
