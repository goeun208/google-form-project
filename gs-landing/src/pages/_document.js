import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="/css/SpoqaHanSansNeo.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="/css/SpoqaHanSans-jp.css"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
