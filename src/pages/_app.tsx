import '@/styles/style.scss';

// type
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
//
import { ReactElement, useEffect, useState } from 'react';
import { themeChange } from 'theme-change';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Components
import DefaultSeo from '@/components/Seo';
import type { NextPageWithLayout } from '@/types/pages';
import { pageview } from '@/utils/gtag';
import storage from '@/utils/storage';
import useTheme from '@/store/theme';
import Splashscreen from '@/components/atoms/splashscreen/Splashscreen';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CustomApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const router = useRouter();

  const useThemeState = useTheme((state) => state);
  const [show, setShow] = useState(false);

  // theme
  useEffect(() => {
    themeChange(false);
  }, [useThemeState]);

  useEffect(() => {
    const theme = storage.getTheme();
    console.log('test');

    useThemeState.setTheme(theme ?? 'light');
    console.log(useThemeState);

    themeChange(false);
    setTimeout(() => {
      setShow(true);
    }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);
  const isSplashScreen = router.asPath === '/' && !show;
  return (
    <>
      <DefaultSeo />
      {isSplashScreen ? (
        <Splashscreen />
      ) : (
        <>
          {getLayout(<Component {...pageProps} />)}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </>
      )}
    </>
  );
}
export default CustomApp;
