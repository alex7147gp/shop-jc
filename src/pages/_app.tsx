import React, { useState } from 'react';
import Script from "next/script";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { QueryProvider } from '../../api/QueryProvider';
import { Footer }  from "../components/Footer";
import Menu from "../components/Menu";

import { appWithTranslation } from 'next-i18next';
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {

  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Script
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-PZ99Y7KNEL"
        onLoad={() => {
          
        }}
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
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </QueryProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);
