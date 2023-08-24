import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsS from '@blogs/smartphones';
import smartPhones from "@images/smartPhones.jpg";

export default function SmartPhones() {
  
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Descubre la Tecnología Móvil en Detalle con Nuestras Reseñas de Smartphones!"}
        description={"Encuentra los mejores smartphones a través de nuestras reseñas detalladas. Opiniones imparciales y análisis exhaustivos para ayudarte a tomar decisiones informadas."}
        keywords={"Artículos sobre smartphones, Análisis de teléfonos inteligentes, Reseñas de dispositivos móviles, Novedades en smartphones, Guías de compra de smartphones, Últimas tendencias en tecnología móvil, Mejores smartphones del mercado, Comparativas de modelos de smartphones, Opiniones sobre cámaras de smartphones, Novedades en accesorios para móviles, Reviews de dispositivos Android, Artículos sobre dispositivos iOS, Lo último en tecnología de pantallas para smartphones, Consejos para elegir un smartphone, Artículos sobre innovación en smartphones, Cobertura de novedades en dispositivos móviles, Guías de uso de smartphones, Artículos sobre actualizaciones de software para smartphones, Novedades en baterías y carga rápida, Análisis detallados de características de smartphones"}
        urlC={"/blog/smartPhones"}
        url={"/blog/smartPhones"}
        img={smartPhones}
      />
      <HeadPage 
        title={"Reseñas de Smartphones - Encuentra los Mejores"}
        description={"Entra en el emocionante mundo de la tecnología móvil con nuestras reseñas de smartphones. Explora análisis minuciosos y descubre los pros y contras de los últimos modelos. Desde las cámaras de alta resolución hasta el rendimiento y la duración de la batería, estamos aquí para ayudarte a encontrar el smartphone perfecto para tu estilo de vida. ¡Prepárate para una experiencia móvil excepcional!"} 
      />
      <ReviewOfert product={productsS} article={"smartPhones"} />
      <CategorieOfert />
    </div>
  );
};
