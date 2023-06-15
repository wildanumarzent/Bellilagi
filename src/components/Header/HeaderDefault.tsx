import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const HeaderDefault = () => {
  return (
    <>
      <div className='bg-white px-5 py-2 shadow-md z-50'>
        <div className="navbar flex-col">
          <div className="flex">
            <div className='mr-5'>
              <img src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" alt="" />
            </div>
            <div>Kategori</div>
            <div className="relative text-gray-600 focus-within:text-gray-400 ml-5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </span>
                  <input
                    type="search"
                    name="q"
                    className="py-2 text-sm text-base-200 bg-white rounded-md pl-10 input input-sm input-bordered input-black hover:input-success w-[700px]"
                    placeholder="Cari Barang Disini..."
                    autoComplete="off"
                  />
            </div>
            <div className='w-32 flex justify-between px-5 ml-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className='h-6 text-base-100'>|</div>
            <div className='flex ml-6 space-x-7'>
              <div className="avatar">
                <div className="w-[25px] rounded-full ">
                  <img src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/8/08d54322-1166-43af-9302-e50ba3c28fa5.jpg" />
                </div>
                <span className='ml-3'>skaos_official</span>
              </div>
              <div className="avatar">
                <div className="w-[25px] rounded-full ">
                  <img src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/8/08d54322-1166-43af-9302-e50ba3c28fa5.jpg" />
                </div>
                <span className='ml-3'>skaos</span>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between -mt-5'>
              <div className='text-[12px] pl-[270px]'>
                <ul className="flex space-x-5 py-2">
                  <li><Link href={'#'}>Harman Kardon</Link></li>
                  <li><Link href={'#'}>Keyboard Mechanical</Link></li>
                  <li><Link href={'#'}>Kardus Pindahan</Link></li>
                  <li><Link href={'#'}>Kursi Kantor</Link></li>
                  <li><Link href={'#'}>Karpet Lantai</Link></li>
                  <li><Link href={'#'}>Kaos Pria</Link></li>
                </ul>
              </div>
              <div className='flex text-[12px] pl-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                  <span className=''>Dikirim ke kos wildan</span>
              </div>
        </div>
      </div>
      
    </>
  );
};

export default HeaderDefault;
