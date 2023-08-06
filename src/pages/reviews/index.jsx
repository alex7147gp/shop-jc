import HeadS from "@components/Head";
import Page from "../../templates/Page"

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
      <Page 
       title={"Reseñas Tecnológicas - Encuentra los Mejores Productos"}
       description={"¿Interesado en la última tecnología? Sumérgete en el mundo de la innovación con nuestras reseñas tecnológicas. Desde smartphones hasta dispositivos inteligentes y wearables, te ofrecemos un análisis detallado de los productos más novedosos. Toma decisiones informadas y mantente a la vanguardia tecnológica. ¡Prepárate para un futuro lleno de avances tecnológicos emocionantes!"}
      />
    </div>
  );
};