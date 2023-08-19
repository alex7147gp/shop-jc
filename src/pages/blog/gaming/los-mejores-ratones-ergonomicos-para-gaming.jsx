import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import gaming1 from "@images/gaming1.jpg";
import productsG from '@blogs/gaming';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Ratones Ergonómicos para Gaming: Precisión y Comodidad"}
        description={"Descubre cómo los ratones ergonómicos para gaming ofrecen precisión y comodidad. Explora nuestra guía completa y elige el ratón perfecto para mejorar tu experiencia de juego con mayor ergonomía y rendimiento."}
      />
      <BlogPage 
        titulo={"Ratones Ergonómicos para Gaming: Precisión y Comodidad"}
        intro={"Los ratones ergonómicos para gaming han revolucionado la forma en que los jugadores interactúan con sus computadoras mientras compiten en sus títulos favoritos. Estos dispositivos no solo ofrecen precisión y velocidad en los movimientos, sino que también priorizan la comodidad del usuario durante largas sesiones de juego. En este artículo, exploraremos las características y ventajas de los ratones ergonómicos para gaming y cómo han influido en la experiencia de juego de los entusiastas."}
        img={gaming1}
        dconclucion={"En resumen, los ratones ergonómicos para gaming han cambiado la forma en que los jugadores interactúan con sus juegos favoritos. Ofrecen un diseño ergonómico que prioriza la comodidad, una precisión excepcional en cada movimiento y opciones de personalización para adaptarse a tus preferencias"}
        tituloDesc={"Los Mejores Ratones Ergonómicos en el Mercado"}
        titulo1={"Logitech G Pro X Superlight:"}
        desc1={"Este ratón se destaca por su diseño ligero y ergonómico, lo que lo convierte en una opción excepcional para los jugadores que buscan agilidad y comodidad durante largas sesiones de juego. Con un peso reducido, el G Pro X Superlight permite movimientos rápidos y precisos, lo que es esencial para los juegos competitivos. Además de su diseño, cuenta con botones programables y un sensor de alta precisión que garantiza una respuesta rápida y precisa en pantalla. La duración de la batería también es notable, lo que te permite jugar durante horas sin preocuparte por quedarte sin energía."}
        titulo2={"Razer DeathAdder V2:"}
        desc2={"Este ratón cuenta con una forma ergonómica diseñada para encajar perfectamente en la mano del jugador. Su sensor de alta precisión garantiza un rendimiento excepcional en una variedad de géneros de juegos. La DeathAdder V2 ofrece una experiencia de juego cómoda y suave gracias a su diseño ergonómico y a los botones programables que permiten personalizar tu experiencia de juego. Además, su iluminación RGB personalizable agrega un toque de estilo a tu configuración de juego."}
        titulo3={"SteelSeries Rival 600:"}
        desc3={"El Rival 600 se destaca por su innovador sistema de sensores duales que garantiza una precisión aún mayor en los movimientos. Esto se traduce en una experiencia de juego más precisa y fluida. Además, su diseño personalizable te permite ajustar el peso y la distribución de masa según tus preferencias. Los botones adicionales y la iluminación RGB configurable completan la experiencia de juego versátil y cómoda que ofrece este ratón."}
        tituloRend={"Factores a considerar"}
        titulor1={"Precisión en Cada Movimiento"}
        descr1={"La precisión es crucial en el mundo del gaming, donde cada movimiento cuenta. Los ratones ergonómicos para gaming están equipados con sensores de alta precisión que ofrecen una respuesta rápida y suave en pantalla. Los DPI (puntos por pulgada) ajustables permiten al jugador adaptar la sensibilidad del ratón según sus preferencias y el tipo de juego que estén jugando."}
        titulor2={"Botones Programables para Personalización"}
        descr2={"La personalización es clave en el gaming, y los ratones ergonómicos ofrecen botones programables que se pueden configurar para realizar acciones específicas en el juego. Esto permite a los jugadores tener acceso rápido a comandos importantes y realizar acciones complejas con solo presionar un botón."}
        titulor3={"Iluminación RGB para Estilo Personal"}
        descr3={"La iluminación RGB es una característica distintiva de muchos ratones ergonómicos para gaming. Los jugadores pueden personalizar la iluminación para que se ajuste a su estilo y preferencias. Además de agregar un toque de estilo, la iluminación también puede proporcionar información visual durante el juego, como indicar la salud del personaje o el estado de carga."}
        //option1
        tituloOp1={"Durabilidad para Resistir Maratones de Juego"}
        descOp1={"Los jugadores serios pueden pasar horas y horas jugando sin parar. Los ratones ergonómicos para gaming están diseñados con materiales duraderos que resisten el desgaste constante y los movimientos intensos. Estos ratones están diseñados para resistir las demandas de las sesiones de juego más largas."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/718b9wK3eaL._AC_SL1500_.jpg"}
        tituloP={"Logitech G502 Lightspeed Wireless Gaming Mouse"}
        descripcion={"High Performance Design: The iconic shape that has pushed the limits of PC-based optical equipment has evolved for better wireless performance; an extra-thin 1.2 mm shell and internal endoskeleton structure reduce weight for a more ergonomic grip"} 
        precio={130}
        url={"https://amzn.to/3KOtNsD"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/71L-flqtTwL._AC_SL1500_.jpg"}
        tituloP2={"Razer Basilisk V3 Pro Customizable Wireless Gaming Mouse"}
        descripcion2={"ICONIC ERGONOMIC FORM WITH 10 plus1 PROGRAMMABLE BUTTONS: Favored by millions worldwide, the mouse’s signature shape perfectly supports cutting-edge ergonomics and endless customizability options"}
        precio2={140}
        url2={"https://amzn.to/3OJk3kv"}
      />
      <ReviewOfert product={productsG} article={"gaming"} />
      <CategorieOfert />
    </div>
  );
}; 