import products from '../assets/blogs/products';


import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import styles from '../styles/ReviewOfert.module.scss';


const ReviewOfert = ({ blogs = null, type, urlN, article = "Articles", cantidad = 6, url = null}) => {


  const { t } = useTranslation(['categorieOfert']);

  const productsa = blogs ? blogs : products;

  const articles = t('articles');

  return (
    <>
     <div className={styles.container}>
      <Link href={url != null ? `/blog/${url}` : '/'}>
      {
        type ?
          <h3 className={styles.h1}>{t(`${type}`)}</h3>
        : 
          <h3 className={styles.h1}>{ article !== 'Articles' ? article : articles}</h3>
      }
      </Link>
      <div className={styles.articulosContainer}>
        {productsa.slice(0, cantidad).map((articulo) => (
          <div className={styles.articulo} key={articulo.id}>
            <div className={styles.productImage}>
              <Image 
                src={articulo.image.url} 
                alt={articulo.title} 
                layout="responsive"
                width={384} 
                height={256}     
              /> 
            </div>
            {
              urlN ? 
                <Link href={`/${urlN}/${articulo.pageUrl}`}>
                  <h4 className={styles.h2}>{articulo.title}</h4>
                </Link>
              :
                <Link href={`/blog/${articulo.category.slug}/${articulo.pageUrl}`}>
                  <h4 className={styles.h2}>{articulo.title}</h4>
                </Link>
            }
            <p className={styles.span}>{articulo.update}</p>
            <p className={styles.p}>{articulo.intro.substring(0, 400)}</p>
          </div> 
        ))} 
      </div>
    </div>
    </>  
	);
};
 
export default ReviewOfert;