import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsC from '@blogs/computers';
import computers from "@images/computers.jpg";

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Explora el Universo Tecnológico a través de Nuestras Reseñas de Computadoras!"}
        description={"Encuentra las mejores reseñas de computadoras en línea. Lee análisis detallados y opiniones para tomar decisiones informadas en tus compras tecnológicas."}
        keywords={"Artículos sobre computadoras, Análisis de PCs, Reseñas de laptops, Novedades en hardware de computadoras, Guías de compra de ordenadores, Últimas tendencias en tecnología informática, Mejores equipos de escritorio, Comparativas de portátiles, Opiniones sobre periféricos, Novedades en componentes de PC, Reviews de accesorios para computadoras, Artículos sobre software de computadoras, Lo último en tecnología de procesadores, Consejos para mantenimiento de PCs, Artículos sobre sistemas operativos, Guías de actualización de hardware, Cobertura de novedades en tecnología informática, Artículos sobre computadoras gaming, Novedades en equipos de alto rendimiento, Análisis detallados de hardware, Guías de programación informática, Artículos sobre seguridad informática"}
        urlC={"/blog/computers"}
        url={"/blog/computers"}
        img={computers}
      />
      <HeadPage 
        title={"Reseñas de Computadoras - Encuentra las Mejores"}
        description={"Adéntrate en el mundo de la tecnología con nuestras reseñas de computadoras. Descubre análisis exhaustivos, comparativas y opiniones genuinas que te ayudarán a elegir la computadora perfecta para tus necesidades. Desde rendimiento hasta diseño, estamos aquí para guiarte en tu elección tecnológica. ¡Prepárate para tomar decisiones informadas y encontrar la computadora de tus sueños!"} 
      />
      <ReviewOfert product={productsC} article={"computers"} cantidad={10} />
      <CategorieOfert />
    </div>
  );
};