import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <main >
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1T2SLM58J8`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-1T2SLM58J8', {
             page_path: window.location.pathname,
           });
         `,
        }}
      />
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}
