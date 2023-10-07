import HeadS from "../components/Head";
import Home from "../templates/Home";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getBlogPageList, getCategoryList } from '../../api';

import logo from '../assets/icons/logo.jpeg';


export const getStaticProps = async ({ locale }) => {

  const blogs = await getBlogPageList({ limit: 10, locale });
  const categorie = await getCategoryList({ limit: 10, locale });
  const i18nConf = await serverSideTranslations(locale || 'default-locale');

  return {
    props: {
      blogs,
      categorie,
      ...i18nConf
    },
    revalidate: 5 * 60,
  };
};

export default function HomeOne({ blogs, categorie }) {

  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"JC shop"}
        description={"Los mejores productos comparados minusiosamente para que compre los mejores"}
        keywords={"Tecnología, Reseñas de tecnología, Artículos de tecnología, Smartphones, Tablets, Computadoras, Accesorios tecnológicos, Audífonos inteligentes, Últimas novedades tecnológicas, Gadgets electrónicos, Comparativas de dispositivos, Innovación tecnológica, Mejores smartphones, Análisis de tablets, Guías de compra tecnológica, Dispositivos móviles, Tecnología móvil, Reviews de productos electrónicos, Tendencias tecnológicas, Noticias de tecnología"}
        urlC={"/"}
        url={"/"}
        img={logo}
      />
      <Home blogs={blogs} categorie={categorie} />
    </div>
  );
};
