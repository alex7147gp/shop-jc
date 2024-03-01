import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from '../styles/SecondHeader.module.scss';
import Search from './Search';

import { getCategoryList } from '../../api';


const SecondHeader = () => {
  const locale = typeof window !== 'undefined' && window.location.pathname.split('/')[1];
  const locales = locale == "es" ? locale : "en-US";

  const [categorie, setCategorie] = useState([]);

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
        <Search/>
        <div className={styles['navbar-left']}>
          <ul>
            {categorie.slice(0, 10).map((article) => (
              <li className={styles.li} key={article.id}>
                <Link href={`/blog/${article.slug}`}>{article.titleShow}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SecondHeader;