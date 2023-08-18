import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import consola from "@images/consola.jpg";
import productsG from '@blogs/gaming';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¿Cuál es la Mejor Consola de Videojuegos en 2023? Guía y Comparativas"}
        description={" Descubre la mejor consola de videojuegos en 2023. Lee nuestra guía y comparativas para elegir la plataforma de juego perfecta para ti."}
      />
      <BlogPage 
        titulo={"¿Cuál es la Mejor Consola de Videojuegos en 2023?"}
        intro={"En el emocionante mundo de los videojuegos, la elección de la consola adecuada puede marcar la diferencia en tu experiencia de juego. Con avances tecnológicos constantes y nuevas opciones en el mercado, es comprensible que te sientas abrumado al elegir una consola de videojuegos en 2023. En este artículo, exploraremos las principales opciones disponibles y te ayudaremos a determinar cuál podría ser la mejor elección para ti."}
        img={consola}
        dconclucion={"La elección de la mejor consola de videojuegos en 2023 depende en última instancia de tus preferencias personales y necesidades. Cada opción tiene sus propias fortalezas y ventajas, ya sea la innovación y exclusividad de la PS5, la potencia y diversidad de la Xbox Series X, la portabilidad y creatividad de la Nintendo Switch Pro, o la personalización y rendimiento del PC gaming.Investiga, compara y considera tus prioridades al elegir la consola que te brindará innumerables horas de diversión y entretenimiento. Recuerda que la elección de una consola es una inversión en tu experiencia de juego, así que elige sabiamente."}
        tituloDesc={"Mejores Consolas"}
        titulo1={"PlayStation 5: Innovación y Exclusividad"}
        desc1={"La PlayStation 5, lanzada por Sony, ha sido un gran protagonista en el mundo de las consolas en 2023. Con su impresionante potencia y capacidad gráfica, la PS5 ofrece una experiencia de juego envolvente y de alta calidad. Su catálogo de exclusivas, como 'Horizon Forbidden West' y 'God of War: Ragnarok', atrae a muchos jugadores que buscan títulos únicos y emocionantes."}
        titulo2={"Xbox Series X: Potencia y Diversidad"}
        desc2={"Microsoft no se queda atrás con su Xbox Series X. Esta consola de última generación destaca por su potencia y capacidad de juego en resolución 4K. La biblioteca de juegos de Xbox Game Pass, que ofrece una amplia variedad de títulos, atrae a jugadores de diferentes gustos. Además, la integración con servicios en la nube como Xbox Cloud Gaming expande aún más las posibilidades de juego."}
        titulo3={"Nintendo Switch Pro: Portabilidad y Creatividad"}
        desc3={"Nintendo ha continuado cautivando a los jugadores con su Nintendo Switch Pro. Esta consola híbrida combina la portabilidad de una consola portátil con la capacidad de juego en el televisor. La exclusividad de los juegos de Nintendo, como 'The Legend of Zelda: Breath of the Wild 2' y 'Metroid Prime 4', atrae a fanáticos de las franquicias clásicas."}
        tituloRend={"Factores a Considerar al Elegir una Consola de Videojuegos"}
        titulor1={"Catálogo de Juegos"}
        descr1={"El catálogo de juegos disponibles es uno de los factores más importantes a considerar. Cada consola tiene su propia selección de exclusivas y títulos populares. Investiga los juegos disponibles y asegúrate de que la consola ofrezca los títulos que más te interesan."}
        titulor2={"Rendimiento y Gráficos"}
        descr2={"El rendimiento y la calidad gráfica son cruciales para una experiencia de juego inmersiva. Considera la potencia de la consola y su capacidad para manejar juegos en resolución 4K o incluso 8K, si buscas una experiencia visual impresionante."}
        titulor3={"Compatibilidad y Retrocompatibilidad"}
        descr3={"Si ya tienes una biblioteca de juegos de una generación anterior, la compatibilidad y retrocompatibilidad pueden ser importantes. Asegúrate de que la consola sea compatible con los juegos que deseas jugar."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/51eOztNdCkL._SL1500_.jpg"}
        tituloP={"PlayStation 5 Console (PS5)"}
        descripcion={"Model Number CFI-1215A01X.PS5 Digital Edition is an all-digital version of the PS5 console with no disc drive."} 
        precio={450}
        url={"https://amzn.to/449lq1A"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/51wea7ifCaL._SL1001_.jpg"}
        tituloP2={"Xbox Series X & Game Pass Ultimate: 3 Months Membership [Digital Code]"}
        descripcion2={"XBOX SERIES X: The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.*"}
        precio2={530}
        url2={"https://amzn.to/3QwsjXO"}
      />
      <ReviewOfert product={productsG} article={"gaming"} />
      <CategorieOfert />
    </div>
  );
}; 