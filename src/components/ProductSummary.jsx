import Image from 'next/image';
import styles from "@styles/ProductSummary.module.scss";


const ProductSummary = () => {
  return (
    <div className={styles.productSummary}>
      <div className={styles.productImage}>
        <Image 
          width={200}  
          height={150}  
          alt="Acer Aspire 3 A315-24P-R7VH Slim Laptop | 15.6' Full HD IPS Display | AMD Ryzen 3 7320U Quad-Core Processor | AMD Radeon Graphics | 8GB LPDDR5 | 128GB NVMe SSD | Wi-Fi 6 | Windows 11 Home in S Mode" 
          src="https://m.media-amazon.com/images/I/71+1lOl1Y1L._AC_SL1500_.jpg"
        />
      </div> 
      <div className={styles.productDescription}>
        <h2 className={styles.h2} >Descripción del Producto</h2>
        <p className={styles.p} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula
          eget tellus elementum auctor a eu turpis. Vivamus hendrerit dui vel venenatis
          vestibulum.
        </p>
        <h2 className={styles.h2} >Características Principales</h2>
        <ul className={styles.ul} >
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
          {/* Agregar más características aquí */}
        </ul>
      </div>
    </div>
  );
};

export default ProductSummary;