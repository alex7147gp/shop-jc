import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@gaming/products";
import gaming from "@images/gaming.jpg";

export default function Gaming() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Sumérgete en el Mundo del Gaming con los Mejores Productos!"}
        description={"Encuentra los mejores productos de gaming en línea. Descubre una amplia selección de equipos, accesorios y más para llevar tu experiencia de juego al siguiente nivel."}
        keywords={"Videojuegos, Gaming, Juegos en línea, Consolas de videojuegos, PC gaming, eSports, Jugadores profesionales, Streaming de juegos, Comunidad gamer, Plataformas de gaming, Juegos de acción, Juegos de aventura, Juegos de rol, Juegos de disparos, Juegos multijugador, Competencias de gaming, Torneos de eSports, Juegos para consolas, Juegos para PC, Accesorios de gaming, Gaming en línea, Entretenimiento interactivo, Mundo virtual, Desarrollo de videojuegos, Nuevos lanzamientos, Comprar videojuegos"}
        urlC={"/gaming"}
        url={"/gaming"}
        img={gaming}
      />
      <Page 
       title={"Gaming - Encuentra los Mejores Productos"}
       description={"¿Listo para la aventura? Prepárate para la emoción del gaming con nuestra selección de los mejores productos. Desde potentes PC gamers hasta auriculares inmersivos y teclados personalizados, estamos aquí para elevar tu experiencia de juego. ¡Descubre lo último en tecnología gamer y domina el campo de batalla virtual!"}
       products={products}
      />
    </div>
  );
};