import React from 'react';
import styles from '../styles/Top.module.scss';

// import '../../Global.scss';
 


const Topbar = ({menuOpen, setMenuOpen}) =>{ 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleMenu();
    }
  };

	return(
    <div className={`${styles.wrapper} ${menuOpen ? styles.active : ''}`}>
      <div className={styles.right}>
        <div className={styles.salsa}>
          <spam className={styles.punto1} ></spam>
          <spam className={styles.punto2} ></spam>
           <spam className={styles.punto3} ></spam>
        </div>        
        <div 
          className={styles.hamburger} 
          onClick={toggleMenu}
          onKeyPress={handleKeyPress}
          tabIndex={0}
          role={"button"}>
            <spam className={styles.linea1} ></spam >
            <spam className={styles.linea2} ></spam>
            <spam className={styles.linea3} ></spam>
        </div>          
      </div>
    </div>  
    );
};

export default Topbar;