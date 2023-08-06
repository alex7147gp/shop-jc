import categories from '@amazon/categories';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/CategorieOfert.module.scss';


const categorie = categories;

const CategorieOfert = ()=> {
	return (
    <>
     <h1>Recomedation</h1>
       <div className={styles.ContainerOfert}>
         {categorie.slice(0,4).map(item =>
              <div className={styles.Container} key={categorie.id}>
                  <h2 className={styles.Title}>{item.title}</h2>
                  <Image 
                    src={item.img} 
                    alt={item.title} 
			              width={200} 
                    height={200}  
			            />
                  <div className={styles.Info}>
                    <Link href={`/reviews/${item.categorie}`}>
                      <button className={styles.Button}>See more</button>      
                    </Link>
                  </div>
              </div>
        	
       )}
       </div>
     </>  
	);
};

export default CategorieOfert;