import "@/styles/style.scss";
//
import { ReactElement, useEffect } from "react";
import { themeChange } from "theme-change";
import { useRouter } from "next/router";
import { pageview } from "@/utils/gtag";
import storage from "@/utils/storage";
import useTheme from "@/zus/theme";
// type
import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@/types/pages";
// Components
import DefaultSeo from "@/components/Seo";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const router = useRouter();
  const isProduction = process.env.NODE_ENV === "production";

  const useThemeState = useTheme((state) => state);

  // Google Anlaytics
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [isProduction, router.events]);

  // theme
  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    const theme = storage.getTheme();
    useThemeState.setTheme(theme ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page);

  return (
    <>
      <DefaultSeo />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
export default CustomApp;
