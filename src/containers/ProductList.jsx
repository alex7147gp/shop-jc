import React from 'react';
import ProductItem from '../components/ProductItem';

import styles from '../styles/ProductList.module.scss';


import { useTranslation } from 'next-i18next';
import Products from '../assets/amazon/products';


const ProductList = ({ products }) => {
	

	const product = products ? products : Products ;

	const { t } = useTranslation(['ofert']);

	return (
		<div className={styles.container}>
		  <h2 className={styles.h2}>{t('ofert3')}</h2>
		  <section className={styles['main-container']}>
			  <div className={styles.ProductList}>
				  {product.map(product => ( 
					  <ProductItem product={product} key={product.id} />
				  ))}
			  </div> 
		  </section>
	    </div>
	);
};

export default ProductList;
