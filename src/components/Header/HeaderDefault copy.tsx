import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import ROUTE_CONFIG from '@/constants/route.config';
import { DisplayOn, TypeRouterConfig } from '@/types/general';

import ThemeChanger from '../DaisyUI/ThemeChanger';

const HeaderDefault = () => {
  const navMenu = ROUTE_CONFIG;
  const home: TypeRouterConfig | false =
    navMenu[0].displayOn.includes(DisplayOn.MAIN_MENU) && navMenu[0];
  const childMenu = navMenu
    .slice(1, navMenu.length)
    .filter((menu) => menu.displayOn.includes(DisplayOn.MAIN_MENU));

  return (
    <div className="navbar bg-primary shadow-2xl">
      {home && (
        <div className="flex-1">
          <Link href={home.path} className="btn btn-ghost normal-case text-xl">
            {home.title}
          </Link>
        </div>
      )}
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {childMenu.map((menu) => {
            return (
              <li key={menu.id} tabIndex={0}>
                {menu.children?.length ? (
                  <>
                    <div>
                      {menu.title}
                      <ChevronDownIcon className="h-4 w-4 text-black font-bold" />
                    </div>
                    <ul className="p-2 z-10">
                      {menu.children.map((child) => (
                        <li key={child.id}>
                          <Link href={child.path}>{child.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={menu.path}>{menu.title}</Link>
                )}
              </li>
            );
          })}
          <li>
            <ThemeChanger />
          </li>
          <li>
          <Link href={'auth/signin'}>Sign in</Link>
            <a></a>
          </li>
          <li>
            <a>Sign up</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end w-1/5">
        <a className="btn">Get started</a>
      </div>
    </div>
  );
};

export default HeaderDefault;
