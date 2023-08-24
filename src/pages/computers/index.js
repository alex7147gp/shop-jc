import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@computers/products";
import computers from "@images/computers.jpg";

export default function Computers() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Potencia tu Productividad con las Mejores Computadoras y Laptops!"}
        description={"Compra las mejores computadoras y laptops en línea. Encuentra una amplia selección de equipos de alta calidad para tus necesidades personales y profesionales."}
        keywords={"Computadoras, PCs, Portátiles, Laptops, Hardware de computadoras, Componentes de PC, Periféricos, Accesorios de computadoras, Tecnología informática, Ordenadores personales, Equipos de escritorio, Computadoras de alto rendimiento, Computadoras gaming, Reparación de computadoras, Actualización de hardware, Software de computadoras, Sistemas operativos, Programación, Seguridad informática, Mantenimiento de computadoras, Innovación tecnológica, Nuevas tecnologías informáticas, Dispositivos de almacenamiento, Computación en la nube, Tecnología de procesadores, Informática empresarial, Computadoras de última generación"}
        urlC={"/computers"}
        url={"/computers"}
        img={computers}
      />
      <Page 
       title={"Computadoras y laptops - Compra los mejores en línea"}
       description={"¿Buscando la combinación perfecta de tecnología y rendimiento? Descubre nuestra selección de computadoras y laptops de primera calidad. Desde trabajos profesionales hasta entretenimiento, ¡encuentra tu compañero tecnológico ideal hoy mismo!"}
       products={products}
      />
    </div>
  );
};