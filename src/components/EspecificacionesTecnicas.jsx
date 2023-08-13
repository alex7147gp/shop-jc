import ProductA from "@components/ProductA";
import styles from '@styles/EspecificacionesTecnicas.module.scss';

const EspecificacionesTecnicas = ({ 
  tituloDesc,
  titulo1,
  desc1,
  titulo2,
  desc2,
  titulo3,
  desc3,
  imagen,
  titulo,
  descripcion,
  precio,
  url
  }) => {
  // Datos de ejemplo de especificaciones técnicas
  const especificaciones = [
    {
      id: 1,
      categoria: titulo1,
      descripcion: desc1,

    },
    {
      id: 2,
      categoria: titulo2,
      descripcion: desc2,
    },
    {
      id: 3,
      categoria: titulo3,
      descripcion: desc3,
    },
  ];

  return (
    <div className={styles.container}>
      <h2 clssName={styles.h2}>{tituloDesc}</h2>
      <ul className={styles.listaEspecificaciones}>
        {especificaciones.map((especificacion) => (
          <li key={especificacion.id}>
            <h3 className={styles.categoria}>{especificacion.categoria}</h3>
            <p className={styles.p}>{especificacion.descripcion}</p>
          </li>
        ))}
        {titulo && <ProductA
            imagen={imagen}
            titulo={titulo}
            descripcion={descripcion}
            precio={precio}
            url={url}
        />
        }
      </ul>
    </div>
  );
};

export default EspecificacionesTecnicas;