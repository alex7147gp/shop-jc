import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import laptops from "@images/laptops.jpg";
import products from '@blogs/gaming';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¿Cuál es la Mejor Laptop para Trabajo y Estudio? Guía y Recomendaciones"}
        description={" Descubre la mejor laptop para trabajo y estudio. Lee nuestra guía y recomendaciones para tomar decisiones informadas y maximizar tu productividad."}
      />
      <BlogPage 
        titulo={"¿Cuál es la Mejor Laptop para Trabajo y Estudio?"}
        intro={"En la actualidad, contar con una laptop confiable y eficiente se ha vuelto fundamental para llevar a cabo tareas laborales y de estudio de manera efectiva. Sin embargo, con tantas opciones disponibles en el mercado, puede ser abrumador elegir la mejor laptop para satisfacer tus necesidades. En este artículo, exploraremos los aspectos clave que debes considerar al buscar la laptop perfecta para trabajo y estudio."}
        img={laptops}
        dconclucion={"La mejor laptop para trabajo y estudio variará según tus necesidades y preferencias individuales. Evalúa aspectos como rendimiento, duración de la batería, tamaño, pantalla, teclado y almacenamiento para tomar una decisión informada. Una laptop que se ajuste a tus actividades y estilo de vida te permitirá ser más productivo y eficiente en tus tareas diarias."}
        tituloDesc={"Aspectos basicos"}
        titulo1={"Rendimiento y Potencia"}
        desc1={"El rendimiento y la potencia son factores fundamentales en una laptop para trabajo y estudio. Asegúrate de elegir un modelo con un procesador potente y una cantidad suficiente de memoria RAM. Esto garantizará que la laptop pueda manejar aplicaciones y tareas multitarea sin problemas. Procesadores de marcas como Intel y AMD, junto con al menos 8 GB de RAM, son ideales para un rendimiento fluido."}
        titulo2={"Duración de la Batería"}
        desc2={"La duración de la batería es esencial para mantener la productividad durante todo el día. Busca una laptop que ofrezca al menos 8 horas de duración de batería, para evitar interrupciones constantes en tu trabajo o estudio. La vida útil de la batería puede variar según el modelo y el uso, por lo que es recomendable leer reseñas y opiniones de usuarios."}
        titulo3={"Tamaño y Portabilidad"}
        desc3={"El tamaño y la portabilidad son aspectos importantes, especialmente si planeas llevar tu laptop contigo. Las laptops vienen en una variedad de tamaños, desde modelos ultraportátiles hasta laptops más grandes y potentes. Si valoras la portabilidad, busca modelos ligeros y delgados que sean fáciles de transportar."}
        tituloRend={"Algunas opciones"}
        titulor1={"Lenovo ThinkPad X1 Carbon:"}
        descr1={"La Lenovo ThinkPad X1 Carbon es una laptop premium diseñada especialmente para profesionales y usuarios empresariales. Destaca por su durabilidad, ya que está construida con materiales de alta calidad y cumple con los estándares de prueba militar. Su chasis de fibra de carbono le brinda una apariencia elegante y resistente al mismo tiempo."}
        titulor2={"Dell XPS 13"}
        descr2={"La Dell XPS 13 es conocida por su diseño elegante y minimalista, con bordes ultra delgados que maximizan la pantalla en un cuerpo compacto. La pantalla InfinityEdge ofrece una experiencia inmersiva y brillante con colores precisos. Esto la hace ideal para tareas que involucran edición de imágenes y video."}
        titulor3={"Apple MacBook Air:"}
        descr3={"El MacBook Air es un icono en la línea de laptops de Apple. Con un diseño delgado y elegante, es una opción popular entre aquellos que prefieren el ecosistema macOS. La pantalla retina de alta resolución ofrece colores vivos y detalles nítidos, lo que es beneficioso para tareas visuales y de diseño."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/716wVK7toLL._AC_SL1500_.jpg"}
        tituloP={"Lenovo ThinkPad L14 Business Laptop"}
        descripcion={"【Processor】Intel Core i5-1135G7 processor (up to 4.2GHz, 4 cores, 8 threads)"} 
        precio={649}
        url={"https://amzn.to/449on2a"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/717n9H3RSxL._AC_SL1500_.jpg"}
        tituloP2={"Early 2020 Apple MacBook Air"}
        descripcion2={"tunning 13.3-inch Retina display with True Tone technology"}
        precio2={570}
        url2={"https://amzn.to/3OSExZp"}
      />
      <ReviewOfert product={products} />
      <CategorieOfert />
    </div>
  );
}; 