import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

function getDirection() {
  return 'ltr';
}

export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }
  render() {
    const dir = getDirection();
    return (
      <Html data-theme={process.env.NEXT_PUBLIC_THEME ?? 'Meteor'}>
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
