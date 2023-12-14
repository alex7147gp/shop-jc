import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getBlog, getBlogListByCategory, getNewsList, getTutorialsList, getContentfulAssetById, getCategoryList } from '../../../../api';
import HeadS from "../../../components/Head";




import GuiaHeader from '../../../components/GuiaHeader';
import Conclusion from '../../../components/Conclusion';

import ProductOfert from "../../../components/ProductOfert";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import CategorieOfert from "../../../components/CategorieOfert";
import ReviewOfert from "../../../components/ReviewOfert";

import SecondHeader from "../../../components/SecondHeader";

import BlogSection from "../../../hooks/infinitiScrolling";

import products from "../../../assets/amazon/products";

import Image from 'next/image';
import styles from "../../../styles/BlogPageOld.module.scss";

import stylesImg from "../../../styles/Image.module.scss";

export const getStaticPaths = async ({ locales }) => {
  if (locales === undefined) {
    throw new Error('Uh, ¿olvidaste configurar los locales en tu archivo de configuración de Next.js?');
  }

  const paths = [];

  for (const loc of locales) {
    const categoryLocal = 'computers';

    const { entries } = await getBlogListByCategory({
      category: categoryLocal,
      limit: 12,
      locale: loc,
    });

    const localePaths = entries.map((articulo) => ({
      params: {
        pageUrl: articulo.pageUrl,
      },
      locale: loc,
    }));

    paths.push(...localePaths);
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params, preview, locale }) => {
  
  const pageUrl = params?.pageUrl;


  if(typeof pageUrl !== 'string'){
    return {
      notFound: true
    };
  }

  try{

    const blog = await getBlog(pageUrl, preview, locale);

    const newsList = await getNewsList({ limit: 12, locale });

    const tutorialsList = await getTutorialsList({ limit: 12, locale });

    const categorie = await getCategoryList({ limit: 10, locale });

      return {
        props: {
          blog,
          categorie,
          newsList,
          tutorialsList,
          locale,
        },
        revalidate: 5 * 60,
      };

  }
  catch (e) {

    console.log(e);

    return {
      notFound: true  
    };
  } 
};

const options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      return <EmbeddedAsset assetId={node.data.target.sys.id} />;
    },
  },
};

function EmbeddedAsset({ assetId }) {
  const [asset, setAsset] = useState(null);

  useEffect(() => {
    async function fetchAsset() {
      try {
        const assetData = await getContentfulAssetById(assetId);

        if (assetData && assetData.fields) {
          setAsset(assetData.fields);
        }
      } catch (error) {
        console.error('Error al obtener el Asset:', error);
      }
    }

    fetchAsset();
  }, [assetId]);

  if (!asset) {
    return null;
  }

  const { title, file } = asset;
  if (!title || !file || !file.url) {
    return null;
  }

  return (

    <div className={stylesImg.imgContainer}>
      <Image className={stylesImg.imgSlice}
        src={`https:${file.url}`}
        alt={title}
        width={120}
        height={120}
      />
    </div>
  );
}

export default function ArticlePage({ blog, newsList, tutorialsList, categorie, locale }) {

  const router = useRouter();

  if (blog == null){
    return(
      <div>
        Page not found
      </div>
    );
  }

  if(router.isFallback) {
    return (
      <div>
        Loading awesomeness...
      </div>    
    );
  }

  const richText = blog.body; 

  const renderedRichText = documentToReactComponents(richText, options);

  return (
    <div>
    <SecondHeader /> 
    <div className={styles.blogContainer}>
      <HeadS
        title={blog.titleCeo}
        description={blog.descripctionCep}
        keywords={blog.keywords}
        urlC={`blog/${blog.category.slug}/${blog.urlCeo}`}
        url={`blog/${blog.category.slug}/${blog.urlCanonical}`}
        locale={locale}
      />
      <GuiaHeader 
        titulo={blog.title}
        intro={blog.intro}
        img={blog.image.url}
        update={blog.update}
        locale={locale}
      />
      {blog.productT &&
      <ProductOfert 
        productI={blog.productI} 
        productT={blog.productT}
        productD={blog.productD}
        productP={blog.productP}
        productUrl={blog.productUrl}
        productOfert={"blogs"}
        recommendedPosts={blog.recommendedPostsCollection}
        products={products}
        locale={locale}
      />
      }
      <div className={styles.container}>
        <div className={styles.contentRich}>
          {renderedRichText}
        </div> 
      </div>
      {blog.productT2 &&
      <ProductOfert 
        productI={blog.productI2}
        productT={blog.productT2}
        productD={blog.productD2}
        productP={blog.productP2}
        productUrl={blog.productUrl}
        productOfert={"ofers"}
        recommendedPosts={blog.recommendedPostsCollection}
        products={products}
        locale={locale}
      />
      }
      <Conclusion dconclucion={blog.conclucion} />
    </div>
    <ReviewOfert 
      blogs={newsList} 
      article={locale == "es" ? "Noticias" : "News"}
      urlN='news'
    />
    <ReviewOfert 
      blogs={tutorialsList} 
      article={locale == "es" ? "Tutoriales" : "Tutorials"}
      urlN='tutorials'
    />
    <ReviewOfert 
      blogs={blog.recommendedPostsCollection} 
      article={locale == "es" ? "Lo mas visto" : "Trending stories"} 
      cantidad={blog.recommendedPostsCollection.length} 
      url={blog.category.slug}
     />
    <BlogSection locale={locale} />
    <CategorieOfert categorie={categorie} />
    </div>
  );
}