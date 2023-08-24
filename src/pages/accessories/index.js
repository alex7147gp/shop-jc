import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@accessories/products";
import accessories from "@images/accessories.jpg";

export default function Accessories() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Compra Accesorios Tecnológicos en Línea | Tienda de Accesorios Tecno"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
        keywords={"Accesorios tecnológicos, Gadgets, Dispositivos complementarios, Productos tecnológicos, Accesorios para dispositivos, Periféricos, Fundas y estuches, Cables y conectores, Auriculares inalámbricos, Cargadores portátiles, Soportes para dispositivos, Teclados y ratones, Protectores de pantalla, Altavoces Bluetooth, Accesorios para móviles, Fundas para tablets, Adaptadores, Gadgets útiles, Tecnología portátil, Innovaciones tecnológicas, Gadgets electrónicos, Accesorios para la vida digital, Accesorios para la vida conectada, Gadgets para viajes, Accesorios para la oficina, Accesorios para el hogar inteligente"}
        urlC={"/accessories"}
        url={"/accessories"}
        img={accessories}
      />
      <Page 
       title={"Accesorios tecnológicos - Compra los mejores accesorios en línea"}
       description={"¡Potencia tus dispositivos con estilo! Descubre los accesorios tecnológicos más innovadores y únicos. Encuentra lo mejor en fundas, auriculares, cargadores y más en nuestra tienda en línea. ¡Mejora tu experiencia tecnológica hoy mismo!"}
       products={products}
      />
    </div>
  );
};
