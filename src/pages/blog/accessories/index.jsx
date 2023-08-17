import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsA from '@blogs/accessories';

export default function Accessories() {
  
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Potencia Tu Experiencia Tecnológica con Nuestras Reseñas de Accesorios Tech!"}
        description={"Explora nuestras reseñas de accesorios tech para tomar decisiones informadas. Descubre opiniones y recomendaciones sobre los últimos gadgets y complementos tecnológicos."}
      />
      <HeadPage 
        title={"Reseñas de Accesorios Tech - Opiniones y Recomendaciones"}
        description={"Explora nuestras reseñas de accesorios tech para tomar decisiones informadas. Descubre opiniones y recomendaciones sobre los últimos gadgets y complementos tecnológicos."} 
      />
      <ReviewOfert product={productsA} article={"Accessories"} />
      <CategorieOfert />
    </div>
  );
};
