import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <main className="max-w-7xl">
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
}
