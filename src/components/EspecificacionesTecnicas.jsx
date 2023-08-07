import styles from '@styles/EspecificacionesTecnicas.module.scss';

const EspecificacionesTecnicas = () => {
  // Datos de ejemplo de especificaciones técnicas
  const especificaciones = [
    {
      id: 1,
      categoria: 'Procesador',
      descripcion: 'Busca procesadores de alto rendimiento y múltiples núcleos para un mejor desempeño en juegos exigentes.',
    },
    {
      id: 2,
      categoria: 'Tarjeta Gráfica',
      descripcion: 'Una tarjeta gráfica potente es esencial para disfrutar de gráficos y resoluciones óptimas en juegos.',
    },
    {
      id: 3,
      categoria: 'Memoria RAM',
      descripcion: 'Una cantidad suficiente de memoria RAM garantiza una ejecución fluida de los juegos y aplicaciones.',
    },
    // Agregar más especificaciones aquí
  ];

  return (
    <div className={styles.container}>
      <h2 clssName={styles.h2}>Especificaciones Técnicas</h2>
      <ul className={styles.listaEspecificaciones}>
        {especificaciones.map((especificacion) => (
          <li key={especificacion.id}>
            <h3 className={styles.categoria}>{especificacion.categoria}</h3>
            <p className={styles.p}>{especificacion.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EspecificacionesTecnicas;