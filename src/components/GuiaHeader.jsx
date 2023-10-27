import styles from '../styles/GuiaHeader.module.scss';
import Image from 'next/image';


const GuiaHeader = ({titulo, intro, img, update}) => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>{titulo}</h1>
    <span className={styles.span}>{update}</span>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img}
          alt={titulo}  
          width={1150}  
          height={780}
        /> 
      </div>
      <div className={styles.textContainer}>
        <p className={styles.intro}>
          {intro}
        </p>
      </div> 
    </div>
  );
}; 

export default GuiaHeader;
