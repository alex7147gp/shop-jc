import styles from "@styles/ProsAndCons.module.scss";


const ProsAndCons = ({ asp1, asp2, asp3, asn1, asn2, asn3 }) => {
  return (
    <div className={styles.prosAndCons}>
      <div className={styles.pros}>
        <h2 className={styles.h2} >Pros:</h2>
        <ul className={styles.ul} >
          <li>{asp1}</li>
          <li>{asp2}</li>
          <li>{asp3}</li>
        </ul>
      </div>
      <div className={styles.cons}>
        <h2>Cons:</h2>
        <ul>
          <li>{asn1}</li>
          <li>{asn2}</li>
          <li>{asn3}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProsAndCons;