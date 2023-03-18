import React from 'react';
import styles from '@styles/CategoryItem.module.scss';
import Image from 'next/image';
import Link from "next/link";

const CategoryItem = ({ product }) => {

	return (
		<div className={styles.CategoryItem}>
			<Link href={`/categories/${product.id}`}>
			  <div className={styles.categoryHead}>
			    <Image  
			      src={product.img} 
			      alt={product.title} 
			      width={120} 
			      height={120} 
			      layaut="responsive"
			   />
			    <span>{product.title}</span> 
			  </div> 
			</Link>
			<div className={styles.categoryTema}>
			  <ul>
			  		<li>{product.temas[0]}</li>
			  		<li>{product.temas[1]}</li>
			  		<li>{product.temas[2]}</li>
			  		<li>{product.temas[3]}</li>
			  		<li>{product.temas[4]}</li>
			  </ul>
			</div>     
			<div className={styles['category-info']}>
              <button>Ver mas</button>
			</div>
		</div>
	);
};

export default CategoryItem;