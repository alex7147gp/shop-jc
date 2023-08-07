import styles from '@styles/RendimientoGraficos.module.scss';

const RendimientoGraficos = () => {
  // Datos de ejemplo de rendimiento y gráficos
  const rendimientoGraficos = [
    {
      id: 1,
      categoria: 'Tarjeta Gráfica',
      descripcion: 'Busca una tarjeta gráfica dedicada con suficiente memoria VRAM para lograr un rendimiento óptimo en los juegos actuales.',
    },
    {
      id: 2,
      categoria: 'Resolución y Frecuencia de Actualización',
      descripcion: 'Una alta resolución y frecuencia de actualización aseguran una experiencia de juego más nítida y fluida.',
    },
    {
      id: 3,
      categoria: 'FPS (Frames Per Second)',
      descripcion: 'Los FPS altos proporcionan una jugabilidad más suave y reactiva, especialmente en juegos de acción rápida.',
    },
    // Agregar más datos aquí
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>Rendimiento y Gráficos</h2>
      <ul className={styles.listaRendimientoGraficos}>
        {rendimientoGraficos.map((item) => (
          <li key={item.id}>
            <h3 className={styles.categoria}>{item.categoria}</h3>
            <p className={styles.p}>{item.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RendimientoGraficos;