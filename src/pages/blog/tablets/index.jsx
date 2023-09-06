import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsT from '@blogs/tablets';
import tablets from "@images/tablets.jpg";

export default function Tablets() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Descubre el Mundo de las Tablets con Nuestras Reseñas Detalladas!"}
        description={"Explora nuestras reseñas de tablets para tomar decisiones informadas. Analizamos características, rendimiento y más para ayudarte a elegir la mejor tablet para ti."}
        keywords={"Artículos sobre tablets, Análisis de tablets, Reseñas de dispositivos tablet, Novedades en tablets, Guías de compra de tablets, Últimas tendencias en tecnología de tablets, Mejores tablets del mercado, Comparativas de modelos de tablets, Opiniones sobre rendimiento de tablets, Novedades en accesorios para tablets, Reviews de tablets Android, Artículos sobre tablets iOS, Lo último en tecnología de pantallas para tablets, Consejos para elegir una tablet, Artículos sobre usos innovadores de tablets, Cobertura de novedades en dispositivos tablet, Guías de uso de tablets, Artículos sobre actualizaciones de software para tablets, Novedades en duración de batería para tablets, Análisis detallados de características de tablets"}
        urlC={"/blog/tablets"}
        url={"/blog/tablets"}
        img={tablets}
      />
      <HeadPage 
        title={"Reseñas de Tablets - Explora las Mejores Opciones"}
        description={"Sumérgete en el universo de las tablets con nuestras reseñas detalladas. Desde las últimas innovaciones hasta las opciones clásicas, nuestra guía te llevará a través de un viaje de tecnología y funcionalidad. Ya sea para trabajo o entretenimiento, te ayudaremos a encontrar la tablet perfecta para satisfacer todas tus necesidades digitales. ¡Explora, compara y elige sabiamente!"} 
      />
      <ReviewOfert product={productsT} article={"tablets"} cantidad={10} />
      <CategorieOfert />
    </div>
  );
};