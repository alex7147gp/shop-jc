import React from 'react';
import styles from '../styles/ProductGrid.module.scss'; // Importa los estilos CSS del componente

import { useTranslation } from 'next-i18next';
import Image from "next/image";

import Link from "next/link";

const ProductGrid = ({ products }) => {

  const { t } = useTranslation(['categorieOfert']);

  return (
    <div className={styles.productRow}>
    <h2 className={styles.h2}>{t('topDeals')}</h2>
    <ul className={styles.ul}>
     {products.slice(0, 6).map((product) => (
        <li key={product.id} className={styles.productCard}>
          <Link href={product.url} target="_blank">
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
              <h3 className={styles.productTitle}>{product.titulo.substring(0, 40)}</h3>
              <p className={styles.productPrice}>{product.oferta}% {t('off')}</p>
          </div>
          </Link>
        </li>
      ))}
    </ul>  
    </div>
  );
};

export default ProductGrid;