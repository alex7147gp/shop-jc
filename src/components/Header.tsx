import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logos/jc.ico';
import styles from '../styles/Header.module.scss';

import { useTranslation } from 'next-i18next';
import { getCategoryList } from '../../api';
import Search from '../assets/logos/icons8-search.svg';


const Header = () => { 

  const locale = typeof window !== 'undefined' ? window.location.pathname.split('/')[1] || 'en-US' : 'en-US';

  const [categorie, setCategorie] = useState([]);
  const { t } = useTranslation(['header']);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoryList({ limit: 10, locale });
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
            <li key={article.id} >
						  <Link href={`/blog/${article.slug}`}>{article.titleShow}</Link>
					  </li>
				  ))}
				</ul>
			</div>
		  </nav>	
	    </>	
	);
};

export default Header;


