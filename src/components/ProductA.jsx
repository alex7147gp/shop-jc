import Image from 'next/image';
import Link from 'next/link';

import styles from '@styles/ProductA.module.scss';


const ProductoA = ({ imagen, titulo, descripcion, url }) => {
  return (
    <div className={styles.container}>
      <Link href={url}>
        <Image
          className={styles.imagen} 
          src={imagen} 
          alt={titulo} 
          width={200} 
          height={200}        
      />
      </Link>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>Precio: $43</p>
      <p className={styles.ahorro}>Ahorra: 20%</p>
    </div>
  );
};

export default ProductoA;