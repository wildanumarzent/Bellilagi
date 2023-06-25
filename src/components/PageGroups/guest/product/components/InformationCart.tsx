import CounterInputForm from '@/components/atoms/form/CounterForm';
const CartInformation = () => {
  return (
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
  );
};

export default CartInformation;
