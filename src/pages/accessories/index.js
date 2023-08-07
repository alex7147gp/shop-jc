import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@accessories/products";


export default function Accessories() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Compra Accesorios Tecnológicos en Línea | Tienda de Accesorios Tecno"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <Page 
       title={"Accesorios tecnológicos - Compra los mejores accesorios en línea"}
       description={"¡Potencia tus dispositivos con estilo! Descubre los accesorios tecnológicos más innovadores y únicos. Encuentra lo mejor en fundas, auriculares, cargadores y más en nuestra tienda en línea. ¡Mejora tu experiencia tecnológica hoy mismo!"}
       products={products}
      />
    </div>
  );
};
