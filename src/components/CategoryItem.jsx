import React from 'react';
import styles from '@styles/CategoryItem.module.scss';
import Image from 'next/image';
import Link from "next/link";

const CategoryItem = ({ sugerencias }) => {

  const temas = sugerencias.temas;
  
  const temaList = [];

  const getTemas = () => {
  	temas.forEach((item) => {
  		temaList.push(<li>{item}</li>);
  	});
  	return temaList;
  };

	return (
		<div className={styles.CategoryItem}>
			<Link href={`/categories/${sugerencias.categorie}`}>
			  <div className={styles.categoryHead}>
			    <Image  
			      src={sugerencias.img} 
			      alt={sugerencias.title} 
			      width={120} 
			      height={120} 
			      layaut="responsive"
			   />
			    <span>{sugerencias.title}</span> 
			  </div> 
			</Link>
			<div className={styles.categoryTema}>
			  <ul>
			    {getTemas()}
			  </ul>
			</div>     
			<div className={styles['category-info']}>
              <button>Ver mas</button>
			</div>
		</div>
	);
};

export default CategoryItem;