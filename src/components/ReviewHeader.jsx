import styles from "@styles/ReviewHeader.module.scss";


const ReviewHeader = ({ titulo, description }) => {
  
  return (
    <div className={styles.reviewHeader}>
      <h1 className={styles.h1}>{titulo}</h1>
      <div className={styles.rating}>
        {/* Mostrar puntuación o calificación aquí */}
        <span className={styles.span} >4.5</span>
        {/* Puedes usar iconos de estrellas para representar la calificación */}
        <span className={styles.span} >⭐️⭐️⭐️⭐️⭐️</span>
      </div>
      <p className={styles.introduction}>
        {description}
      </p>
    </div>
  );
};
 
export default ReviewHeader;