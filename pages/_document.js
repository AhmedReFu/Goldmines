import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">

      <Head>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1T2SLM58J8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-1T2SLM58J8');
        </script>



      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
