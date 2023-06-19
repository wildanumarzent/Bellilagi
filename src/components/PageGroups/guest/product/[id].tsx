import CounterInputForm from '@/components/atoms/form/CounterForm';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

const DetailProduct = () => {
  return (
    <div className="mx-auto max-w-7xl px-10 py-5 bg-white">
      <div className="flex p-5">
        <div className="w-1/3 pr-5">
          <img
            src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
            className="min-w-full rounded-lg"
            alt=""
          />
          <div className="flex mt-3 gap-3">
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-20 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-20 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-20 bg-slate-400 rounded-md"
              alt=""
            />
            <img
              src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
              className="w-20 bg-slate-400 rounded-md"
              alt=""
            />
          </div>
        </div>
        <div className="w-1/3 scroll-smooth">
          <span className="text-xxl font-bold">
            GARAF ANGGA KEMEJA PRIA LENGAN PENDEK SLIMFIT ATASAN PRIA POLOS - Putih, L
          </span>
          <div className="flex">
            <span className="text-sm">Terjual 100+</span>
            <span className="font-bold text-lg -mt-2 mx-2">.</span>
            <div className="rating rating-sm flex mb-4">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400 mr-1" />
              <span className="text-sm font-bold text-gray-400 mr-1"> 4.6 {'( 96 rating )'} </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl">Rp43.000</span>
            <div className="flex">
              <div className="bg-pink-200 text-[0.714286rem] text-red-500 font-bold p-1 rounded-md">
                75%
              </div>
              <span className="line-through text-sm ml-1 font-normal text-gray-400">Rp172.000</span>
            </div>
          </div>
          <div className="border border-b my-5"></div>
          <div className="flex flex-col">
            <div className="variant-color">
              <div className="font-bold text-black mb-3">
                Pilih warna : <span className="text-gray-400">PUTIH</span>
              </div>
              <ul className="flex gap-2">
                <li>
                  <input
                    type="radio"
                    id="variant-color"
                    name="variant_color"
                    defaultValue="variant-color"
                    className="hidden peer hover:text-success"
                    required=""
                  />
                  <label
                    for="variant-color"
                    className="flex w-24 p-2 text-gray-500 bg-white border border-gray-200 rounded-lg peer-checked:border-success peer-checked:text-success cursor-pointer hover:text-success ">
                    <img
                      src="https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/1/28/25928872-a05c-4a56-a900-b6de25fd3f40.jpg.webp?ect=4g"
                      className="w-7 bg-slate-400 rounded-md"
                      alt=""
                    />
                    <span className="pl-2 font-normal text-gray-400">Putih</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="variant-size mt-5">
              <div className="font-bold text-black mb-3">
                Pilih ukuran : <span className="text-gray-400">M</span>
              </div>
              <ul className="flex gap-2">
                <li>
                  <input
                    type="radio"
                    id="variant-size"
                    name="variant_size"
                    defaultValue="variant-size"
                    className="hidden peer hover:text-success"
                    required=""
                  />
                  <label
                    for="variant-size"
                    className="flex w-10 p-2 justify-center items-center text-gray-500 bg-white border border-gray-200 rounded-lg peer-checked:border-success peer-checked:text-success cursor-pointer hover:text-success ">
                    <span className="font-normal text-gray-400">M</span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="tabs mt-5 " id="myTab" data-tabs-toggle="#myTabContent">
            <a
              className="tab tab-bordered font-bold text-success"
              id="profile-tab"
              data-tabs-target="#wildan">
              Detail
            </a>
            <a className="tab tab-bordered tab-active border-success font-bold text-success">
              Spesifikasi
            </a>
            <a className="tab tab-bordered font-bold text-success">Info Penting</a>
          </div>
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

            <div className="border"></div>
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
