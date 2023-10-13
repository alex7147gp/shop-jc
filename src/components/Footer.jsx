import React, { useState, useEffect } from "react";
import styles from '../styles/Footer.module.scss';
import Link from "next/link";

import { getCategoryList } from '../../api';

import { useTranslation } from 'next-i18next';


export const Footer = () => {

  

  let locale = '';
  
  if (typeof window !== 'undefined') {
    locale = window.location.pathname.split('/')[1];
  }

  const [categorie, setCategorie] = useState([]);
  const { t } = useTranslation(['footer']);

  const locales = locale == '' ? 'en-US' : locale;

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
  }, [locales]);

	return (
      <div className={styles.global}>
        <div className={styles.Fot} >
          <div className={styles['right']} >
            <h2>{t('bests')}</h2>
            <ul>
              {categorie.map(item =>  
                <li key={item.id} >
                  <Link href={`/blog/${item.slug}`}>{item.titleShow}</Link>
                </li>
              )}  
            </ul>
          </div>
          <div className={styles['middle']}>
            <h2>Contactar</h2>
               <ul>
                 <li><Link href="/PoliticaDePrivacidad">{t('politicaPrivate')}</Link></li>
                 <li><Link href="/TerminosDelServicio">{t('servicesTerm')}</Link></li>
               </ul>
          </div> 
          <div className={styles['left']}>
            <ul>
             <li>johncedillo77@gmail.com</li>
             <li>JCshop</li>
            </ul>
          </div>
        </div>
        <div className={styles.spa}>
          <span>{t('amazon')}</span>
          <span className={styles.spa2}>{t('copyrigth')}</span>    
        </div>
      </div>
	);
};
