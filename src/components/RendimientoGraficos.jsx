import styles from '@styles/RendimientoGraficos.module.scss';

const RendimientoGraficos = ({ 
  tituloRend,
  titulor1,
  descr1,
  titulor2,
  descr2,
  titulor3,
  descr3
  }) => {

  const rendimientoGraficos = [
    {
      id: 1,
      categoria: titulor1,
      descripcion: descr1,
    },
    {
      id: 2,
      categoria: titulor2,
      descripcion: descr2,
    },
    {
      id: 3,
      categoria: titulor3,
      descripcion: descr3,
    },
    // Agregar más datos aquí
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}>{tituloRend}</h2>
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