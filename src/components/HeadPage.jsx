import styles from '@styles/HeaderPage.module.scss';
import Ofert from "components/Ofert";

const HeadPage = ({ title, description }) => {
	return(
      <div className={styles.Container}>
        <Ofert />
        <div className={styles.HeadP}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>   
	);
};


export default HeadPage;

