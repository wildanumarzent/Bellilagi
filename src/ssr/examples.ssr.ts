
import { PageProps } from '@/types/pages';
import type { GetStaticPaths, GetStaticProps } from 'next';

type ParsedQueryParams = {
  pages: string[];
};

// This function gets called at build time
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async ({
  locales,
}) => {
  // We'll pre-render only these paths at build time also with the slash route.
  return {
    paths: [{ params: { pages: [] } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PageProps,
  ParsedQueryParams
> = async ({ locale, params }) => {
  return {
    props: {
      variables: {},
      layout: ''
    },
    revalidate: 120,
  };
};

/*
Fix : locales: 14kB,
popularProducts: 30kB,
category: 22kB,
groups: 8kB,
group: 2kB,
settings: 2kB,
perProduct: 4.2 * 30 = 120kB,
total = 14 + 30 + 22 + 8 + 2 + 2 + 120 = 198kB
others: 225 - 198 = 27kB
 */
