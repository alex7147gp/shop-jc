import React from 'react';
import styles from '../styles/ProductItem.module.scss';
import Image from 'next/image';

import { useTranslation } from 'next-i18next';

import Link from "next/link";


const ProductItem = ({ product }) => {

    const { t } = useTranslation(['ofert']);
    
    return (
		<div className={styles.ProductItem}>
			<div className={styles.ImageContainer}>
			    <Image 
			      src={product.imagen} 
			      alt={product.titulo} 
                  layout="responsive"
                  width={200} 
                  height={200}

			   />
			</div>       
			<div className={styles['product-info']}>
				<div>
					<h2>{product.titulo.substring(0, 40)}...</h2>
					<Link href={product.url} target="_blank">
					  <p>{`Precio: ${product.precio}`}</p>
					</Link>
				</div> 
			</div>
		</div>
	);
};

export default ProductItem;
