import React, { useState ,useEffect } from "react";
import { useTranslation } from 'next-i18next';

import styles from '../styles/Ofert.module.scss';


import Link from 'next/link';

const Ofert = () => {
	 

  const { t } = useTranslation(['ofert']);

  const ofert1 = t('ofert1');

  const ofert2 = t('ofert2');

  const list = [{
    oferts: ofert1,
  },{
    oferts: ofert2,
  }
];
  
  const [activo, setActivo] = useState(true);



   useEffect(() => {
   	const interval = setInterval(() => {
      setActivo(activo => !activo);
   	}, 5000);

   	return () => clearInterval(interval);
   }, []);
    
  
 
  return(
    <div className={styles.Container}> 
     <div className={styles.Wrapper} style={{ transform: `translateX(-${activo == true ? 100 : 0}vw)`}}> 
       {list.map(ofert=>   
        <div className={styles.SliderO} key={ofert.index}>
          <p className={styles.Desc} > 
           {ofert.oferts}
          </p>
          <Link href="https://www.amazon.com/primebigdealdays?ref=CG_ac_ss_230927_Inspiration_pbdd" style={{color:'white'}}>{t('shop')}</Link>
        </div>
        )}
     </div>
    </div>                                        
	);
};

export default Ofert;
