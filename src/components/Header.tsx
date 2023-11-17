import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logos/jc.ico';
import styles from '../styles/Header.module.scss';

import { useTranslation } from 'next-i18next';
import { getCategoryList } from '../../api';
import Top from './Top';
import Search from '../assets/logos/icons8-search.svg';


const Header = () => { 

  const locale = typeof window !== 'undefined' && window.location.pathname.split('/')[1];

  const locales = locale == "es" ? locale : "en-US";

  const [categorie, setCategorie] = useState([]);
  const { t } = useTranslation(['header']);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryList({ limit: 10, locale: locales });
        setCategorie(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    }; 

    fetchData();
  }, [locale]);
 
	return (
		<>
		  <nav className={styles.Nav}>
            <div className={styles['navbar-logo']}>	
            	<Link href="/">
                <ul>
            		  <li>
					          <Image width={40} height={40} src={logo} alt="logo" className={styles['nav-logo']} />
            		  </li>
            		  <li className={styles.Logo}>JCshop</li>
            	  </ul>
              </Link>
			      </div>
		    <div className={styles['navbar-search']}>
              <div>
                <form>
                  <div>
                    <input type="text" name="search" autoComplete="off" placeholder={t('search')}/>
                  </div>
                  <button>
                    <Image src={Search} alt="search"/>
                  </button>
                </form>
              </div> 
		    </div>
			<div className={styles['navbar-left']}>
				<ul>
				  {categorie.map((article) => (
            <li className={styles.li} key={article.id} >
						  <Link href={`/blog/${article.slug}`}>{article.titleShow}</Link>
					  </li> 
				  ))}
				</ul> 
			</div>
      <Top menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
		  </nav>	
	    </>	
	);
};

export default Header;


