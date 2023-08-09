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
  descr3
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
        />
      <RendimientoGraficos
        tituloRend={tituloRend}
        titulor1={titulor1}
        descr1={descr1}
        titulor2={titulor2}
        descr2={descr2}
        titulor3={titulor3}
        descr3={descr3}
      />
      <Conclusion dconclucion={dconclucion}/>
    </div>
  );
};
 
export default BlogPage;
