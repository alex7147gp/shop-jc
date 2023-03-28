import React from 'react';
import styles from '@styles/Newslatter.module.scss';





const Newlastter = () =>{
  return (
    <div className={styles.Container}>
      <h1 className={styles.Title}>Newlastter</h1>
      <p className={styles.Descriccion}>Get timaly updates from your favorite products</p>
      <div className={styles.InputContainer}>
         <input className={styles.Input} placeholder='Your emil'/>
         <button className={styles.Button}>
             Enviar
         </button>
      </div>
    </div>
  	);

};   

export default Newlastter;