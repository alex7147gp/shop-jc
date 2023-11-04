import styles from '../styles/ProductOfert.module.scss';


import ProductA from "./ProductA";
import ListLeft from "./ListLeft";

import ListRight from "./ListRight";

const ProductOfert = ({ 
  productI,
  productT,
  productD,
  productP,
  productUrl,
  productOfert,
  recommendedPosts,
  products,
  locale
  }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <ProductA
        imagen={productI}
        titulo={productT}
        descripcion={productD}
        precio={productP}
        url={productUrl} 
      />
      </div>
      <div className={styles.textContainer}>
        {
          productOfert == "blogs" ?
            <ListLeft mostViewedBlogs={recommendedPosts} locale={locale}/>
          :
            <ListRight dailyOffers={products} locale={locale}/>   

        }
      </div>  
    </div>
  );
}; 

export default ProductOfert;
