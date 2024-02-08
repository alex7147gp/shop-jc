import styles from '../styles/GuiaHeader.module.scss';
import Image from 'next/image';


const GuiaHeader = ({titulo, intro, img}) => {

  console.log(img.title)

  return (
    <div className={styles.container}>
    <h1 className={styles.title}>{titulo}</h1>
    <p className={styles.intro}>
      {intro} 
    </p>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={img.url}
          alt={img.title}  
          width={900}  
          height={500} 
        /> 
      </div>
      <div className={styles.textContainer}>
      </div> 
    </div>
  );
}; 

export default GuiaHeader;
