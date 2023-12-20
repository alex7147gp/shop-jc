import styles from '../styles/ProductOfert.module.scss';


import ProductA from "./ProductA";


const ProductOfert = ({ 
  productI,
  productT,
  productD,
  productP,
  productUrl,
  
  
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
    </div>
  );
}; 

export default ProductOfert;
