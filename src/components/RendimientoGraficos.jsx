import ProductA from "@components/ProductA";
import styles from '@styles/RendimientoGraficos.module.scss';

const RendimientoGraficos = ({ 
  tituloRend,
  titulor1,
  descr1,
  titulor2,
  descr2,
  titulor3,
  descr3,
  tituloOp1,
  descOp1,
  tituloOp2,
  descOp2,
  imagen,
  titulo,
  descripcion,
  precio,
  url
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
  ];

  return (
    <div className={styles.container}>
      {tituloRend && <h2 className={styles.h2}>{tituloRend}</h2>}
      <ul className={styles.listaRendimientoGraficos}>
        {rendimientoGraficos.map((item) => (
          <li key={item.id}>
            <h3 className={styles.categoria}>{item.categoria}</h3>
            <p className={styles.p}>{item.descripcion}</p>
          </li>
        ))}
        { tituloOp1 && <li key={4}>
            <h3 className={styles.categoria}>{tituloOp1}</h3>
            <p className={styles.p}>{descOp1}</p>
          </li> 
        }
        { tituloOp2 && <li key={5}>
            <h3 className={styles.categoria}>{tituloOp2}</h3>
            <p className={styles.p}>{descOp2}</p>
          </li> 
        }
        { titulo && <ProductA
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

export default RendimientoGraficos;