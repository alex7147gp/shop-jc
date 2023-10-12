import products from '../assets/blogs/products';


import Link from 'next/link';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';
import styles from '../styles/ReviewOfert.module.scss';


const ReviewOfert = ({ blogs = null, article = "Articles", cantidad = 6, url = null}) => {


  const { t } = useTranslation(['categorieOfert']);

  const productsa = blogs ? blogs : products;

  const articles = t('articles');

  return (
    <>
     <div className={styles.container}>
      <Link href={url != null ? `/blog/${url}` : '/'}>
        <h3 className={styles.h1}>{ article !== 'Articles' ? article : articles}</h3>
      </Link>
      <div className={styles.articulosContainer}>
        {productsa.slice(0, cantidad).map((articulo) => (
          <div className={styles.articulo} key={articulo.id}>
            <div className={styles.productImage}>
              <Image 
                src={articulo.image.url} 
                alt={articulo.title} 
                width={350} 
                height={250}  
              /> 
            </div>
            <Link href={`/blog/${articulo.category.slug}/${articulo.pageUrl}`}>
              <h4 className={styles.h2}>{articulo.title}</h4>
            </Link>
            <p className={styles.p}>{articulo.update}</p>
            <p className={styles.p}>{articulo.intro}</p>
          </div>
        ))} 
      </div>
    </div>
    </>  
	);
};
 
export default ReviewOfert;