import {
  Bars4Icon,
  BellIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useProducts from '@/store/products';
import useProductByCategories from '@/store/products/byCategories';
import { useRouter } from 'next/router';
import useDebounce from '@/hooks/useDebounce';

const NavbarMobile = () => {
  const router = useRouter();
  const id = router.query.id;
  const [search, setSearch] = useState('')
  const debounceSearch = useDebounce<string>(search, 500)

  const {getProducts} = useProducts();
  const {getSearch, getProduct} = useProductByCategories();
  useEffect(() => {
    getProducts(debounceSearch)
  },[debounceSearch])
  
  return (
    <div className="navbar bg-white sm:hidden">
      <div className="flex-none"></div>
      <div className="flex-1">
        <div className="relative text-gray-600 focus-within:text-gray-400 mr-3 w-full">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
              <MagnifyingGlassIcon className="w-5" />
            </button>
          </span>
          <input
            type="text"
            name="q"
            onChange={(e) => setSearch(e.target.value)}
            className="text-sm text-black bg-white rounded-md pl-10 input input-md input-bordered input-black hover:input-success w-full"
            placeholder="Search product"
            autoComplete="on"
          />
        </div>
      </div>
      <div className="flex-none">
        {/* <div className="flex justify-between gap-1 mr-3 ml-2">
          <ShoppingCartIcon className="w-5" />
          <BellIcon className="w-5" />
          <EnvelopeIcon className="w-5" />
        </div> */}
        <Link href={'/'} className="w-20">
          <img src="/logo_bellilagi.jpeg" alt="" />
        </Link>
      </div>
    </div>
  );
};
export default NavbarMobile;
