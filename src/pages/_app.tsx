import Script from "next/script";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { QueryProvider } from '../../api/QueryProvider';
import { Footer }  from "../components/Footer";

import { appWithTranslation } from 'next-i18next';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

  
  return (
    <div>
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
      <QueryProvider>
        <Header />
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </QueryProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
