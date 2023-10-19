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
  mostViewed = "Most Viewed",
  dailyOffers = "Daily Offers" 
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
            <ListLeft mostViewedBlogs={recommendedPosts} mostViewed={mostViewed}/>
          :
            <ListRight dailyOffers={products} dailyOffersTitle={dailyOffers}/>   

        }
      </div> 
    </div>
  );
}; 

export default ProductOfert;
