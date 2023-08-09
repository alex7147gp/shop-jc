import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import phonePlegable from "@images/phone-plegable.jpg";

import ReviewOfert from "@components/ReviewOfert";
import products from '@blogs/smartphones';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Los Mejores Teléfonos Plegables que Cambiarán tu Experiencia Móvil"}
        description={"Descubre los mejores teléfonos plegables que transformarán tu experiencia móvil. Explora diseños innovadores y características avanzadas para una nueva era de comunicación."}
      />
      <BlogPage 
        titulo={"Los Mejores Teléfonos Plegables que Cambiarán tu Experiencia Móvil"}
        intro={"En el dinámico mundo de la tecnología móvil, la innovación continúa sorprendiéndonos, y los teléfonos plegables son un claro ejemplo de ello. Estos dispositivos revolucionarios han llegado para cambiar la forma en que interactuamos con nuestros smartphones. En este artículo, exploraremos los mejores teléfonos plegables disponibles en el mercado que están destinados a transformar por completo tu experiencia móvil."}
        img={phonePlegable}
        dconclucion={"Los teléfonos plegables han llegado para cambiar la forma en que experimentamos la tecnología móvil. Con marcas líderes como Samsung, Huawei y Xiaomi compitiendo en esta categoría, los consumidores tienen acceso a una variedad de opciones que se adaptan a sus necesidades y preferencias. Si estás buscando una experiencia móvil innovadora y versátil, considerar un teléfono plegable podría ser la elección correcta."}
        tituloDesc={"Una Nueva Era en la Tecnología Móvil"}
        titulo1={"Samsung Galaxy Z Fold 3"}
        desc1={"Uno de los líderes en la categoría de teléfonos plegables es el Samsung Galaxy Z Fold 3. Equipado con una pantalla principal AMOLED de 7.6 pulgadas y una pantalla externa de 6.2 pulgadas, este dispositivo permite una experiencia de visualización excepcional. Además, su S Pen compatible brinda una nueva dimensión de productividad y creatividad."}
        titulo2={"Huawei Mate X2"}
        desc2={"Huawei también ha dejado su huella en el mundo de los teléfonos plegables con el Mate X2. Este dispositivo presenta un diseño plegable tipo libro con pantallas internas y externas de alta resolución. Su potente rendimiento y sus capacidades fotográficas lo convierten en una opción tentadora para aquellos que buscan innovación y versatilidad en un solo dispositivo."}
        titulo3={"Xiaomi Mi Mix Fold"}
        desc3={"Xiaomi ha incursionado en el mercado de teléfonos plegables con el Mi Mix Fold. Este dispositivo ofrece una pantalla AMOLED de 8.01 pulgadas con una sorprendente resolución. Con una configuración de cámara de alta calidad y un rendimiento sólido, el Mi Mix Fold promete una experiencia multimedia y de juego inmersiva."}
        tituloRend={"Ventajas de los Teléfonos Plegables"}
        titulor1={"Mayor Espacio de Pantalla"}
        descr1={"La ventaja más evidente de los teléfonos plegables es su capacidad para proporcionar un mayor espacio de pantalla cuando es necesario. Esto resulta especialmente útil para actividades como ver películas, jugar juegos y realizar tareas de productividad."}
        titulor2={"Multitarea Simplificada"}
        descr2={"Las pantallas plegables permiten una multitarea más intuitiva al dividir la pantalla en secciones para diferentes aplicaciones. Esto facilita la realización de múltiples tareas al mismo tiempo, lo que mejora la eficiencia y la productividad."}
        titulor3={"Diseño Innovador"}
        descr3={"Los teléfonos plegables presentan diseños únicos y llamativos que capturan la atención. Estos dispositivos son una combinación de estilo y funcionalidad, lo que los convierte en una opción atractiva para aquellos que buscan lo último en tecnología."}
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
}; 