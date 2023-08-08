import HeadS from "@components/Head";
import Page from "../../templates/Page";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import products from '@blogs/gaming';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Explora el Universo Gaming con Nuestras Reseñas de Juegos!"}
        description={"Descubre lo mejor del mundo gaming a través de nuestras reseñas detalladas. Opiniones honestas y análisis profundos para ayudarte en tus decisiones de compra."}
      />
      <Page 
       title={"Reseñas de Gaming - Descubre lo Mejor"}
       description={"Bienvenido al paraíso del gaming. Nuestras reseñas te sumergirán en el mundo de los videojuegos con análisis detallados y opiniones apasionadas. Desde las últimas novedades hasta los clásicos atemporales, estamos aquí para guiarte en tus elecciones de juegos. ¡Prepárate para vivir aventuras virtuales como nunca antes!"}
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
};