import { SpeakerWaveIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
const BannerDefault = () => {
  return (
    <div className="bg-base-100 h-8">
      <div className='flex justify-between'>
          <div className='flex py-2 pl-9'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <span className='text-[12px]'>Download Tokopedia App</span>
          </div>

          <div className='text-[12px] pr-5'>
            <ul className="flex space-x-5 py-2">
              <li><Link href={'#'}>Tentang Tokopedia</Link></li>
              <li><Link href={'#'}>Mitra Tokopedia</Link></li>
              <li><Link href={'#'}>Pusat Edukasi Seller</Link></li>
              <li><Link href={'#'}>Promo</Link></li>
              <li><Link href={'#'}>Tokopedia Care</Link></li>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default BannerDefault;
