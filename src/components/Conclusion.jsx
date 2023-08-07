import styles from '@styles/Conclusion.module.scss';

const Conclusion = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Conclusiones</h2>
      <p className={styles.p}>
        En esta guía, hemos explorado diferentes aspectos clave para elegir la computadora perfecta para gaming.
        Considera tus necesidades y preferencias, así como tu presupuesto, al tomar una decisión.
        Recuerda que la elección de componentes como la CPU, la GPU, el almacenamiento y la memoria afectará
        directamente el rendimiento de tu equipo.
      </p>
      <p className={styles.p}>
        Además de las especificaciones técnicas, también es importante tener en cuenta el diseño y la estética,
        así como los periféricos y accesorios adecuados para una experiencia de juego completa.
      </p>
      <p className={styles.p}>
        ¡Esperamos que esta guía te haya sido útil en tu búsqueda de la computadora ideal para gaming!
      </p>
    </div>
  );
};

export default Conclusion;