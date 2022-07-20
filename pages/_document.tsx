import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta name="description" content="The best tires in the world" />
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <div id="shopping_card"></div>
          <div id="account_modal"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
