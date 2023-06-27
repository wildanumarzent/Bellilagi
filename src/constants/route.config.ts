import { HomeIcon } from '@heroicons/react/24/outline';

import { DisplayOn, Layout, TypeRouterConfig } from '@/types/general';

// Example ROUTE_CONFIG Object
// {
//   id: "reward",
//   title: "Dashboard Reward",
//   path: "/reward",
//   index: false,
//   exact: true,
//   parentAsPage: true,
//   layout: 'default',
//   layoutGroup: 'home',
//   icon: FolderIcon,
//   current: false,
//   children: [],
//   displayOn: ["mainmenu", "sidemenu", "mobile"],
//   soon: false,
// }

const ROUTE_CONFIG: TypeRouterConfig[] = [
  {
    id: 'home',
    title: 'GoodNews',
    path: '/',
    layout: Layout.DEFAULT,
    displayOn: [DisplayOn.MAIN_MENU],
  },
  {
    id: 'product',
    title: 'Product',
    path: '/product',
    layout: Layout.DEFAULT,
    displayOn: [DisplayOn.MAIN_MENU],
    children: [
      {
        id: 'product-detail',
        title: 'Product Detail',
        path: '/product/7',
        layout: Layout.FULLSCREEN,
        displayOn: [DisplayOn.SIDE_MENU, DisplayOn.MAIN_MENU],
      },
    ],
  },
  {
    id: 'solutions',
    title: 'Solutions',
    path: '/solutions',
    layout: Layout.DEFAULT,
    icon: HomeIcon,
    displayOn: [DisplayOn.SIDE_MENU, DisplayOn.MAIN_MENU],
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        path: '/solutions/analytics',
        layout: Layout.DEFAULT,
        displayOn: [DisplayOn.SIDE_MENU, DisplayOn.MAIN_MENU],
      },
      {
        id: 'engagement',
        title: 'Engagement',
        path: '/solutions/engagement',
        layout: Layout.DEFAULT,
        displayOn: [DisplayOn.SIDE_MENU, DisplayOn.MAIN_MENU],
      },
    ],
  },
  {
    id: 'pricing',
    title: 'Pricing',
    path: '/pricing',
    layout: Layout.DEFAULT,
    icon: HomeIcon,
    displayOn: [DisplayOn.SIDE_MENU, DisplayOn.MAIN_MENU],
    children: [],
  },
  // Misc Pages
  {
    id: 'not-found',
    title: 'Not Found',
    path: '/not-found',
    layout: Layout.FULLSCREEN,
    displayOn: [],
    children: [],
  },
];

export default ROUTE_CONFIG;
