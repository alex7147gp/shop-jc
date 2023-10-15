import React from 'react';
import Image from 'next/image';  // Importa la etiqueta Image
import products from '../assets/blogs/products';

import { useTranslation } from 'next-i18next';

import styles from '../styles/HomeBlog.module.scss';

const HomeBlogComponent = ({ mostViewedBlogs, featuredBlog, dailyOffers }) => {

  const { t } = useTranslation(['categorieOfert']);

  
  return (
    <div className={styles.homeBlogComponent}>
      <div className={styles.mostViewed}>
        <h2>{t('mostViewedBlogs')}</h2>
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
              <a href={`/blog/${blog.slug}`}>{blog.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.featuredBlog}>
        <h2>{t('featuredBlog')}</h2>
        <div>
          <Image
            src={featuredBlog.image.url}
            alt={"Imagen destacada del día: " + featuredBlog.image.title} // Modifica el atributo alt
            width={680}
            height={450}
          />
          <a href={`/blog/${featuredBlog.slug}`}><h3>{featuredBlog.title}</h3></a>
          <p>{featuredBlog.intro.substring(0, 400)}</p>
        </div>
      </div>
      <div className={styles.dailyOffers}>
        <h2>{t('dailyOffers')}</h2>
        <ul>
          {dailyOffers.slice(0, 4).map((offer) => (
            <li key={offer.id}>
              <Image
                src={offer.imagen}
                alt={"Imagen de oferta: " + offer.titulo} // Modifica el atributo alt
                width={100}
                height={75}
              />
              <h4>{offer.titulo.substring(0, 30)}</h4>
              <strong>Precio: ${offer.precio}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeBlogComponent;