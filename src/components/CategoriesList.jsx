import React from 'react';
import CategoryItem from '@components/CategoryItem';
import styles from '@styles/CategoriesList.module.scss';

import CategoryOfert from "@components/CategoryOfert"

import categorie from '@amazon/categorie';


const sugerencias = categorie;

const CategoriesList = () => {

	return (
		<section className={styles['main-container']}>
			<div className={styles.CategoriesList}>
				{sugerencias.map(sugerencia => (
					<CategoryItem sugerencias={sugerencia} key={sugerencia.id} />
				))}
			</div>
		</section>
	);
};

export default CategoriesList;