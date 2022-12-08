/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authenticationRequired?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

export interface PageProps {
  variables: {
    // Any custom variable
    products?: any;
    types?: any;
  };
  layout: string;
}

export interface PagePropsWithChildren extends PageProps {
  children: React.ReactNode;
}
