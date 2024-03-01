import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logos/logo-shop.png';
import styles from '../styles/Header.module.scss';

import Top from './Top';

const Header = ({ menuOpen, setMenuOpen }) => { 
 
	return (
		<>
		  <nav className={styles.Nav}>
            <div />
            <div className={styles['navbar-logo']}>	
            	<Link href="/">
                <ul> 
            		  <li>
					        <Image width={180} height={50} src={logo} alt="logo" className={styles['nav-logo']} />
            		  </li>
            	  </ul> 
              </Link>
			      </div> 
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
		  </nav>	
	    </>	
	);
};

export default Header;


