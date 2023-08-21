import Link from "next/link";
import styles from "@styles/BuyButton.module.scss";


const BuyButton = ({ url }) => {
  return (
    <div className={styles.buyButton}>
      <Link className={styles.a} href={url} target="_blank" rel="noopener noreferrer">
        <button className={styles.button} >Comprar ahora</button>
      </Link>
    </div>
  );
};

export default BuyButton;