import categories from '../assets/amazon/categories';


import Link from 'next/link';
import Image from 'next/image';


import { useTranslation } from 'next-i18next';

import styles from '../styles/CategorieOfert.module.scss';

const CategorieOfert = ({ categorie }) => {

  const { t } = useTranslation(['categorieOfert']);

  const categoriea = categorie ? categorie : categories;

  const text = t('seeMore');

	return (
    <div className={styles.ContainerA}>
     <h3>{t('recomendations')}</h3>
       <div className={styles.ContainerOfert}>
         {categoriea.slice(0,8).map(item =>
              <div className={styles.Container} key={item.id}>
                  <h4 className={styles.Title}>{item.titleShow}</h4>
                  <Image 
                    src={item.icon.url} 
                    alt={item.icon.title} 
			              width={200} 
                    height={200}  
			            />
                  <div className={styles.Info}>
                    <Link href={`/blog/${item.slug}`} >
                      <button className={styles.Button}>{ text == 'seeMore' ? 'See more' : text} </button>      
                    </Link>
                  </div>
              </div>
        	
       )}
       </div> 
     </div>  
	);
};

export default CategorieOfert;