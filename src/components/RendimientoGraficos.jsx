import ProductA from "@components/ProductA";
import Link from 'next/link';

import styles from '@styles/RendimientoGraficos.module.scss';


const RendimientoGraficos = ({ 
  tituloRend,
  titulor1,
  descr1,
  link1 = null,
  titulor2,
  descr2,
  link2 = null,
  titulor3,
  descr3,
  link3 = null,
  tituloOp1,
  descOp1,
  linkO1 = null,
  tituloOp2,
  descOp2,
  linkO2 = null,
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
      link: link1,
    },
    {
      id: 2,
      categoria: titulor2,
      descripcion: descr2,
      link: link2,
    },
    {
      id: 3,
      categoria: titulor3,
      descripcion: descr3,
      link: link3
    },
  ];

  return (
    <div className={styles.container}>
      {tituloRend && <h2 className={styles.h2}>{tituloRend}</h2>}
      <ul className={styles.listaRendimientoGraficos}>
        {rendimientoGraficos.map((item) => (
          <li key={item.id}>
            {
              item.link ? 
                <Link href={`${item.link}`} target="_blank">    
                  <h3 className={styles.categoriaLink}>{item.categoria}</h3>     
                </Link> :
                <h3 className={styles.categoria}>{item.categoria}</h3>  
            }
            <p className={styles.p}>{item.descripcion}</p>
          </li>
        ))}
        { tituloOp1 && <li key={4}>
            {
              linkO1 ? 
                <Link href={`${linkO1}`} target="_blank">    
                   <h3 className={styles.categoriaLink}>{tituloOp1}</h3>    
                </Link> :
                <h3 className={styles.categoria}>{tituloOp1}</h3>  
            }
            <p className={styles.p}>{descOp1}</p>
          </li> 
        }
        { tituloOp2 && <li key={5}>
            {
              linkO2 ? 
                <Link href={`${linkO1}`} target="_blank">    
                  <h3 className={styles.categoriaLink}>{tituloOp2}</h3>     
                </Link> :
                <h3 className={styles.categoria}>{tituloOp2}</h3>   
            }
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