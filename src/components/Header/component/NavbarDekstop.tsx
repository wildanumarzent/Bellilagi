import useAuth from '@/store/auth';
import {
  BellIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const NavbarWeb = () => {
  const { isLoggedIn, Logout } = useAuth();

  return (
    <>
      <div className="hidden sm:flex navbar flex-col relative">
        <div className="flex">
          <div className="mr-5 hidden sm:flex">
            <img
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
              alt=""
            />
          </div>
          <div className="hidden sm:flex">Kategori</div>
          <div className="relative text-gray-600 focus-within:text-gray-400 ml-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <MagnifyingGlassIcon className="w-6" />
              </button>
            </span>
            <input
              type="search"
              name="q"
              className="py-2 hidden sm:flex text-sm text-base-200 bg-white rounded-md pl-10 input input-sm input-bordered input-black hover:input-success lg:w-[400px] xl:w-[600px] 2xl:w-[700px]"
              placeholder="Cari Barang Disini..."
              autoComplete="off"
            />
          </div>
          <div className="w-32 flex justify-between gap-3 px-5 ml-3">
            <ShoppingCartIcon className="w-5" />
            <BellIcon className="w-5" />
            <EnvelopeIcon className="w-5" />
          </div>
          <div className="h-6 text-base-100">|</div>

          {isLoggedIn ? (
            <div className="flex md:ml-6 sm:space-x-4 md:space-x-7">
              <div className="dropdown">
                <button tabIndex={0} className="avatar hidden md:flex peer">
                  <div className="w-[25px] rounded-full ">
                    <img src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/8/08d54322-1166-43af-9302-e50ba3c28fa5.jpg" />
                  </div>
                  <span className="ml-3">skaos_official</span>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-32 mt-1">
                  <li>
                    <a onClick={(e) => Logout()}>Logout</a>
                  </li>
                </ul>
              </div>

              <button className="avatar peer">
                <div className="w-[25px] rounded-full ">
                  <img src="https://images.tokopedia.net/img/cache/215-square/GAnVPX/2021/8/8/08d54322-1166-43af-9302-e50ba3c28fa5.jpg" />
                </div>
                <span className="ml-3">skaos</span>
              </button>
              <div className="hidden top-10 mr-96 peer-hover:flex hover:flex absolute w-[100px] flex-col bg-white drop-shadow-lg z-50">
                <button className="px-3 py-3">Logout</button>
              </div>
            </div>
          ) : (
            <div className="flex ml-6 gap-2">
              <Link
                href={'auth/signin'}
                className="btn btn-sm btn-outline btn-success text-xs hover:text-white">
                Login
              </Link>
              <Link href={'auth/signup'} className="btn btn-sm btn-success text-white text-xs ">
                Daftar
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="xl:flex justify-between -mt-5 hidden">
        <div className="text-[12px] flex justify-end left-[320px] relative">
          <ul className="flex space-x-5 py-2">
            <li>
              <Link href={'#'}>Harman Kardon</Link>
            </li>
            <li>
              <Link href={'#'}>Keyboard Mechanical</Link>
            </li>
            <li>
              <Link href={'#'}>Kardus Pindahan</Link>
            </li>
            <li>
              <Link href={'#'}>Kursi Kantor</Link>
            </li>
            <li>
              <Link href={'#'}>Karpet Lantai</Link>
            </li>
            <li>
              <Link href={'#'}>Kaos Pria</Link>
            </li>
          </ul>
        </div>
        {isLoggedIn && (
          <div className="flex text-[12px] relative">
            <MapPinIcon className="w-4 h-4" />
            <span className="">Dikirim ke kos wildan</span>
          </div>
        )}
      </div>
    </>
  );
};

export default NavbarWeb;
