import styles from '@styles/Conclusion.module.scss';

const Conclusion = ({ dconclucion }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Conclucion</h2>
      <p className={styles.p}>{dconclucion}</p>
    </div>
  );
};

export default Conclusion;