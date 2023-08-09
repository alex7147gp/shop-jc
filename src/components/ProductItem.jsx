import React from 'react';
import styles from '@styles/ProductItem.module.scss';
import Image from 'next/image';

import Link from "next/link";


const ProductItem = ({ product }) => {


    

    return (
		<div className={styles.ProductItem}>
			<div className={styles.Image}>
			    <Image 
			      src={product.imagen} 
			      alt={product.title} 
                  layout="responsive"
                  width={80} 
                  height={80}

			   />
			</div>       
			<div className={styles['product-info']}>
				<div>
					<Link href={product.url} target="_blank">
					  <h2>{product.titulo.substring(0, 60)}...</h2>
					</Link>
					<p>{product.precio}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
