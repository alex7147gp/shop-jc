import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import smartPhones4 from "@images/smartPhones4.jpg";
import productsS from '@blogs/smartphones';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Los 5 Mejores Teléfonos Android: Análisis Detallado y Comparativa"}
        description={"Descubre los 5 mejores teléfonos Android en el mercado con nuestro análisis detallado. Compara sus características y elige el ideal para ti."}
      />
      <BlogPage 
        titulo={"Los 5 Mejores Teléfonos Android: Análisis Detallado"}
        intro={"En un mundo tecnológico en constante evolución, los teléfonos Android se destacan como líderes en innovación y funcionalidad. Con una amplia gama de opciones disponibles, puede resultar abrumador elegir el teléfono adecuado que se adapte a tus necesidades. En este artículo, realizaremos un análisis detallado de los 5 mejores teléfonos Android disponibles en el mercado actual."}
        img={smartPhones4}
        dconclucion={"En resumen, estos 5 teléfonos Android ofrecen una combinación de potencia, diseño y características que los convierten en opciones destacadas en el mercado actual. Ya sea que valores la calidad de la cámara, el rendimiento fluido o la experiencia de Android pura, hay una opción para ti."}
        tituloDesc={"Los mejores del mercado"}
        titulo1={"Samsung Galaxy S21 Ultra"}
        desc1={"El Samsung Galaxy S21 Ultra es un verdadero campeón en el mundo de los teléfonos Android. Equipado con una pantalla Dynamic AMOLED 2X de 6.8 pulgadas y una resolución impresionante, ofrece una calidad visual excepcional. Su potente procesador Exynos 2100 o Snapdragon 888 (según la región) junto con hasta 16 GB de RAM garantizan un rendimiento fluido incluso en las tareas más exigentes. La cámara cuádruple de 108 MP, junto con su capacidad de zoom de 100x, redefine la fotografía móvil. Además, cuenta con una batería de 5000 mAh, carga rápida y soporte para S Pen."}
        titulo2={"Google Pixel 6 Pro"}
        desc2={"El Google Pixel 6 Pro se destaca por su experiencia pura de Android. Con una pantalla AMOLED de 6.7 pulgadas y una tasa de actualización de 120 Hz, ofrece una visualización suave y vibrante. El procesador Google Tensor y 12 GB de RAM proporcionan un rendimiento rápido y eficiente. La cámara trasera dual de 50 MP ofrece imágenes nítidas y detalladas, mientras que la cámara frontal de 12 MP es perfecta para selfies. Además, su integración con el ecosistema de Google brinda una experiencia fluida y conectada."}
        titulo3={"OnePlus 9 Pro"}
        desc3={"El OnePlus 9 Pro es conocido por su combinación de rendimiento y diseño elegante. Con una pantalla Fluid AMOLED de 6.7 pulgadas y una tasa de actualización de 120 Hz, ofrece una experiencia visual impresionante. Su procesador Snapdragon 888 y hasta 12 GB de RAM garantizan un rendimiento excepcional en multitarea y juegos. La colaboración con Hasselblad ha llevado la cámara a un nuevo nivel, ofreciendo fotos y videos de alta calidad. Además, su carga rápida Warp Charge 65T y la batería de 4500 mAh aseguran que nunca te quedes sin energía."}
        tituloRend={""}
        titulor1={"Xiaomi Mi 12"}
        descr1={"El Xiaomi Mi 12 es un dispositivo poderoso que ofrece una excelente relación calidad-precio. Con una pantalla AMOLED de 6.7 pulgadas y una tasa de actualización de 120 Hz, brinda una experiencia visual suave. Equipado con el procesador Snapdragon 895 y hasta 12 GB de RAM, ofrece un rendimiento fluido en todas las aplicaciones y juegos. La cámara principal de 108 MP y las capacidades de carga rápida y inalámbrica hacen que sea una opción atractiva para los usuarios."}
        titulor2={"Sony Xperia 1 III"}
        descr2={"El Sony Xperia 1 III se destaca por su enfoque en la experiencia multimedia. Con una pantalla OLED 4K de 6.5 pulgadas, ofrece una calidad visual excepcional. Equipado con el procesador Snapdragon 888 y hasta 12 GB de RAM, garantiza un rendimiento fluido. La cámara cuádruple ZEISS y las funciones de fotografía profesional son ideales para los entusiastas de la fotografía. Además, su calidad de audio y la integración con PlayStation hacen que sea una opción única para los gamers."}
        titulor3={"Actualizaciones de Software y Soporte"}
        descr3={"Mantener tu teléfono actualizado con las últimas versiones de Android es importante para la seguridad y el rendimiento. Algunas marcas ofrecen actualizaciones rápidas y continuas, mientras que otras pueden retrasarse. Asegúrate de elegir un fabricante comprometido con el soporte a largo plazo."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/61bLefD79-L._AC_SL1020_.jpg"}
        tituloP={"SAMSUNG Galaxy S21 Ultra 5G"}
        descripcion={"PRO-GRADE CAMERA: Zoom in close with 100X Space Zoom, and take photos and videos like a pro with our easy-to-use, multi-lens camera..Form_factor : Smartphone.Display resolution maximum:3200 x 1440 pixels"} 
        precio={669}
        url={"https://amzn.to/3qGz276"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/6191aDbiwjL._AC_SL1500_.jpg"}
        tituloP2={"Google Pixel 6 Pro - 5G Android Phone"}
        descripcion2={"Unlocked Android cell phone gives you the flexibility to change carriers and choose your own data plan[1]; the new, redesigned Pixel 6 Pro is the smartest and fastest Pixel yet[2].Form_factor : Smartphone.Display resolution maximum:1080 x 2340 pixels"}
        precio2={620}
        url2={"https://amzn.to/3YJHVZT"}
      />
      <ReviewOfert product={productsS} article={"smartPhones"} />
      <CategorieOfert />
    </div>
  );
}; 