import GuiaHeader from '@components/GuiaHeader';
import EspecificacionesTecnicas from '@components/EspecificacionesTecnicas';
import RendimientoGraficos from '@components/RendimientoGraficos';
import Conclusion from '@components/Conclusion';


import styles from "@styles/BlogPage.module.scss";

const BlogPage = ({ 
  titulo,
  intro,
  img,
  dconclucion,
  tituloDesc,
  titulo1,
  desc1,
  titulo2,
  desc2,
  titulo3,
  desc3,
  tituloRend,
  titulor1,
  descr1,
  titulor2,
  descr2,
  titulor3,
  descr3,
  imagen,
  tituloP,
  descripcion,
  precio,
  url,
  imagen2,
  tituloP2,
  descripcion2,
  precio2,
  url2,
  tituloOp1,
  descOp1,
  tituloOp2,
  descOp2
  }) => {
  return (
    <div className={styles.blogContainer}>
      <GuiaHeader titulo={titulo} intro={intro} img={img} />
      <EspecificacionesTecnicas 
        tituloDesc={tituloDesc}
        titulo1={titulo1}
        desc1={desc1}
        titulo2={titulo2}
        desc2={desc2}
        titulo3={titulo3}
        desc3={desc3}
        imagen={imagen}
        titulo={tituloP}
        descripcion={descripcion}
        precio={precio}
        url={url}
        />
      <RendimientoGraficos
        tituloRend={tituloRend}
        titulor1={titulor1}
        descr1={descr1}
        titulor2={titulor2}
        descr2={descr2}
        titulor3={titulor3}
        descr3={descr3}
        tituloOp1={tituloOp1}
        descOp1={descOp1}
        tituloOp2={tituloOp2}
        descOp2={descOp2}
        imagen={imagen2}
        titulo={tituloP2}
        descripcion={descripcion2}
        precio={precio2}
        url={url2}
      />
      <Conclusion dconclucion={dconclucion}/>
    </div>
  );
};
 
export default BlogPage;
