import Head from "next/head";



const HeadS = ({ 
  title,
  description,
  img = null,
  keywords,
  urlC = null,
  url
  }) => {
    return(
    	<Head>
          <title>{title} | JcShop</title>
          <meta name="description" content={description} key="desc"/>
          <meta name="keywords" content={keywords} key="keywords" />
          <meta name="robots" content="index, follow" key="robots" />
          {
            url && <link 
                rel="canonical"
                href={`https://www.jcshop.shop${urlC}`}
              />
          }
          <meta property="og:title" content={title} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
          <meta property="og:site_name" content="jcshop"/>
          <meta property="og:url" content={`https://www.jcshop.shop${url}`} />
         { 
            img && <meta
              property="og:image"
              content={img}
              key="ogimg"
            />
          }
        </Head>
    );
};

export default HeadS;

