import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/ProductA.module.scss';


const ProductoA = ({ imagen, titulo, descripcion, precio, url }) => {
  return (
    <div className={styles.container}>
        <Image
          className={styles.imagen} 
          src={imagen} 
          alt={titulo} 
          width={200} 
          height={200}        
      />
      <Link href={url} target="_blank">
        <h3 className={styles.titulo}>{titulo}</h3>
      </Link>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>Precio: {precio}</p>
      <p className={styles.ahorro}>Ahorra: 20%</p>
    </div>
  );
};

export default ProductoA;