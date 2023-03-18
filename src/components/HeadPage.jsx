import styles from '@styles/HeaderPage.module.scss';


const HeadPage = ({ title, description }) => {
	return(
      <div>
        <div className={styles.HeadP}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div>
        </div>
      </div>   
	);
};


export default HeadPage;;

