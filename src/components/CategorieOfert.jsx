import Categorie from '@amazon/categorie';


import Link from 'next/link';
import Image from 'next/image';

import styles from '@styles/CategorieOfert.module.scss';


const categorie = Categorie;

const CategorieOfert = ()=> {
	return (
     <div className={styles.ContainerOfert}>
     {categorie.slice(0,3).map(item =>
            <div className={styles.Container} key={categorie.id}>
                <Image 
                  src={item.img} 
                  alt={item.title} 
			            layout="fill" 
			          />
                <div className={styles.Info}>
                  <h1 className={styles.Title}>{item.title}</h1>
                  <Link href={`/categories/${item.categorie}`}>
                    <button className={styles.Button}>Shop now </button>      
                  </Link>
                </div>
            </div>
        	
     )}
     </div>
	);
};

export default CategorieOfert;