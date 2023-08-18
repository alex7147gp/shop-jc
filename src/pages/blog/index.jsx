import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsC from '@blogs/computers';
import productsG from '@blogs/gaming';
import productsS from '@blogs/smartphones';
import productsT from '@blogs/tablets';
import productsA from '@blogs/accessories';


export default function Reviews() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Descubre el Futuro de la Tecnología con Nuestras Reseñas Tecnológicas!"}
        description={"Descubre las mejores reseñas tecnológicas en línea. Encuentra análisis detallados de productos y gadgets para tomar decisiones informadas en tus compras tecnológicas."}
      />
      <HeadPage
       title={"Reseñas Tecnológicas - Encuentra los Mejores Productos"}
       description={"¿Interesado en la última tecnología? Sumérgete en el mundo de la innovación con nuestras reseñas tecnológicas. Desde smartphones hasta dispositivos inteligentes y wearables, te ofrecemos un análisis detallado de los productos más novedosos. Toma decisiones informadas y mantente a la vanguardia tecnológica. ¡Prepárate para un futuro lleno de avances tecnológicos emocionantes!"}
      />
      <ReviewOfert product={productsS} article={"smartPhones"} />
      <ReviewOfert product={productsG} article={"gaming"} />
      <ReviewOfert product={productsC} article={"computers"} />
      <ReviewOfert product={productsT} article={"tablets"} />
      <ReviewOfert product={productsA} article={"accessories"} />
      <CategorieOfert />
    </div>
  );
};