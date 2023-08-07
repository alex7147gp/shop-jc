import products from '@blogs/products';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/ReviewOfert.module.scss';


const ReviewOfert = ()=> {
	return (
    <>
     <div className={styles.container}>
      <h1 className={styles.h1}>Artículos de Smartphones</h1>
      <div className={styles.articulosContainer}>
        {products.slice(0, 6).map((articulo) => (
          <div className={styles.articulo} key={articulo.id}>
            <div className={styles.productImage}>
              <Image 
                src={articulo.imagen} 
                alt={articulo.titulo} 
                width={200} 
                height={150}  
              />
            </div>
            <Link href="/reviews/gaming/Como-elegir-la-computadora-perfecta-para-gaming">
              <h2 className={styles.h2}>{articulo.titulo}</h2>
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