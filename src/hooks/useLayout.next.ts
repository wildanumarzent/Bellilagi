import { useRouter } from 'next/router';

import RouterConfig from '@/constants/route.config';
import type { TypeRouterConfig } from '@/types/general';

interface ReturnType {
  layout: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  route?: TypeRouterConfig | { [key: string]: any };
}

{
  /* How to Use */
}
{
  /*
  const { layout, route } = useLayout();
*/
}

const useLayout = (): ReturnType => {
  const router = useRouter();
  const regex = /^\/$|^\/\?(.*)/;

  if (regex.test(router?.asPath)) {
    const homePage = RouterConfig[0];
    return {
      layout: homePage?.layout ?? 'default',
      route: homePage,
    };
  }

  const route = RouterConfig?.find((each) => each?.path === router?.asPath);
  return {
    layout: route ? route?.layout : 'fullscreen',
    route: route,
  };
};

export default useLayout;
