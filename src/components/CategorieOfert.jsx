import categories from '@amazon/categories';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/CategorieOfert.module.scss';


const CategorieOfert = ({ categorie }) => {

  const categoriea = categorie ? categorie : categories;

	return (
    <>
     <h3>Recomedation</h3>
       <div className={styles.ContainerOfert}>
         {categoriea.slice(0,4).map(item =>
              <div className={styles.Container} key={categoriea.id}>
                  <h4 className={styles.Title}>{item.title}</h4>
                  <Image 
                    src={item.img} 
                    alt={item.title} 
			              width={200} 
                    height={200}  
			            />
                  <div className={styles.Info}>
                    <Link href={`/${item.url}`}>
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