import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WrapperOrder from '@containers/WrapperOrder';
import AppContext from '@context/AppContext';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrder.module.scss';

const MyOrder = () => {

	const { toggleOrder } = useContext(AppContext);

	return (
		<aside className={styles.MyOrder}>
			<div className={styles['MyOrder-container']}>
				<div className={styles['title-container']}>
				  <Image className={styles['more-clckable-area'], styles.pointer} src={arrow} alt="arrow" onClick={() => toggleOrder()} />
				  <p className="title">My order</p>
				</div>
                <WrapperOrder/>
				<Link className={styles['primary-button']} href="/checkout">
				  	Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;
