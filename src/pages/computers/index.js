import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@computers/products";


export default function Computers() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Potencia tu Productividad con las Mejores Computadoras y Laptops!"}
        description={"Compra las mejores computadoras y laptops en línea. Encuentra una amplia selección de equipos de alta calidad para tus necesidades personales y profesionales."}
      />
      <Page 
       title={"Computadoras y laptops - Compra los mejores en línea"}
       description={"¿Buscando la combinación perfecta de tecnología y rendimiento? Descubre nuestra selección de computadoras y laptops de primera calidad. Desde trabajos profesionales hasta entretenimiento, ¡encuentra tu compañero tecnológico ideal hoy mismo!"}
       products={products}
      />
    </div>
  );
};