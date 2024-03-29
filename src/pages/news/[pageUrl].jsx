import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getNews, getNewsList, getTutorialsList, getContentfulAssetById, getCategoryList } from '../../../api';
import HeadS from "../../components/Head";


import GuiaHeader from '../../components/GuiaHeader';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import CategorieOfert from "../../components/CategorieOfert";
import ReviewOfert from "../../components/ReviewOfert";

import SecondHeader from "../../components/SecondHeader";

import ListLeft from "../../components/ListLeft";

import BlogSection from "../../hooks/infinitiScrolling";

import Image from 'next/image';
import styles from "../../styles/BlogPageOld.module.scss";

import stylesImg from "../../styles/Image.module.scss";

export const getStaticPaths = async ({ locales }) => {
  if (locales === undefined) {
    throw new Error('Uh, ¿olvidaste configurar los locales en tu archivo de configuración de Next.js?');
  }

  const paths = [];

  for (const loc of locales) {

    const news = await getNewsList({
      limit: 12,
      locale: loc,
    });

    const localePaths = (news || []).map((articulo) => ({
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

    const news = await getNews(pageUrl, preview, locale);

    const categorie = await getCategoryList({ limit: 10, locale });

    const newsList = await getNewsList({ limit: 12, locale });

    const tutorialsList = await getTutorialsList({ limit: 12, locale });

      return {
        props: {
          news,
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
        width={520}
        height={520}
      />
    </div>
  );
}

export default function ArticlePage({ news, categorie, newsList, tutorialsList, locale }) {

  const router = useRouter();

  if (news == null){
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

  const richText = news.body; 

  const renderedRichText = documentToReactComponents(richText, options);

  return (
    <div>
    <SecondHeader /> 
    <div className={styles.blogContainer}>
      <HeadS
        title={news.titleCeo}
        description={news.descripctionCep}
        keywords={news.keywords}
        urlC={`news/${news.urlCeo}`}
        url={`news/${news.urlCanonical}`}
        img={news.image.url}
        locale={locale}
      />
      <GuiaHeader 
        titulo={news.title}
        intro={news.intro}
        img={news.image}
        update={news.update}
        locale={locale}
      />
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.contentRich}>
            {renderedRichText}
          </div> 
          <div className={styles.cont}>
            <div className={styles.recommendedContent}>
              <ListLeft mostViewedBlogs={news.recommendedPostsCollection} locale={locale}/>
            </div>
          </div>
        </div>
      </div>
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
      blogs={news.recommendedPostsCollection} 
      article={locale == "es" ? "Lo mas visto" : "Trending stories"} 
      cantidad={news.recommendedPostsCollection.length} 
      url={news.category.slug}
     />
    <BlogSection locale={locale} />
    <CategorieOfert categorie={categorie} />
    </div>
  );
}