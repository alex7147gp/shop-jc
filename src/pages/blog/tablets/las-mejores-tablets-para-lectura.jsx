import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert";

import tablets3 from "@images/tablets3.jpg";
import productsT from '@blogs/tablets';

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Tablets para Lectura: Explora Bibliotecas Virtuales Fácilmente"}
        description={"Descubre cómo las tablets para lectura te dan acceso a bibliotecas virtuales. Explora libros y documentos con comodidad."}
      />
      <BlogPage 
        titulo={"Tablets para Lectura: Acceso a Bibliotecas Virtuales"}
        intro={"En la era digital actual, las tablets se han convertido en una herramienta esencial para los amantes de la lectura. Gracias a su portabilidad y versatilidad, ofrecen acceso a una amplia gama de libros y contenidos en línea. En este artículo, exploraremos las mejores tablets diseñadas específicamente para la lectura y cómo pueden brindarte acceso a bibliotecas virtuales en tus manos."}
        img={tablets3}
        dconclucion={"Elegir la tablet adecuada para la lectura depende de tus preferencias y necesidades individuales. Ya sea que estés buscando una experiencia de lectura similar al papel o una tablet más versátil para otras actividades"}
        tituloDesc={"Mejores valorados"}
        titulo1={"Amazon Kindle Paperwhite"}
        desc1={"El Amazon Kindle Paperwhite es uno de los dispositivos más populares para la lectura. Equipado con una pantalla Paperwhite de alta resolución y luz frontal ajustable, ofrece una experiencia de lectura similar al papel, incluso en condiciones de iluminación desafiantes. Su batería de larga duración y su amplia selección de libros electrónicos disponibles en la tienda Kindle lo convierten en una excelente opción para los ávidos lectores."}
        titulo2={"Kobo Clara HD"}
        desc2={"La Kobo Clara HD es otra tablet diseñada para la lectura, que ofrece una pantalla E Ink de alta definición y luz frontal ajustable. Kobo se destaca por permitir a los usuarios acceder a una variedad de tiendas de libros electrónicos, lo que significa que no estás limitado a una sola tienda en línea. Además, la función ComfortLight PRO reduce la exposición a la luz azul, lo que facilita la lectura antes de dormir."}
        titulo3={"Apple iPad Mini"}
        desc3={"Si estás buscando una tablet más versátil que también sea adecuada para la lectura, el Apple iPad Mini es una excelente opción. Su pantalla Retina de alta resolución ofrece colores vibrantes y detalles nítidos. Además, con la aplicación Apple Books, puedes acceder a una amplia selección de libros electrónicos y audiolibros. También es ideal para realizar tareas multitarea y consumir otros tipos de contenido."}
        tituloRend={"Otros a considerar"}
        titulor1={"Samsung Galaxy Tab S7"}
        descr1={"La Samsung Galaxy Tab S7 es otra tablet que combina la lectura con la versatilidad. Equipada con una pantalla AMOLED de alta resolución, ofrece imágenes impresionantes y colores vibrantes. Con la aplicación Samsung Books, puedes acceder a una amplia variedad de libros electrónicos. Además, su capacidad para tomar notas con el S Pen la convierte en una herramienta valiosa para estudiantes y profesionales."}
        titulor2={"Onyx Boox Note Air"}
        descr2={"El Onyx Boox Note Air es una tablet especialmente diseñada para la lectura y la toma de notas. Equipada con una pantalla E Ink de 10.3 pulgadas y una función de escritura sensible a la presión, ofrece una experiencia de escritura natural. También es compatible con una variedad de formatos de libros electrónicos y permite la instalación de aplicaciones de lectura de terceros."}
        titulor3={"Boox Nova3 Color"}
        descr3={"La Boox Nova3 Color es una tablet de tinta electrónica que se destaca por su capacidad para mostrar contenido en color. Esto la hace ideal para libros ilustrados y cómics. Equipada con una pantalla de 7.8 pulgadas y soporte para lápices ópticos, ofrece una experiencia de lectura interactiva y creativa."}
        //option1
        tituloOp1={"PocketBook InkPad Color"}
        descOp1={"Otra opción para aquellos que buscan una experiencia de lectura a color es la PocketBook InkPad Color. Con su pantalla de 7.8 pulgadas y resolución HD, ofrece una calidad de imagen impresionante. También es compatible con una variedad de formatos de libros electrónicos y cuenta con una amplia capacidad de almacenamiento."}
        //option2
        tituloOp2={"Sony Digital Paper DPT-CP1"}
        descOp2={"El Sony Digital Paper DPT-CP1 es una tablet única diseñada para la toma de notas y la lectura de documentos. Equipada con una pantalla de 10.3 pulgadas y tecnología E Ink, ofrece una experiencia similar a escribir en papel. Es ideal para profesionales que necesitan revisar y marcar documentos de manera digital."}
        //product1
        imagen={"https://m.media-amazon.com/images/I/51N5CsWCIBL._AC_SL1000_.jpg"}
        tituloP={"Kindle Paperwhite Signature Edition (32 GB)"}
        descripcion={"Get more with Signature Edition – Everything in the Kindle Paperwhite, plus wireless charging, auto-adjusting front light, and 32 GB storage."} 
        precio={190}
        url={"https://amzn.to/3P6ZyQu"}
        //product2
        imagen2={"https://m.media-amazon.com/images/I/71FVDk5m0zL._AC_SL1500_.jpg"}
        tituloP2={"Kobo Clara 2E | eReader"}
        descripcion2={"Our first eReader with an exterior made with over 85% recycled plastic. This includes 10% ocean-bound plastic – abandoned plastic waste that is on its way to our oceans. Over the course of a year, we plan to divert over 200,000 plastic bottles from our planet’s oceans to do our part in limiting the damage our oceans are suffering. Make the better choice with Kobo Clara"}
        precio2={140}
        url2={"https://amzn.to/3qEbcbV"}
      />
      <ReviewOfert product={productsT} article={"tablets"} />
      <CategorieOfert />
    </div>
  );
}; 