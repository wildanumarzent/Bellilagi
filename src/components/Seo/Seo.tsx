import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps extends NextSeoProps {
  url?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  images?: any[] | null;
}
const Seo = ({ title, description, images, url, ...props }: SeoProps) => {
  return (
    <NextSeo
      title={title}
      openGraph={{
        ...(Boolean(url) && {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${url}`,
        }),
        title,
        description,
        ...(Boolean(images) && {
          images: images?.map((item) => ({
            url: item?.image?.original,
            alt: item?.title,
          })),
        }),
      }}
      {...props}
    />
  );
};

export default Seo;
