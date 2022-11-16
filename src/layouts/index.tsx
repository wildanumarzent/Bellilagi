import dynamic from 'next/dynamic';

import useLayout from '@/hooks/useLayout.next';

const Fullscreen = dynamic(() => import('@/layouts/Fullscreen'));
const Main = dynamic(() => import('@/layouts/Main'));

export default function SiteLayout({ children }: React.PropsWithChildren) {
  const { layout } = useLayout();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MAP_LAYOUT: Record<string, any> = {
    fullscreen: Fullscreen,
    default: Main,
  };
  const Component = MAP_LAYOUT[layout ?? 'default'];

  return <Component layout={layout}>{children}</Component>;
}

export const getLayout = (page: React.ReactElement) => <SiteLayout>{page}</SiteLayout>;
