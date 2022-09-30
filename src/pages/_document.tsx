import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

function getDirection(language: string | undefined) {
  return "ltr";
}

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    const dir = getDirection(locale);
    return (
      <Html data-theme="garden">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body dir={dir}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
