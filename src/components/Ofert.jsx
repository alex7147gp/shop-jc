import React, {useState ,useEffect} from "react";
import styles from '@styles/Ofert.module.scss';





import Link from 'next/link';

const list = [{
  oferts:'Need an last minute Gift? Check out whit code FROSTY',
  },{
  oferts:'Take an Extra 30% Off Select Styles whit code FROSTY',
  }
];

const Ofert = () => {
	 
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
        <div className={styles.SliderO} key={list.index}>
          <p className={styles.Desc} > 
           {ofert.oferts}
          </p>
          <Link href="/" style={{color:'white'}}>Shop Now</Link>
        </div>
        )}
     </div>
    </div>                                        
	);
};

export default Ofert;
