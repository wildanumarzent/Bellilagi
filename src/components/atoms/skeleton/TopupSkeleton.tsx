const TopupSkeleton = () => {
  return (
    <>
      <div className="p-5 animate-pulse">
        <div className="h-2.5 bg-base-100 rounded-full dark:bg-base-100 w-48 mb-4" />
        <div className="flex flex-col border rounded-lg mt-3">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px ml-2 mt-1">
              <li className="mr-4">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-24" />
              </li>
              <li className="mr-4">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-24" />
              </li>
              <li className="mr-4">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-24" />
              </li>
              <li className="mr-4">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-24" />
              </li>
            </ul>
          </div>
          <div className="flex gap-5 p-3">
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-40" />
              </label>
              <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-full" />
            </div>
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-40" />
              </label>
              <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-full" />
            </div>
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">.</span>
              </label>
              <div className="inline-block h-4 bg-base-100 rounded-full dark:bg-base-100 w-16" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopupSkeleton;
