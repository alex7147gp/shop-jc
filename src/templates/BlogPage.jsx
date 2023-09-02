import GuiaHeader from '@components/GuiaHeader';
import EspecificacionesTecnicas from '@components/EspecificacionesTecnicas';
import RendimientoGraficos from '@components/RendimientoGraficos';
import UserReviews from '@components/UserReviews';
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
  link1,
  titulo2,
  desc2,
  link2,
  titulo3,
  desc3,
  link3,
  tituloRend,
  titulor1,
  descr1,
  link1R,
  titulor2,
  descr2,
  link2R,
  titulor3,
  descr3,
  link3R,
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
  link1RO,
  tituloOp2,
  descOp2,
  link2RO,
  tituloRends = null,
  titulor1s,
  descr1s,
  link1RS,
  titulor2s,
  descr2s,
  link2RS,
  titulor3s,
  descr3s,
  link3RS,
  tituloOp1s,
  descOp1s,
  link1ROS,
  tituloOp2s,
  descOp2s,
  link2ROS,
  imagen2s,
  tituloP2s,
  descripcion2s,
  precio2s,
  url2s,
  pre1,
  res1,
  pre2,
  res2,
  pre3,
  res3,
  }) => {
  return (
    <div className={styles.blogContainer}>
      <GuiaHeader titulo={titulo} intro={intro} img={img} />
      <EspecificacionesTecnicas 
        tituloDesc={tituloDesc}
        titulo1={titulo1}
        desc1={desc1}
        link1={link1}
        titulo2={titulo2}
        desc2={desc2}
        link2={link2}
        titulo3={titulo3}
        desc3={desc3}
        link3={link3}
        //product
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
        link1={link1R}
        titulor2={titulor2}
        descr2={descr2}
        link2={link2R}
        titulor3={titulor3}
        descr3={descr3}
        link3={link3R}
        tituloOp1={tituloOp1}
        descOp1={descOp1}
        linkO1={link1RO}
        tituloOp2={tituloOp2}
        descOp2={descOp2}
        linkO2={link2RO}
        //product2
        imagen={imagen2}
        titulo={tituloP2}
        descripcion={descripcion2}
        precio={precio2}
        url={url2}
      />
      {
        titulor1s && <RendimientoGraficos
        tituloRend={tituloRends}
        titulor1={titulor1s}
        descr1={descr1s}
        link1={link1RS}
        titulor2={titulor2s}
        descr2={descr2s}
        link2={link2RS}
        titulor3={titulor3s}
        descr3={descr3s}
        link3={link3RS}
        tituloOp1={tituloOp1s}
        descOp1={descOp1s}
        linkO1={link1ROS}
        tituloOp2={tituloOp2s}
        descOp2={descOp2s}
        linkO2={link2ROS}
        //product3
        imagen={imagen2s}
        titulo={tituloP2s} 
        descripcion={descripcion2s}
        precio={precio2s}
        url={url2s}
      /> 
      }
      { pre1 && <UserReviews 
          pre1={pre1}
          res1={res1}
          pre2={pre2}
          res2={res2}
          pre3={pre3}
          res3={res3}
        />
      }
      <Conclusion dconclucion={dconclucion}/>
    </div>
  );
};
 
export default BlogPage;
