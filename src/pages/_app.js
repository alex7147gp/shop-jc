import Script from "next/script";
import Header from "@components/Header";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import { Footer }  from "@components/Footer";

import HeadS from "@components/Head";

import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PZ99Y7KNEL"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PZ99Y7KNEL');
        `}
      </Script>
      <HeadS
        title={"JC shop"}
        description={"Mejores productos de oferta en el mercado"}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AppContext.Provider>
  );
}

export default MyApp;
