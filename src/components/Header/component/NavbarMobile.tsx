import {
  Bars4Icon,
  BellIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

const NavbarMobile = () => {
  return (
    <div className="navbar bg-white sm:hidden">
      <div className="flex-none"></div>
      <div className="flex-1">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <MagnifyingGlassIcon className="w-3" />
            </button>
          </span>
          <input
            type="text"
            name="q"
            className="text-sm text-base-200 bg-white rounded-md pl-8 input input-sm input-bordered input-black hover:input-success w-auto"
            placeholder="Cari di Tokopedia"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex-none">
        <div className="flex justify-between gap-3 mr-5">
          <ShoppingCartIcon className="w-6" />
          <BellIcon className="w-6" />
          <EnvelopeIcon className="w-6" />
        </div>
        <button className="btn btn-xs btn-square btn-ghost">
          <Bars4Icon className="w-6" />
        </button>
      </div>
    </div>
  );
};
export default NavbarMobile;
