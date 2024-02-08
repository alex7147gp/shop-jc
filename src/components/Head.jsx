import Head from "next/head";



const HeadS = ({ 
  title,
  description,
  img = null,
  keywords,
  urlC = null,
  url,
  locale
  }) => {


return (
    <Head>
      <title>{title} | JcShop</title>
      <meta name="description" content={description} key="desc" />
      <meta name="keywords" content={keywords} key="keywords" />
      <meta name="robots" content="index, follow" key="robots" /> 
      {
        url && <link
          rel="canonical"
          href={`https://www.jcshop.shop${locale == 'es' ? '/es/' : '/'}${urlC}`}
        />
      }  
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:site_name" content="jcshop" />
      <meta property="og:url" content={`https://www.jcshop.shop${locale == 'es' ? '/es/' : '/'}${url}`} />
      
      {locale === 'es' && (
        <link
          rel="alternate"
          hrefLang="es"
          href={`https://www.jcshop.shop/es/${url}`} // Reemplaza con la URL correcta
        />
      )}

      {locale === 'en-US' && (
        <link
          rel="alternate"
          hrefLang="en-US"
          href={`https://www.jcshop.shop/en-US/${url}`} // Reemplaza con la URL correcta
        />
      )}

      {img && <meta
        property="og:image"
        href={img}
        key="ogimg"
      />}
    </Head>
  );
};

export default HeadS;