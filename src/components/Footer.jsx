import styles from '@styles/Footer.module.scss';
import Link from "next/link";

export const Footer = () => {
	return (
      <div className={styles.global}>
        <div className={styles.Fot} >
          <div className={styles['right']} >
            <h2>Mejores</h2>
            <ul>
              <li>
                <Link href="/smartPhones">Smartphones</Link>
              </li>
              <li>
                <Link href="/computers">Computers, laptops</Link>
              </li>
              <li>
                <Link href="/smartHomeDevices">smart home devices</Link>
              </li>
              <li>
                <Link href="/accessories">Accessories</Link>
              </li>
              <li>
                <Link href="/gaming">Gaming and consoles</Link>
              </li>
            </ul>
          </div>
          <div className={styles['middle']}>
            <h2>Contactar</h2>
            <ul>
             <li><Link href="/PoliticaDePrivacidad">Política de privacidad</Link></li>
             <li><Link href="/TerminosDelServicio">Términos del servicio</Link></li>
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
          <span>Amazon, Amazon Prime, el logo de Amazon y el logo de Amazon Prime son marcas registradas de Amazon, Inc. o sus filiales
          </span>
          <span className={styles.spa2}>Copyright © 2023 van MejoresResenas.com</span>    
        </div>
      </div>
	);
};
