import styles from "@styles/BuyButton.module.scss";


const BuyButton = () => {
  return (
    <div className={styles.buyButton}>
      <a className={styles.a} href="url_de_la_pagina_de_compra" target="_blank" rel="noopener noreferrer">
        <button className={styles.button} >Comprar ahora</button>
      </a>
    </div>
  );
};

export default BuyButton;