import styles from '@styles/GuiaHeader.module.scss';

const GuiaHeader = ({titulo, intro}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{titulo}</h1>
      <p className={styles.intro}>
        {intro}
      </p>
    </div>
  );
};

export default GuiaHeader;
