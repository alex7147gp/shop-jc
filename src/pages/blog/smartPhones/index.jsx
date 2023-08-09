import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import products from '@blogs/smartphones';

export default function SmartPhones() {
  
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Descubre la Tecnología Móvil en Detalle con Nuestras Reseñas de Smartphones!"}
        description={"Encuentra los mejores smartphones a través de nuestras reseñas detalladas. Opiniones imparciales y análisis exhaustivos para ayudarte a tomar decisiones informadas."}
      />
      <HeadPage 
        title={"Reseñas de Smartphones - Encuentra los Mejores"}
        description={"Entra en el emocionante mundo de la tecnología móvil con nuestras reseñas de smartphones. Explora análisis minuciosos y descubre los pros y contras de los últimos modelos. Desde las cámaras de alta resolución hasta el rendimiento y la duración de la batería, estamos aquí para ayudarte a encontrar el smartphone perfecto para tu estilo de vida. ¡Prepárate para una experiencia móvil excepcional!"} 
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
};
