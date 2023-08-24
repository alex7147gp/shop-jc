import HeadS from "@components/Head";
import Home from "../templates/Home";

import logo from '@icons/logo.jpeg';


export default function HomeOne() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"JC shop"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
        keywords={"Tecnología, Reseñas de tecnología, Artículos de tecnología, Smartphones, Tablets, Computadoras, Accesorios tecnológicos, Audífonos inteligentes, Últimas novedades tecnológicas, Gadgets electrónicos, Comparativas de dispositivos, Innovación tecnológica, Mejores smartphones, Análisis de tablets, Guías de compra tecnológica, Dispositivos móviles, Tecnología móvil, Reviews de productos electrónicos, Tendencias tecnológicas, Noticias de tecnología"}
        urlC={"/"}
        url={"/"}
        img={logo}
      />
      <Home />
    </div>
  );
};
