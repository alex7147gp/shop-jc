import styles from '@styles./ProductoA.module.css';

const ProductoA = ({ imagen, titulo, descripcion, precio, porcentajeAhorro }) => {
  return (
    <div className={styles.container}>
      <img src={imagen} alt={titulo} className={styles.imagen} />
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>Precio: {precio}</p>
      <p className={styles.ahorro}>Ahorra: {porcentajeAhorro}%</p>
    </div>
  );
};

export default ProductoA;