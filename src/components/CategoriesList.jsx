import React from 'react';
import CategoryItem from '@components/CategoryItem';
import styles from '@styles/CategoriesList.module.scss';



const CategoriesList = () => {

 const products = [
  {
     "title": "Alimentacion y bebidas",
     "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     "temas": [
     	"Café de grano tostado",
     	"Fórmula en polvo para bebés",
     	"Whisky",
     	"Té verde"    	
     ],
     "id": "1"
  },{
     "title": "Alimentacion y bebidas",
     "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     "temas": [
     	"Café de grano tostado",
     	"Fórmula en polvo para bebés",
     	"Whisky",
     	"Té verde"
     ],
     "id": "2"
  },{
     "title": "Alimentacion y bebidas",
     "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     "temas": [
     	"Café de grano tostado",
     	"Fórmula en polvo para bebés",
     	"Whisky",
     	"Té verde"
     ],
     "id": "3"
  },{
     "title": "Alimentacion y bebidas",
     "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     "temas": [
     	"Café de grano tostado",
     	"Fórmula en polvo para bebés",
     	"Whisky",
     	"Té verde"
     ],
     "id": "4"
  },{
     "title": "Alimentacion y bebidas",
     "img": "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     "temas": [
     	"Café de grano tostado",
     	"Fórmula en polvo para bebés",
     	"Whisky",
     	"Té verde"
     ],
     "id": "5"
  }
];

	return (
		<section className={styles['main-container']}>
			<div className={styles.CategoriesList}>
				{products.map(product => (
					<CategoryItem product={product} key={product.id} />
				))}
			</div>
		</section>
	);
};

export default CategoriesList;