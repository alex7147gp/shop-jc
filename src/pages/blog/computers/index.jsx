import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import products from '@blogs/products';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Explora el Universo Tecnológico a través de Nuestras Reseñas de Computadoras!"}
        description={"Encuentra las mejores reseñas de computadoras en línea. Lee análisis detallados y opiniones para tomar decisiones informadas en tus compras tecnológicas."}
      />
      <HeadPage 
        title={"Reseñas de Computadoras - Encuentra las Mejores"}
        description={"Adéntrate en el mundo de la tecnología con nuestras reseñas de computadoras. Descubre análisis exhaustivos, comparativas y opiniones genuinas que te ayudarán a elegir la computadora perfecta para tus necesidades. Desde rendimiento hasta diseño, estamos aquí para guiarte en tu elección tecnológica. ¡Prepárate para tomar decisiones informadas y encontrar la computadora de tus sueños!"} 
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
};