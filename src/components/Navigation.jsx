import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from '../styles/Navigation.module.scss';


const Navigation = () => {
  const router = useRouter();
  const { pathname } = router;

  const segments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className={styles.nav} >
      {segments.map((segment, index) => (
        <span key={index}>
          {index > 0 && <span className={styles.sparator}> - </span>}
          <Link href={`/`} >
            <span className={styles.segment} >{segment}</span>
          </Link>
        </span>
      ))}
    </nav>
  );
};

export default Navigation;