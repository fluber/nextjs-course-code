import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>

        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </html>
    );
  }
}

export default MyDocument;
