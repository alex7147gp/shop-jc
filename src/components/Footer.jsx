import React, { useState, useEffect } from "react";
import styles from '../styles/Footer.module.scss';
import Link from "next/link";

import logo from '../assets/logos/logo-shop.png';
import Image from "next/image";



import { getCategoryList } from '../../api';

import { useTranslation } from 'next-i18next';


export const Footer = () => {

  

  const locale = typeof window !== 'undefined' && window.location.pathname.split('/')[1];

  const locales = locale == "es" ? locale : "en-US";

  const [categorie, setCategorie] = useState([]);
  const { t } = useTranslation(['footer']);


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
      <div className={styles.global}>
        <div className={styles.Fot} >
          <div className={styles['right']} >
            <div className={styles.logo}>
               <Image width={180} height={50} src={logo} alt="logo" className={styles['nav-logo']} />
            </div>
            <ul>
              <li className={styles.li}>
                 {t('mision')}
              </li>
            </ul>
          </div> 
          <div className={styles['middle']}>
            <ul>
              {categorie.map(item =>  
                <li className={styles.li} key={item.id} >
                  <Link href={`/blog/${item.slug}`}>{item.titleShow}</Link>
                </li>
              )}  
            </ul>
          </div> 
          <div className={styles['left']}>
               <ul> 
                 <li className={styles.li} ><Link href="/PoliticaDePrivacidad">{t('politicaPrivate')}</Link></li>
                 <li className={styles.li} ><Link href="/TerminosDelServicio">{t('servicesTerm')}</Link></li>
               </ul>
          </div>
        </div>
        <div className={styles.spa}>
          <span>{t('amazon')}</span>
          <span className={styles.spa2}>{t('copyright')}</span>    
        </div>
      </div>
	);
};
