import React from 'react';
import styles from '../styles/Top.module.scss';

// import '../../Global.scss';
 


const Topbar = ({menuOpen, setMenuOpen}) =>{ 

	return(
    <div className={styles.wrapper}>
      <div className={styles.right}>
        <div className={styles.salsa}>
          <spam className={styles.punto1} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
          <spam className={styles.punto2} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
           <spam className={styles.punto3} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
        </div>        
        <div className={styles.hamburger}>
            <spam className={styles.linea1} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam >
            <spam className={styles.linea2} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
            <spam className={styles.linea3} style={{color:`${menuOpen === true ? 'white':'black'}`}}></spam>
        </div>          
      </div>
    </div>  
    );
};

export default Topbar;