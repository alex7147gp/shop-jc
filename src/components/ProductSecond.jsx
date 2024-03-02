import React from 'react';
import styles from '../styles/ProductSecond.module.scss'; // Importa los estilos CSS del componente

import { useTranslation } from 'next-i18next';
import Image from "next/image";

import Link from "next/link";

const ProductSecond = ({ products1, products2 }) => {

  const { t } = useTranslation(['categorieOfert']);

  return (
    <div className={styles.productRow}>
      <div className={styles.productRight}>
        <div className={styles.productText}>
          <h2 className={styles.h2}>{t('featuredOffers')}</h2>
          <p className={styles.p1}>{t('offer')}</p>
        </div>
        <ul className={styles.ul}>
          {products1.slice(0, 2).map((product) => (
          <li key={product.id} className={styles.productCard}>
            <div className={styles.containerImg}>
              <Image 
                src={product.imagen}
                alt={product.title}
                className={styles.productImage} 
                layout="responsive"
                width={100} 
                height={90} 
              />
            </div>
            <div className={styles.productInfo}>
              <Link href={product.url} target="_blank">
                <h3 className={styles.productTitle}>{product.titulo.substring(0, 40)}</h3>
              </Link>
              <p className={styles.productDes}>{product.descripcion.substring(0, 100)}</p>
            </div>
          </li>
          ))}
        </ul>  
      </div>
      <div className={styles.productLeft}>
        <div className={styles.productText}>
          <h2 className={styles.h2}>{t('everythingRecommend')}</h2>
          <p className={styles.p2}>{t('offer')}</p>
        </div>
        <ul className={styles.ul}>
          {products2.slice(0, 2).map((product) => (
          <li key={product.id} className={styles.productCard}>
            <div className={styles.containerImg}>
              <Image 
                src={product.imagen}
                alt={product.title}
                className={styles.productImage} 
                layout="responsive"
                width={100} 
                height={90} 
              />
            </div>
            <div className={styles.productInfo}>
              <Link href={product.url}>
                <h3 className={styles.productTitle}>{product.titulo.substring(0, 40)}</h3>
              </Link>
              <p className={styles.productDes}>{product.descripcion.substring(0, 100)}</p>
            </div>
          </li>
          ))}
        </ul>  
      </div>
    </div>
  );
};

export default ProductSecond;