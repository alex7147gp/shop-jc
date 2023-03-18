import Head from "next/head";



const HeadS = ({ title, description, img = null }) => {
    return(
    	<Head>
          <title>{title}</title>
          <meta name="description" content={description} key="desc"/>
          <meta property="og:title" content={`Social Title for ${title}`} />
          <meta
            property="og:description"
            content={`And a social description for ${description}`}
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