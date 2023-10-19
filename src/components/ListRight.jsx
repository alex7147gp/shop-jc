import React from 'react';
import Image from 'next/image';  // Importa la etiqueta Image


import Link from "next/link";

import styles from '../styles/ListRight.module.scss';

const ListRight = ({ dailyOffers, dailyOffersTitle }) => {

  return ( 
    <div className={styles.ListRight}>
      <div className={styles.dailyOffers}>
        <h2 className={styles.h2}>{dailyOffersTitle}</h2>
        <ul className={styles.ul}>
          {dailyOffers.slice(0, 3).map((offer) => (
            <li className={styles.li} key={offer.id}>
              <Image
                src={offer.imagen}
                alt={"Imagen de oferta: " + offer.titulo} // Modifica el atributo alt
                width={100}
                height={75}
              />
              <Link href={offer.url} target="_blank"><h4>{offer.titulo.substring(0, 30)}</h4></Link>
              <strong className={styles.strong}>Precio: <span className={styles.span}>{offer.precio}</span></strong>
            </li>
          ))}
        </ul>
      </div>
    </div> 
  );
};

export default ListRight;