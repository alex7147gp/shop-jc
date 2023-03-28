import { useRouter } from 'next/router';


import Products from '@amazon/products';


import styles from '@styles/ProductList.module.scss';

import ProductItem from '@components/ProductItem';

import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import Categorie from "@amazon/categorie";


const CategoryItem = () => {
	


	const router = useRouter();
    const currentId = router.query.category;

    const categorie = Categorie.find(item => item.categorie === currentId);

    const products = Products;


	return(
		<div>
		  <HeadS
            title={currentId}
            description={`Productos en oferta sobre ${currentId}`}
            img={categorie && categorie.img}
          />
          <HeadPage 
            title={currentId}
            description={`Productos en oferta sobre ${currentId}`} 
          />
      	  <section className={styles['main-container']}>
		   	<div className={styles.ProductList}>
				{products && products.map(product => (
					<ProductItem product={product} key={product.id} />
				))}
			</div>
		  </section>
		</div>  
	);
};

export default CategoryItem;
