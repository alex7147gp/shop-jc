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
          <span className={styles.punto1} ></span>
          <span className={styles.punto2} ></span>
           <span className={styles.punto3} ></span>
        </div>        
        <div 
          className={styles.hamburger} 
          onClick={toggleMenu}
          onKeyPress={handleKeyPress}
          tabIndex={0}
          role={"button"}>
            <span className={styles.linea1} ></span >
            <span className={styles.linea2} ></span>
            <span className={styles.linea3} ></span>
        </div>          
      </div>
    </div>  
    );
};

export default Topbar;