import React from 'react';
import Image from 'next/image';  // Importa la etiqueta Image

import { useTranslation } from 'next-i18next';
import Link from "next/link";

import styles from '../styles/HomeBlog.module.scss';

const HomeBlogComponent = ({ mostViewedBlogs, featuredBlog, dailyOffers }) => {

  const { t } = useTranslation(['categorieOfert']);


  return (
    <div className={styles.homeBlogComponent}>
      <div className={styles.mostViewed}>
        <h2 className={styles.h2}>{t('mostViewedBlogs')}</h2>
        <ul>
          {mostViewedBlogs.slice(0, 3).map((blog) => (
            <li key={blog.id}>
              <Image
                src={blog.image.url}
                alt={"Imagen de blog: " + blog.image.title} // Modifica el atributo alt
                width={280}
                height={180}
              />
              <p>{blog.update}</p>
              <Link href={`/blog/${blog.category.slug}/${blog.pageUrl}`}>{blog.title}</Link>
            </li>
          ))}
        </ul> 
      </div>  
      <div className={styles.featuredBlog}>
        <div>
          <Link href={`/blog/${featuredBlog.category.slug}/${featuredBlog.pageUrl}`}>
            <h2 className={styles.h2}>{featuredBlog.title}</h2>
          </Link>
          <Image
            src={featuredBlog.image.url}
            alt={"Imagen destacada del día: " + featuredBlog.image.title} // Modifica el atributo alt
            width={649}
            height={427}
          />
          <span className={styles.span}>{featuredBlog.update}</span>
          <p>{featuredBlog.intro.substring(0, 400)}</p>
        </div>
      </div>
      <div className={styles.dailyOffers}>
        <h2 className={styles.h2}>{t('dailyOffers')}</h2>
        <ul>
          {dailyOffers.slice(0, 4).map((offer) => (
            <li key={offer.id}>
              <Image
                src={offer.imagen}
                alt={"Imagen de oferta: " + offer.titulo} // Modifica el atributo alt
                width={100}
                height={75}
              />
              <Link href={offer.url} target="_blank"><h4>{offer.titulo.substring(0, 30)}</h4></Link>
              <strong>Precio: {offer.precio}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeBlogComponent;