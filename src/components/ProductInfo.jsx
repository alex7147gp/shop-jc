import React from 'react';
import Image from 'next/image';

import HeadS from "components/Head";
import styles from '@styles/ProductInfo.module.scss';


import Sugerencias from 'components/Sugerencias';


import Link from "next/link";



const ProductInfo = ({ product }) => {


	return (
		<>  
 
      {product && <div>
        <HeadS title={product.titulo} description={product.descripcion} img={product.imagen}/>        
        <div className={styles.Container}>
          <div className={styles.Wrapper}>
            <div className={styles.ImgContainer}>
              <Image 
                width={320} 
                height={320}  
                alt={product.titulo} 
                src={product.imagen}
              />
            </div>
            <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>{product.titulo}</h1>
              <p className={styles.Desc}>{product.descripcion}</p>
              <span className={styles.Price}>{product.precio}</span>
              <Link href={product.url} target="_blank">
                <button className={styles.Button}>
                  Ver oferta
                </button>
              </Link>  
           </div> 
          </div> 
        </div>
 
      
        <Sugerencias />
       </div>} 
		</>
	);
};

export default ProductInfo;
