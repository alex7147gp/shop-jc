import styles from "@styles/UserReviews.module.scss";


const UserReviews = () => {
  return (
    <div className={styles.userReviews}>
      <h2 className={styles.h2} >Opiniones de los usuarios:</h2>
      <ul className={styles.ul} >
        <li>
          <span className={styles.userName}>Usuario1:</span> Calificación: 4.5
          <p className={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula eget tellus elementum auctor a eu turpis. Vivamus hendrerit dui vel venenatis vestibulum.
          </p>
        </li>
        <li>
          <span className={styles.userName}>Usuario2:</span> Calificación: 3.8
          <p className={styles.reviewText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula eget tellus elementum auctor a eu turpis. Vivamus hendrerit dui vel venenatis vestibulum.
          </p>
        </li>
        {/* Agregar más reseñas de usuarios aquí */}
      </ul>
    </div>
  );
};

export default UserReviews;