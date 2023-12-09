import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getTutorials, getTutorialsList, getNewsList, getContentfulAssetById, getCategoryList } from '../../../api';
import HeadS from "../../components/Head";


import GuiaHeader from '../../components/GuiaHeader';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import CategorieOfert from "../../components/CategorieOfert";
import ReviewOfert from "../../components/ReviewOfert";

import SecondHeader from "../../../components/SecondHeader";

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

    const tutorials = await getTutorialsList({
      limit: 12,
      locale: loc,
    });

    const localePaths = (tutorials || []).map((articulo) => ({
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

    const tutorials = await getTutorials(pageUrl, preview, locale);

    const categorie = await getCategoryList({ limit: 10, locale });

    const tutorialsList = await getTutorialsList({ limit: 12, locale });

    const newsList = await getNewsList({ limit: 12, locale });

      return {
        props: {
          tutorials,
          categorie,
          tutorialsList,
          newsList,
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

export default function ArticlePage({ tutorials, categorie, tutorialsList, newsList, locale }) {

  const router = useRouter();

  if (tutorials == null){
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

  const richText = tutorials.body; 

  const renderedRichText = documentToReactComponents(richText, options);

  return (
    <div>
    <SecondHeader /> 
    <div className={styles.blogContainer}>
      <HeadS
        title={tutorials.titleCeo}
        description={tutorials.descripctionCep}
        keywords={tutorials.keywords}
        urlC={`/${tutorials.urlCeo}`}
        url={`/${tutorials.urlCanonical}`}
      />
      <GuiaHeader 
        titulo={tutorials.title}
        intro={tutorials.intro}
        img={tutorials.image.url}
        update={tutorials.update}
        locale={locale}
      />
      <div className={styles.container}>
        <div className={styles.contentRich}>
          {renderedRichText}
        </div> 
      </div>
    </div>
    <ReviewOfert 
      blogs={tutorialsList} 
      article={locale == "es" ? "Tutoriales" : "Tutorials"}
      urlN ='tutorials'
    />
    <ReviewOfert 
      blogs={newsList} 
      article={locale == "es" ? "Noticias" : "News"}
      urlN ='news'
    />
    <ReviewOfert 
      blogs={tutorials.recommendedPostsCollection} 
      article={locale == "es" ? "Lo mas visto" : "Trending stories"} 
      cantidad={tutorials.recommendedPostsCollection.length} 
      url={tutorials.category.slug} 
     />
    <BlogSection locale={locale} />
    <CategorieOfert categorie={categorie} />
    </div>
  );
}