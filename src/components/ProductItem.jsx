import React from 'react';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

import Link from "next/link";


const ProductItem = ({ product }) => {


    

    return (
		<div className={styles.ProductItem}>
			<div className={styles.Image}>
			  <Link href={`/Products/${product.id}`}>
			    <Image 
			      src={product.imagen} 
			      alt={product.title} 
                  layout="responsive"
                  width={80} 
                  height={80} 
			   />
			  </Link>
			</div>       
			<div className={styles['product-info']}>
				<div>
					<h2>{product.titulo.substring(0, 60)}...</h2>
					<p>{product.precio}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
