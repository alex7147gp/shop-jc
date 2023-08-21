import styles from "@styles/UserReviews.module.scss";


const UserReviews = ({ pre1, res1, pre2, res2, pre3, res3 }) => {
  return (
    <div className={styles.userReviews}>
      <h2 className={styles.h2} >Preguntas frecuentes:</h2>
      <ul className={styles.ul} >
        <li>
          <span className={styles.userName}>{pre1}</span>
          <p className={styles.reviewText}>
            {res1}
          </p>
        </li>
        <li>
          <span className={styles.userName}>{pre2}</span>
          <p className={styles.reviewText}>
            {res2}
          </p>
        </li>
        <li>
          <span className={styles.userName}>{pre3}</span>
          <p className={styles.reviewText}>
            {res3}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default UserReviews;