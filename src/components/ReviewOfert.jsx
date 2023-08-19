import products from '@blogs/products';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/ReviewOfert.module.scss';


const ReviewOfert = ({ product, article = "Articles"}) => {

  const productsa = product ? product : products;

	return (
    <>
     <div className={styles.container}>
      <Link href={`/blog/${article == "Articles" ? "" : article}`}>
        <h3 className={styles.h1}>{article}</h3>
      </Link>
      <div className={styles.articulosContainer}>
        {productsa.slice(0, 6).map((articulo) => (
          <div className={styles.articulo} key={articulo.id}>
            <div className={styles.productImage}>
              <Image 
                src={articulo.imagen} 
                alt={articulo.titulo} 
                width={350} 
                height={250}  
              /> 
            </div>
            <Link href={`/${articulo.url}`}>
              <h4 className={styles.h2}>{articulo.titulo}</h4>
            </Link>
            <p className={styles.p}>{articulo.fecha}</p>
            <p className={styles.p}>{articulo.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
    </>  
	);
};

export default ReviewOfert;