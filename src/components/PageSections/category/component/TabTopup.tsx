import { useEffect, useState } from 'react';
import TopupSkeleton from '@/components/atoms/skeleton/TopupSkeleton';
import useCategeries from '@/store/categories';

const TabTopup = () => {
  const { loading, getOtherCategories } = useCategeries();

  useEffect(() => {
    getOtherCategories();
  }, []);
  if (loading) {
    return <TopupSkeleton />;
  }
  return (
    <>
      <div className="p-5">
        <span className="text-3xl">Top Up & Tagihan</span>
        <div className="flex flex-col border rounded-lg mt-3">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
              <li className="mr-7">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 active text-success border-success border-transparent rounded-t-lg hover:text-success hover:border-success dark:hover:text-success">
                  Pulsa
                </a>
              </li>
              <li className="mr-7">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page">
                  Paket Data
                </a>
              </li>
              <li className="mr-7">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Flight
                </a>
              </li>
              <li className="mr-7">
                <a
                  href="#"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">
                  Listrik PLN
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-5 p-3">
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <span className="label-text">Nomor Telpon</span>
              </label>
              <input
                type="text"
                placeholder="089637032644"
                className="input input-sm input-bordered w-full max-w-xs bg-white"
              />
            </div>
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <span className="label-text">Nominal</span>
              </label>
              <select className="select select-bordered w-auto max-w-xs select-sm bg-white text-gray-400">
                <option disabled>Pilih</option>
                <option>1.000 - Rp1.800</option>
                <option>2.000 - Rp2.500</option>
                <option>3.000 - Rp3.500</option>
              </select>
            </div>
            <div className="form-control w-auto max-w-xs">
              <label className="label">
                <span className="label-text text-white">.</span>
              </label>
              <button className="btn btn-success btn-sm text-white">Beli</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabTopup;
