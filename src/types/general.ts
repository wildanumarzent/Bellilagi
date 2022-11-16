export enum Layout {
  DEFAULT = 'default',
  FULLSCREEN = 'fullscreen',
}
export enum DisplayOn {
  MAIN_MENU = 'mainmenu',
  SIDE_MENU = 'sidemenu',
}

type HeroIcon = (props: React.ComponentProps<'svg'>) => JSX.Element;

export interface TypeRouterConfig {
  id: string;
  title: string;
  path: string;
  layout: Layout;
  children?: Array<TypeRouterConfig>;
  icon?: string | HeroIcon;
  displayOn: DisplayOn[];
}
