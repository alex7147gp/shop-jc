import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';

const WrapperOrder = () => {
	
const { state } = useContext(AppContext);

const sumTotal = () => {
	const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
	  const sum = state.cart.reduce(reducer, 0);
	  return sum;
    };
	
    return (
		<div className={styles['mi-order-content']}>
			{state.cart.map(product => (
			<OrderItem product={product} key={`orderItem-${product.id}`} />
			))}
			<div className={styles.order}>
				<p>
					<span>Total</span>
				</p>
				<p>${sumTotal()}</p>
			</div>  
		</div>
	);
};

export default WrapperOrder;