import styles from "@styles/ReviewHeader.module.scss";


const ReviewHeader = () => {
  
  return (
    <div className={styles.reviewHeader}>
      <h1 className={styles.h1}>titulo</h1>
      <div className={styles.rating}>
        {/* Mostrar puntuación o calificación aquí */}
        <span className={styles.span} >4.5</span>
        {/* Puedes usar iconos de estrellas para representar la calificación */}
        <span className={styles.span} >⭐️⭐️⭐️⭐️⭐️</span>
      </div>
      <p className={styles.introduction}>
        Este es un review sobre el mejor controlador de apertura de garaje inteligente.
        Aquí encontrarás detalles sobre sus características y rendimiento.
      </p>
    </div>
  );
};
 
export default ReviewHeader;