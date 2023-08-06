import products from '@amazon/products';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/ReviewOfert.module.scss';


const ReviewOfert = ()=> {
	return (
    <>
     <h1 className={styles.H1}>Audio</h1>
       <div className={styles.ContainerOfert}>
         {products.slice(0,3).map(item =>
              <div className={styles.Container} key={item.id}>
                  <Link href={`/reviews/${item.categorie}`}>
                    <Image 
                      src={item.imagen} 
                      alt={item.titulo} 
                      width={320} 
                      height={200}
                    />
                  </Link>
                  <div className={styles.Info}>
                    <h2 className={styles.Title}>The best SmatPhone</h2>
                    <span className={styles.Date}>Updated July 27, 2023</span>
                    <p className={styles.Description}>Monitor de juegos FHD de 24,5''】Monitor VA de 24,5 pulgadas (1920 x 1080P) con diseño de bisel ultrafino de 3 lados, ángulo ajustable de -5° a 20°, el amplio ángulo de visión de 178° le permite disfrutar de un rendimiento de color superior, reducir la fatiga incluso después de un uso prolongado.【Experiencia de juego</p>
                  </div>
              </div>
        	
         )}
       </div>
     </>  
	);
};

export default ReviewOfert