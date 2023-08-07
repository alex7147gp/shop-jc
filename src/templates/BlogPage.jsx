import GuiaHeader from '@components/GuiaHeader';
import EspecificacionesTecnicas from '@components/EspecificacionesTecnicas';
import RendimientoGraficos from '@components/RendimientoGraficos';
import Conclusion from '@components/Conclusion';


import styles from "@styles/BlogPage.module.scss";

const BlogPage = ({ titulo, intro }) => {
  return (
    <div className={styles.blogContainer}>
      <GuiaHeader titulo={titulo} intro={intro} />
      <EspecificacionesTecnicas />
      <RendimientoGraficos />
      <Conclusion />
    </div>
  );
};

export default BlogPage;
