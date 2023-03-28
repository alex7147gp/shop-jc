import SugerenciasList from '@amazon/sugerencias';


import styles from '@styles/Sugerencias.module.scss';



const sugerencias = SugerenciasList;


  const sugerenciasList = [];

  const getSugerencias = () => {
    sugerencias.forEach((item) => {
      sugerenciasList.push(<div className={styles.Item}>{item}</div>);
    });
    return sugerenciasList;
  };

const Sugerencias = () => {
	return (
      <div className={styles.Container}>
        <h2>Productos relacionados</h2>
      	 <div className={styles.Wrapper}>
            {getSugerencias().slice(0,8)}
      	 </div>
      </div>
	);
};

export default Sugerencias;