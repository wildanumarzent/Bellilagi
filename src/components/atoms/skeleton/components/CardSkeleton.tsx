const CardSkeleton = () => {
  return (
    <>
      <div className="w-[160px] sm:w-[183px] bg-white shadow-xl rounded-lg">
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-base-100">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="card-body p-5 flex-col">
          <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-32 "></div>
          <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-20 "></div>
          <div className="flex">
            <div className="bg-pink-200 text-[0.714286rem] text-red-500 font-bold w-[35px] h-[10px] p-1 rounded-md"></div>
            <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-20 ml-2"></div>
          </div>
          <div className="flex">
            <img
              className="w-4 h-4"
              src="https://images.tokopedia.net/img/official_store/badge_os.png"
              alt=""
            />
            <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-20 ml-2"></div>
          </div>
          <div className="flex">
            <div className="rating rating-xs flex">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-yellow-400 mr-1" />
              <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-5 ml-2"></div>
            </div>
            <div className="h-1.5 mt-1 flex justify-center items-center bg-gray-200 rounded-full dark:bg-gray-300 w-32 ml-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
