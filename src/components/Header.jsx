import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@logos/jc.ico';

import styles from '@styles/Header.module.scss';
import Search from '@logos/icons8-search.svg';


 
const Header = () => { 


	
	return (
		<>
		  <nav className={styles.Nav}>
            <div className={styles['navbar-logo']}>	
            	<ul>
            		<li>
            	      <Link href="/">
					            <Image width={40} height={40} src={logo} alt="logo" className={styles['nav-logo']} />
				            </Link>
            		</li>
            		<li className={styles.Logo}>JCshop</li>
            	</ul>
			      </div>
		    <div className={styles['navbar-search']}>
              <div>
                <form>
                  <div>
                    <input type="text" name="search" autoComplete="off" placeholder="Search styles, brands & more "/>
                  </div>
                  <button>
                    <Image src={Search} alt="search"/>
                  </button>
                </form>
              </div>
		    </div>
			<div className={styles['navbar-left']}>
				<ul>
					<li>
						<Link href="/smartPhones">Smartphones</Link>
					</li>
					<li>
						<Link href="/computers">Computers, laptops</Link>
					</li>
					<li>
						<Link href="/smartHomeDevices">smart home devices</Link>
					</li>
					<li>
						<Link href="/accessories">Accessories</Link>
					</li>
					<li>
						<Link href="/gaming">Gaming and consoles</Link>
					</li>
				</ul>
			</div>
		  </nav>	
	    </>	
	);
};

export default Header;


