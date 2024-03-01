import styles from '../styles/HeaderPage.module.scss';



import Image from 'next/image';

const HeadPage = ({ title, description, image = null }) => {
	return(
      <div className={styles.Container}>
        <div className={styles.HeadP}>
          { image && <div className={styles.containerImage}>
              <Image 
                    src={image.url} 
                    alt={image.title} 
                    width={350} 
                    height={220}  
              />
            </div>
           } 
          <div className={styles.containerText}>
            <h1 className={styles.h1}>{title}</h1>
            <p className={styles.p}>{description}</p>
          </div>
        </div>
      </div>   
	);
};


export default HeadPage;

