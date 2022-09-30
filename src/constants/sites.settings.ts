export const EXAMPLE = '';
export const APP: Record<string, any> = {
  name: 'Nextjs Boilerplate',
  description: '',
  currencyCode: 'IDR',
  logo: null,
}
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
    metaTitle: 'Nextjs Boilerplate',
    metaDescription: 'Nextjs Boilerplate',
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
  }
}