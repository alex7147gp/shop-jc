import styles from '@styles/GuiaHeader.module.scss';
import Image from 'next/image';


const GuiaHeader = ({titulo, intro, img}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img}
          alt="Guía para elegir la Computadora Perfecta para Gaming"
          width={350}  
          height={280}  
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{titulo}</h1>
        <p className={styles.intro}>
          {intro}
        </p>
      </div> 
    </div>
  );
}; 

export default GuiaHeader;
