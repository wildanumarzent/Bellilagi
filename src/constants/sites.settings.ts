export const EXAMPLE = '';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const APP: Record<string, any> = {
  name: 'Subway',
  description: '',
  currencyCode: 'IDR',
  logo: null,
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GENERAL: Record<string, any> = {
  siteTitle: APP.name,
  siteSubtitle: APP.description,
  currency: APP.currencyCode,
  logo: {
    id: 1,
    thumbnail: APP.logo,
    original: APP.logo,
  },
  seo: {
    metaTitle: 'Apps',
    metaDescription: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: {
      id: 1,
      thumbnail: '',
      original: '',
    },
    twitterHandle: '',
    twitterCardType: '',
    metaTags: '',
    canonicalUrl: '',
  },
};
