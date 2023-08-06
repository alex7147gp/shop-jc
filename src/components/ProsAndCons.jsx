import styles from "@styles/ProsAndCons.module.scss";


const ProsAndCons = () => {
  return (
    <div className={styles.prosAndCons}>
      <div className={styles.pros}>
        <h2 className={styles.h2} >Pros:</h2>
        <ul className={styles.ul} >
          <li>Aspecto positivo 1</li>
          <li>Aspecto positivo 2</li>
          <li>Aspecto positivo 3</li>
          {/* Agregar más aspectos positivos aquí */}
        </ul>
      </div>
      <div className={styles.cons}>
        <h2>Cons:</h2>
        <ul>
          <li>Aspecto negativo 1</li>
          <li>Aspecto negativo 2</li>
          <li>Aspecto negativo 3</li>
          {/* Agregar más aspectos negativos aquí */}
        </ul>
      </div>
    </div>
  );
};

export default ProsAndCons;