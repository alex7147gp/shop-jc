import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@consumerElectrics/products";


export default function ConsumerElectronics() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Consumer Electronics"}
        description={"¡Descubre la Mejor Electrónica de Consumo para una Experiencia Tecnológica Inigualable!"}
      />
      <Page 
       title={"¡Descubre la Mejor Electrónica de Consumo para una Experiencia Tecnológica Inigualable!"}
       description={"Bienvenido al mundo de la electrónica de consumo, donde la innovación y la tecnología se unen para mejorar tu vida. Desde smartphones y tablets hasta wearables y dispositivos inteligentes, encuentra todo lo que necesitas para estar conectado y disfrutar de una experiencia tecnológica inigualable. ¡Explora nuestra selección de productos de alta calidad y lleva tu vida al siguiente nivel!"}
       products={products}
      />
    </div>
  );
};