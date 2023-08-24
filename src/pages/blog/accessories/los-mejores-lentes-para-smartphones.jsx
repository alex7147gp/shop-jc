import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import accessories1 from "@images/accessories1.jpg";
import productsC from '@blogs/computers';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Lentes para Smartphones: Eleva tus Fotografías - Guía Completa"}
        description={"Descubre cómo los lentes para smartphones pueden elevar tus fotografías. Explora nuestra guía completa y aprende cómo mejorar tu experiencia fotográfica con accesorios profesionales para tu dispositivo móvil."}
        keywords={"Lentes para Smartphones, Guía Completa de Lentes para Móviles, Mejores Lentes para Fotografía Móvil, Fotografía con Lentes para Smartphones, Elección de Lentes para tu Teléfono, Reseñas de Lentes para Fotografía de Móvil, Comparativa de Lentes para Smartphones, Mejorar Fotografías con Lentes para Teléfonos, Consejos para Fotografía Móvil con Lentes, Ampliar las Posibilidades Fotográficas, Creatividad en Fotografía con Lentes, Captura de Imágenes Mejorada, Experiencia de Fotografía con Lentes para Smartphones, Fotografía Profesional con tu Teléfono, Compatibilidad de Lentes con Móviles"}
        urlC={"/blog/accessories/los-mejores-lentes-para-smartphones"}
        url={"/blog/accessories/los-mejores-lentes-para-smartphones"}
        img={accessories1}
      />
      <BlogPage 
        titulo={"Lentes para Smartphones: Eleva tus Fotografías"}
        intro={"En la era digital actual, los smartphones se han convertido en herramientas esenciales para capturar momentos especiales y expresar nuestra creatividad a través de la fotografía. Sin embargo, a medida que la calidad de las cámaras de los smartphones mejora, también lo hace la demanda de resultados fotográficos más profesionales. Es aquí donde entran en juego los lentes para smartphones. En este artículo, exploraremos cómo estos pequeños accesorios pueden elevar tus fotografías a un nivel superior."}
        img={accessories1}
        dconclucion={"En resumen, los lentes para smartphones son accesorios que pueden transformar tus fotografías móviles en obras de arte profesionales. Con una variedad de tipos disponibles, puedes ampliar tus horizontes fotográficos y experimentar con nuevas técnicas."}
        tituloDesc={"Ascpectos a considerar"}
        titulo1={"La Magia de los Lentes para Smartphones"}
        desc1={"Los lentes para smartphones son accesorios que se acoplan a la cámara de tu dispositivo y amplían sus capacidades fotográficas. Estos lentes adicionales permiten que tu smartphone capture imágenes con diferentes perspectivas, efectos y detalles. Desde lentes gran angular hasta teleobjetivos, la variedad de opciones disponibles te brinda la libertad de explorar nuevos estilos y enfoques en tus fotografías."}
        titulo2={"Cómo Elegir el Lente Correcto"}
        desc2={"Al elegir un lente para smartphone, considera tus intereses y estilo fotográfico. Si te encanta capturar paisajes y amas la amplitud, un lente gran angular podría ser tu elección. Si prefieres explorar la belleza en los detalles, elige un lente macro. Para retratos y fotografía de sujetos distantes, el lente teleobjetivo es ideal. Si buscas experimentar con efectos creativos, el lente ojo de pez puede ser una opción emocionante."}
        titulo3={"Instalación y Compatibilidad"}
        desc3={"La mayoría de los lentes para smartphones son fáciles de instalar. Vienen con clips o monturas magnéticas que se adhieren a la cámara de tu dispositivo. Sin embargo, antes de comprar, asegúrate de que el lente sea compatible con tu modelo de smartphone."}
        tituloRend={"Tipos de Lentes para Smartphones"}
        titulor1={"Lente Gran Angular:"}
        descr1={"Este tipo de lente expande el campo de visión de tu cámara, permitiéndote capturar paisajes amplios y escenas panorámicas con facilidad. Es perfecto para fotografiar arquitectura, naturaleza y situaciones en las que deseas abarcar más en una sola toma."}
        titulor2={"Lente Macro:"}
        descr2={"El lente macro te acerca a los detalles más pequeños y crea fotografías sorprendentemente detalladas de objetos cercanos. Es ideal para capturar la belleza de flores, insectos y objetos diminutos que a menudo pasan desapercibidos."}
        titulor3={"Lente Teleobjetivo:"}
        descr3={"El lente teleobjetivo te permite acercarte a sujetos distantes sin comprometer la calidad de la imagen. Es genial para fotografía de retratos y para capturar objetos que están fuera de tu alcance físico."}
        //option1
        tituloOp1={"Lente Ojo de Pez:"}
        descOp1={"Con su característico efecto curvo y amplio ángulo de visión, el lente ojo de pez crea imágenes únicas y creativas. Es perfecto para fotografías experimentales y artísticas."}
        //option2
        tituloOp2={"Lente Polarizador:"}
        descOp2={"Este lente reduce los reflejos no deseados y mejora la saturación de colores en tus fotos. Es especialmente útil al fotografiar paisajes y escenas al aire libre."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/71kcc0zuYjL._AC_SL1500_.jpg"}
        tituloP={"Xenvo Pro Lens Kit for iPhone and Android"}
        descripcion={"TRUVIEW 0.45x WIDE ANGLE LENS - CAPTURE 45% MORE PICTURE WITH EVERY SNAP: Shoot stunning photos of people, pets, travel scenery, landscapes, architecture, selfies and more. NO DARK CORNERS (vignetting) like cheaper lenses."} 
        precio={40}
        url={"https://amzn.to/3QHSeM6"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/61AUXRRjrVL._AC_SL1500_.jpg"}
        tituloP2={"APEXEL Professional Macro Photography Lens"}
        descripcion2={"PROFESSIONAL OPTICAL LENS-The macro lens is made of 5 pcs quality glass lens instead of a cheap resinous lens. Each lens has 3-5 layers of coating to increase lens transmissivity and reduce reflectivity. It can offer HD view, no distortion, no vignetting, no dark corners. Start to take close-up photos by your cell phone with the macro lens."}
        precio2={38}
        url2={"https://amzn.to/3KHMQow"}
      />
      <ReviewOfert product={productsC} article={"accessories"} />
      <CategorieOfert />
    </div>
  );
}; 