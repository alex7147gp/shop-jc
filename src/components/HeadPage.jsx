import styles from '@styles/HeaderPage.module.scss';
import Ofert from "components/Ofert";

const HeadPage = ({ title, description }) => {
	return(
      <div style={{ marginTop: "60px" }}>
        <Ofert />
        <div className={styles.HeadP}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
        </div>
      </div>   
	);
};


export default HeadPage;

