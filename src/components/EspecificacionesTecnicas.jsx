import ProductA from "@components/ProductA";
import Link from 'next/link';

import styles from '@styles/EspecificacionesTecnicas.module.scss';


const EspecificacionesTecnicas = ({ 
  tituloDesc,
  titulo1,
  desc1,
  link1 = null,
  titulo2,
  desc2,
  link2 = null,
  titulo3,
  desc3,
  link3 = null,
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
      link: link1,

    },
    {
      id: 2,
      categoria: titulo2,
      descripcion: desc2,
      link: link2,
    },
    {
      id: 3,
      categoria: titulo3,
      descripcion: desc3,
      link: link3
    },
  ];

  return (
    <div className={styles.container}>
      <h2 clssName={styles.h2}>{tituloDesc}</h2>
      <ul className={styles.listaEspecificaciones}>
        {especificaciones.map((especificacion) => (
          <li key={especificacion.id}>
            {
              especificacion.link ? 
              <Link href={`${especificacion.link}`} target="_blank">    
                <h3 className={styles.categoriaLink}>{especificacion.categoria}</h3> 
              </Link> :
              <h3 className={styles.categoria}>{especificacion.categoria}</h3>
            }
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