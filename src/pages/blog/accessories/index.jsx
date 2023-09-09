import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsA from '@blogs/accessories';
import accessories from "@images/accessories.jpg";

export default function Accessories() {
  
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Potencia Tu Experiencia Tecnológica con Nuestras Reseñas de Accesorios Tech!"}
        description={"Explora nuestras reseñas de accesorios tech para tomar decisiones informadas. Descubre opiniones y recomendaciones sobre los últimos gadgets y complementos tecnológicos."}
        keywords={"Artículos sobre accesorios tecnológicos, Análisis de gadgets, Reseñas de productos tecnológicos, Novedades en accesorios tech, Guías de compra de gadgets, Últimas tendencias en accesorios, Mejores accesorios tecnológicos, Comparativas de gadgets, Opiniones sobre productos tech, Novedades en gadgets electrónicos, Reviews de accesorios para dispositivos, Artículos sobre tecnología portátil, Lo último en accesorios tecnológicos, Gadgets imprescindibles, Accesorios innovadores, Consejos para elegir accesorios tech, Artículos sobre gadgets útiles, Guías de uso de accesorios tecnológicos, Cobertura de novedades en accesorios, Artículos sobre dispositivos complementarios, Novedades en periféricos, Análisis detallados de accesorios"}
        urlC={"/blog/accessories"}
        url={"/blog/accessories"}
        img={accessories}
      />
      <HeadPage 
        title={"Reseñas de Accesorios Tech - Opiniones y Recomendaciones"}
        description={"Explora nuestras reseñas de accesorios tech para tomar decisiones informadas. Descubre opiniones y recomendaciones sobre los últimos gadgets y complementos tecnológicos."} 
      />
      <ReviewOfert product={productsA} article={"accessories"} cantidad={25} />
      <CategorieOfert />
    </div>
  );
};
