import Head from "next/head";



const HeadS = ({ title, description, img = null }) => {
    return(
    	<Head>
          <title>{title} | JcShop</title>
          <meta name="description" content={description} key="desc"/>
          <meta property="og:title" content={title} />
          <meta
            property="og:description"
            content={description}
          />
         { 
            img && <meta
              property="og:image"
              content={img}
            />
          }
        </Head>
    );
};

export default HeadS;

