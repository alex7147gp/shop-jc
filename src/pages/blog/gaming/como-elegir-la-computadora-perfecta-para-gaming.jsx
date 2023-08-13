import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import gaming from "@images/gaming.jpg";
import products from '@blogs/gaming';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Cómo Elegir la Computadora Perfecta para Gaming - Guía Completa"}
        description={" Encuentra la guía completa para elegir la computadora perfecta para gaming. Aprende sobre componentes esenciales y consideraciones clave para una experiencia de juego excepcional."}
      />
      <BlogPage 
        titulo={"Cómo Elegir la Computadora Perfecta para Gaming"}
        intro={"El mundo del gaming ha experimentado un crecimiento explosivo en los últimos años, y con él, la demanda de computadoras diseñadas específicamente para satisfacer las necesidades de los jugadores más exigentes. Elegir la computadora perfecta para gaming es una decisión crucial, ya que afectará directamente tu experiencia de juego. En este artículo, te brindaremos una guía completa para seleccionar la computadora ideal que te permita sumergirte en emocionantes aventuras virtuales y obtener el máximo rendimiento en tus juegos favoritos."}
        img={gaming}
        dconclucion={"Elegir la computadora perfecta para gaming es una decisión que no debe tomarse a la ligera. Cada componente mencionado anteriormente juega un papel crucial en tu experiencia de juego, y es esencial encontrar el equilibrio adecuado que se adapte a tus necesidades y preferencias. Investiga, compara y considera las recomendaciones de otros jugadores antes de tomar tu decisión final. Recuerda que una computadora de gaming bien elegida no solo te brindará horas de entretenimiento, sino que también te permitirá sumergirte en mundos virtuales impresionantes con un rendimiento óptimo."}
        tituloDesc={"Especificaciones Técnicas"}
        titulo1={"Procesador"}
        desc1={"Busca procesadores de alto rendimiento y múltiples núcleos para un mejor desempeño en juegos exigentes."}
        titulo2={"Tarjeta Gráfica"}
        desc2={"Una tarjeta gráfica potente es esencial para disfrutar de gráficos y resoluciones óptimas en juegos."}
        titulo3={"Memoria RAM"}
        desc3={"Una cantidad suficiente de memoria RAM garantiza una ejecución fluida de los juegos y aplicaciones."}
        tituloRend={"Rendimiento y Gráficos"}
        titulor1={"Tarjeta Gráfica"}
        descr1={"Busca una tarjeta gráfica dedicada con suficiente memoria VRAM para lograr un rendimiento óptimo en los juegos actuales."}
        titulor2={"Resolución y Frecuencia de Actualización"}
        descr2={"Una alta resolución y frecuencia de actualización aseguran una experiencia de juego más nítida y fluida."}
        titulor3={"FPS (Frames Per Second)"}
        descr3={"Los FPS altos proporcionan una jugabilidad más suave y reactiva, especialmente en juegos de acción rápida."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/71hvVLqlgaL._AC_SL1500_.jpg"}
        tituloP={"Gaming Desktop PC, Intel Quad I7 up to 3.8Ghz,GeForce GTX 1660 Super 6G GDDR6, 16G, 1TB SSD, WiFi, BT 5.0, RGB Keyboard & Mouse, W10P64"}
        descripcion={"This computer is well-suited for a variety of tasks including gaming, study, home, business, photo and video editing, streaming, day trading, crypto trading, and more."} 
        precio={350}
        url={"https://amzn.to/3OAjLfO"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/71DgPQNRm6L._AC_SL1500_.jpg"}
        tituloP2={"KOORUI 27 Inch QHD Gaming Monitor 144 Hz, VA, 1ms, DCI-P3 90% Color Gamut, Adaptive Sync, (2560x1440, HDMI, DisplayPort) Black"}
        descripcion2={"EXCEPTIONAL PICTURE QUALITY: The 27 inch QHD (2560*1440) display with the DCI-P3 90% wide color gamut brings what you’re watching to life in over 16.7M colors."}
        precio2={180}
        url2={"https://amzn.to/3EcSgV7"}
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
}; 