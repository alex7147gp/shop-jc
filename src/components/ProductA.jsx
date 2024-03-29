import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ProductA.module.scss';


const ProductoA = ({ imagen, titulo, descripcion, url, locale, }) => {

  return (
    <div className={styles.Container}>
      <p className={styles.h2}>Oferta</p>
      <Link href={url} target="_blank">
      <div className={styles.content}>
          <Image
            className={styles.imagen} 
            src={imagen} 
            alt={titulo} 
            width={200} 
            height={200}        
          />
          <h3 className={styles.titulo}>{titulo}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>{locale == 'es' ? 'Comprar ahora' : 'Shop now'}</p>
          <p className={styles.ahorro}>Ahorra: 20%</p>
      </div> 
      </Link> 
    </div>
  );
};

export default ProductoA;