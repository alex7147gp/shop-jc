import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import Image from 'next/image';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image loader={() => product.images[0]} 
			  src={product.images[0]} 
			  alt={product.title} 
			  width={240} 
			  height={240} 
			  layaut="responsive" 
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure> 
				  <div className={styles['more-clickable-area']} 
				    onClick={() => handleClick(product)}
					onKeyPress={() => handleClick(product)}
				    role='button'
				    tabIndex='0' 
				  >
				    {state.cart.includes(product) ? <Image 
				      className={styles.disabled, styles['disable add-to-cart-btn']} 
					  src={addToCartImage}
					  width={50}
					  height={50} 
					  alt="added to cart" 
				      /> 
				    : <Image className={styles['add-to-cart-btn'], styles.pointer} 
				        src={addToCartImage} 
					    alt="add to cart" 
					  />
				    }
				  </div>	
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;
