import { HandThumbUpIcon } from '@heroicons/react/24/outline';

interface listReview {
  data?: UserReview[];
}
const UserReview: React.FC<listReview> = (list) => {
  return (
    <>
      <div className="lg:flex hidden justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-black">Ulasan Pilihan</span>
          <span className="text-xs">Menampilkan 10 dari 109 ulasan</span>
        </div>
        <div className="flex px-20 space-x-3">
          <span className="flex items-center text-black">Urutkan</span>
          <select name="" id="" className="select select-bordered w-full max-w-xs bg-white">
            <option value="">Terbaru</option>
          </select>
        </div>
      </div>
      {list?.data?.map((list) => (
        <div className="flex flex-col my-5 px-3 lg:px-0">
          <div className="rating rating-sm flex mb-3">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-yellow-400"
              checked
            />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-yellow-400" />
            <span className="text-gray-500 text-sm ml-5">5 Hari yang lalu</span>
          </div>
          <div className="flex flex-col">
            <div className="flex space-x-3">
              <img src={list?.avatar} alt="avatar" className="w-[30px] rounded-full" />
              <span className="text-black font-bold">{list?.name}</span>
            </div>
            <span className="text-gray-500 font-semibold text-xs mt-1">
              Varian: {list?.variasi}
            </span>
          </div>
          <div className="text-sm text-gray-500 mt-2">{list?.comment}</div>
          <div className="flex mt-5 space-x-1">
            <HandThumbUpIcon className="w-5" />
            <span className="text-sm text-gray-500 font-bold">Membantu</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserReview;
