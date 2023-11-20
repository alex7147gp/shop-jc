import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategoryList } from '../../api';
import styles from '../styles/Menu.module.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
  
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

	return(
      <div className={`${styles.Menu} ${menuOpen ? styles.active : ''}`}>
        <ul>
          {categorie.map((article) => (
            <li key={article.id} >
              <Link href={`/blog/${article.slug}`} onClick={()=>setMenuOpen(!menuOpen)}>{article.titleShow}</Link>
            </li> 
          ))}
        </ul>
      </div>
    );
};

export default Menu; 