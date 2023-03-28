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
                  width={40} 
                  height={40} 
			   />
			  </Link>
			</div>       
			<div className={styles['product-info']}>
				<div>
					<h2>{product.titulo.substring(0, 60)}...</h2>
					<p>{product.precio}</p>
				</div>
				<div>
				      <Image 
				        className={styles.disabled, styles['disable add-to-cart-btn']} 
					    src={"https://d1ttb1lnpo2lvz.cloudfront.net/37cbb331/img/stars-5.svg"}
					    width={15}
					    height={15} 
					    alt="added to cart" 
				      />
				      <Image 
				        className={styles.disabled, styles['disable add-to-cart-btn']} 
					    src={"https://d1ttb1lnpo2lvz.cloudfront.net/37cbb331/img/stars-5.svg"}
					    width={15}
					    height={15} 
					    alt="added to cart" 
				      />
				      <Image 
				        className={styles.disabled, styles['disable add-to-cart-btn']} 
					    src={"https://d1ttb1lnpo2lvz.cloudfront.net/37cbb331/img/stars-5.svg"}
					    width={15}
					    height={15} 
					    alt="added to cart" 
				      />
				      <Image 
				        className={styles.disabled, styles['disable add-to-cart-btn']} 
					    src={"https://d1ttb1lnpo2lvz.cloudfront.net/37cbb331/img/stars-5.svg"}
					    width={15}
					    height={15} 
					    alt="added to cart" 
				      />
				      <Image 
				        className={styles.disabled, styles['disable add-to-cart-btn']} 
					    src={"https://d1ttb1lnpo2lvz.cloudfront.net/37cbb331/img/stars-5.svg"}
					    width={15}
					    height={15} 
					    alt="added to cart" 
				      />   
				    </div>   
			</div>
		</div>
	);
};

export default ProductItem;
