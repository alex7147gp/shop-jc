import React from 'react';
import Image from 'next/image';  // Importa la etiqueta Image


import Link from "next/link";

import styles from '../styles/ListLeft.module.scss';

const ListLeft = ({ mostViewedBlogs, locale }) => {


  return (
    <div className={styles.ListLeft}>
      <div className={styles.mostViewed}>
        <h2 className={styles.h2}>{locale == "es" ? "Mas vistos" : "Most Viewed"}</h2>
        <ul className={styles.ul}>
          {mostViewedBlogs.slice(0, 3).map((blog) => (
            <li className={styles.li} key={blog.id}>
              <Image
                src={blog.image.url}
                alt={"Imagen de blog: " + blog.image.title} // Modifica el atributo alt
                width={150}
                height={100}
              />
              <Link href={`/blog/${blog.category.slug}/${blog.pageUrl}`}>
                <h4 className={styles.p}>{blog.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>  
    </div> 
  );
};

export default ListLeft;