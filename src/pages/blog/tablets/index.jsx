import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsT from '@blogs/tablets';

export default function Tablets() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Descubre el Mundo de las Tablets con Nuestras Reseñas Detalladas!"}
        description={"Explora nuestras reseñas de tablets para tomar decisiones informadas. Analizamos características, rendimiento y más para ayudarte a elegir la mejor tablet para ti."}
      />
      <HeadPage 
        title={"Reseñas de Tablets - Explora las Mejores Opciones"}
        description={"Sumérgete en el universo de las tablets con nuestras reseñas detalladas. Desde las últimas innovaciones hasta las opciones clásicas, nuestra guía te llevará a través de un viaje de tecnología y funcionalidad. Ya sea para trabajo o entretenimiento, te ayudaremos a encontrar la tablet perfecta para satisfacer todas tus necesidades digitales. ¡Explora, compara y elige sabiamente!"} 
      />
      <ReviewOfert product={productsT} article={"Tablets"} />
      <CategorieOfert />
    </div>
  );
};