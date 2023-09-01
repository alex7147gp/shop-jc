import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import productsG from '@blogs/gaming';
import gaming from "@images/gaming.jpg";

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Explora el Universo Gaming con Nuestras Reseñas de Juegos!"}
        description={"Descubre lo mejor del mundo gaming a través de nuestras reseñas detalladas. Opiniones honestas y análisis profundos para ayudarte en tus decisiones de compra."}
        keywords={"Artículos sobre gaming, Análisis de videojuegos, Reseñas de juegos en línea, Novedades en gaming, Guías de compra de videojuegos, Últimas tendencias en eSports, Mejores juegos de acción, Comparativas de juegos de aventura, Opiniones sobre juegos de rol, Novedades en eSports y competencias, Reviews de consolas de videojuegos, Artículos sobre streaming de juegos, Lo último en juegos multijugador, Consejos para jugadores profesionales, Artículos sobre torneos de eSports, Cobertura de novedades en juegos, Guías de desarrollo de videojuegos, Artículos sobre juegos para consolas, Novedades en juegos para PC, Análisis detallados de accesorios de gaming, Guías de competencias de gaming, Artículos sobre innovación tecnológica en gaming"}
        urlC={"/blog/gaming"}
        url={"/blog/gaming"}
        img={gaming}
      />
      <HeadPage 
        title={"Reseñas de Gaming - Descubre lo Mejor"}
        description={"Bienvenido al paraíso del gaming. Nuestras reseñas te sumergirán en el mundo de los videojuegos con análisis detallados y opiniones apasionadas. Desde las últimas novedades hasta los clásicos atemporales, estamos aquí para guiarte en tus elecciones de juegos. ¡Prepárate para vivir aventuras virtuales como nunca antes!"} 
      />
      <ReviewOfert product={productsG} article={"gaming"} cantidad={10} />
      <CategorieOfert />
    </div>
  );
};