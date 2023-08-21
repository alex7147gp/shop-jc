import Image from 'next/image';
import styles from "@styles/ProductSummary.module.scss";


const ProductSummary = ({ titleI, image, descriptionP, car1, car2, car3, car4, car5 }) => {
  return (
    <div className={styles.productSummary}>
      <div className={styles.productImage}>
        <Image 
          width={200}  
          height={150}  
          alt={titleI} 
          src={image}
        />
      </div> 
      <div className={styles.productDescription}>
        <h2 className={styles.h2} >Descripción del Producto</h2>
        <p className={styles.p} >
          {descriptionP}
        </p>
        <h2 className={styles.h2} >Características Principales</h2>
        <ul className={styles.ul} >
          <li>{car1}</li>
          <li>{car2}</li>
          <li>{car3}</li>
          <li>{car4}</li>
          <li>{car5}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductSummary;