import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MyOrder from '@containers/MyOrder';
import logo from '@logos/jc.ico';
import AppContext from '@context/AppContext';
import styles from '@styles/Header.module.scss';
import Search from '@logos/icons8-search.svg';



const Header = () => { 

	const { state } = useContext(AppContext);

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
						<Link href="/categories">Categories</Link>
					</li>
					<li>
						<Link href="/">Mejores</Link>
					</li>
					<li>
						<Link href="/">Ofertas de hoy</Link>
					</li>
				</ul>
			</div>
		  </nav>	
		  {state.orderIsOpen && <MyOrder />}
	    </>	
	);
};

export default Header;
