const FilterReview = () => {
  return (
    <>
      <div className="rating rating-xl flex justify-center items-center mb-4">
        <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400 mr-1" />
        <div className="text-6xl text-gray-900">
          4.8 <span className="text-gray-500 text-sm">/5.0</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="text-black text-xs font-semibold">97% pembeli merasa puas</span>
        <span className="text-gray-500 text-xs font-normal">344 rating • 109 ulasan</span>
      </div>
      <div className="flex flex-col">
        <div className="rating rating-sm flex mb-1">
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
          <span className="text-gray-600 font-bold text-sm ml-1">5</span>
          <div className="flex justify-center items-center ml-3">
            <progress className="progress progress-success w-40" value="100" max="100"></progress>
          </div>
        </div>
        <div className="rating rating-sm flex mb-1">
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
          <span className="text-gray-600 font-bold text-sm ml-1">4</span>
          <div className="flex justify-center items-center ml-3">
            <progress className="progress progress-success w-40" value="20" max="100"></progress>
          </div>
        </div>
        <div className="rating rating-sm flex mb-1">
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
          <span className="text-gray-600 font-bold text-sm ml-1">2</span>
          <div className="flex justify-center items-center ml-3">
            <progress className="progress progress-success w-40" value="2" max="100"></progress>
          </div>
        </div>
        <div className="rating rating-sm flex mb-1">
          <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
          <span className="text-gray-600 font-bold text-sm ml-1">1</span>
          <div className="flex justify-center items-center ml-3">
            <progress className="progress progress-success w-40" value="1" max="100"></progress>
          </div>
        </div>
      </div>
      <div className="flex flex-col border border-gray-300 rounded-xl p-5 mr-3 mt-8">
        <div className="text-black font-bold mb-3">Filter Ulasan</div>
        <hr />
        <span className="text-black font-bold my-3">Media</span>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-600 font-bold text-sm ml-1 ">Dengan Foto & Video</span>
        </div>
        <hr />
        <span className="text-black font-bold my-3">Rating</span>
        <div className="flex space-x-3">
          <input type="checkbox" className="checkbox" />
          <div className="rating rating-sm flex justify-center items-center">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-600 font-bold text-sm ml-1 ">5</span>
          </div>
        </div>
        <div className="flex mt-5 space-x-3">
          <input type="checkbox" className="checkbox" />
          <div className="rating rating-sm flex justify-center items-center">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-600 font-bold text-sm ml-1 ">4</span>
          </div>
        </div>
        <div className="flex mt-5 space-x-3">
          <input type="checkbox" className="checkbox" />
          <div className="rating rating-sm flex justify-center items-center">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-600 font-bold text-sm ml-1 ">3</span>
          </div>
        </div>
        <div className="flex mt-5 space-x-3">
          <input type="checkbox" className="checkbox" />
          <div className="rating rating-sm flex justify-center items-center">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-600 font-bold text-sm ml-1 ">2</span>
          </div>
        </div>
        <div className="flex mt-5 space-x-3">
          <input type="checkbox" className="checkbox" />
          <div className="rating rating-sm flex justify-center items-center">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-600 font-bold text-sm ml-1 ">1</span>
          </div>
        </div>
        <hr className="mt-3" />
        <span className="text-black font-bold my-3">Topik Ulasan</span>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Kualitas Barang</span>
        </div>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Pelayanan Penjual</span>
        </div>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Kemasan Barang</span>
        </div>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Harga Barang</span>
        </div>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Sesuai Deskripsi</span>
        </div>
        <div className="flex space-x-3 mb-3">
          <input type="checkbox" className="checkbox" />
          <span className="text-gray-500 text-sm ml-1 ">Pengiriman</span>
        </div>
      </div>
    </>
  );
};

export default FilterReview;
