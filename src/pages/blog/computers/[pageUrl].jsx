import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { flatMap } from 'lodash';
import { getBlog, getBlogListByCategory, getContentfulAssetById, getCategoryList } from '../../../../api';
import HeadS from "../../../components/Head";

import GuiaHeader from '../../../components/GuiaHeader';
import Conclusion from '../../../components/Conclusion';

import ProductA from "../../../components/ProductA";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import CategorieOfert from "../../../components/CategorieOfert";
import ReviewOfert from "../../../components/ReviewOfert";
import Image from 'next/image';
import styles from "../../../styles/BlogPage.module.scss";

import stylesImg from "../../../styles/Image.module.scss";

export const getStaticPaths = async ({ locales }) => {

  if(locales === undefined) {
    throw new Error('Uh, did you forget configure locales in your Next.js config');
  }

  const { entries } = await getBlogListByCategory({
    category: 'computers',
    limit: 12,
    locale: locales,
  });

  const paths = flatMap(entries.map((articulo) => ({
    params: {
      pageUrl: articulo.pageUrl,
    },
  })),
  (path) => locales.map((loc) => ({ locale: loc, ...path}))
  );

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

    const categorie = await getCategoryList({ limit: 10, locale });

      return {
        props: {
          blog,
          categorie,
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

export default function ArticlePage({ blog, categorie }) {

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
    <div className={styles.blogContainer}>
      <HeadS
        title={blog.titleCeo}
        description={blog.descriptionCep}
        keywords={blog.keywords}
        urlC={blog.urlCeo}
        url={blog.urlCanonical}
      />
      <GuiaHeader titulo={blog.title} intro={blog.intro} img={blog.image.url} />
      <ProductA
        imagen={blog.productI}
        titulo={blog.productT}
        descripcion={blog.productD}
        precio={blog.productP}
        url={blog.productUrl}
      />
      <div className={styles.container}>
        {renderedRichText}
      </div>
      <ProductA
        imagen={blog.productI2}
        titulo={blog.productT2}
        descripcion={blog.productD2}
        precio={blog.productP2}
        url={blog.productUrl2}
      />
      <Conclusion dconclucion={blog.conclucion} />

    </div>
    <ReviewOfert 
      blogs={blog.recommendedPostsCollection} 
      article={blog.category.titleShow} 
      cantidad={blog.recommendedPostsCollection.length} 
      url={blog.category.slug}
     />
    <CategorieOfert categorie={categorie} />
    </div>
  );
}