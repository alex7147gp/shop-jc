import React from 'react';
import ProductItem from '@components/ProductItem';

import styles from '@styles/ProductList.module.scss';


import Products from '@amazon/products';


const ProductList = ({ products }) => {
	const product = products ? products : Products ;

	return (
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{product.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};

export default ProductList;
