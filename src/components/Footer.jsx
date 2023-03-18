import styles from '@styles/Footer.module.scss';
import Link from "next/link";

export const Footer = () => {
	return (
      <div className={styles.global}>
        <div className={styles.Fot} >
          <div className={styles['right']} >
            <h2>Mejores</h2>
            <ul>
             <li><Link href="/">Monitores</Link></li>
             <li><Link href="/">Aspiradoras-sin-cable</Link></li>
             <li><Link href="/">Taladros</Link></li>
             <li><Link href="/">Sillas para jugar</Link></li>
             <li><Link href="/">Auriculares</Link></li>
            </ul>
          </div>
          <div className={styles['middle']}>
            <h2>Contactar</h2>
            <ul>
             <li><Link href="/">Contactar</Link></li>
             <li><Link href="/PoliticaDePrivacidad">Política de privacidad</Link></li>
             <li><Link href="/TerminosDelServicio">Términos del servicio</Link></li>
             <li><Link href="/categories">Categorías</Link></li>
             <li><Link href="/">Acerca de</Link></li>
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
