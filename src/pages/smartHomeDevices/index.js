import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@smartHomeDevices/products";


export default function SmartHomeDevices() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Transforma tu Hogar con la Tecnología Inteligente de Nuestros Dispositivos para Hogar!"}
        description={"Automatiza tu hogar con los mejores dispositivos para hogar inteligente. Descubre una amplia gama de productos que hacen que tu vida sea más cómoda y conveniente."}
      />
      <Page 
       title={"Dispositivos para Hogar Inteligente - Automatiza tu Hogar"}
       description={" Bienvenido al futuro del hogar. Nuestros dispositivos para hogar inteligente te permiten controlar y automatizar todo, desde las luces hasta la seguridad, con un simple toque. Descubre una experiencia de vida más cómoda y eficiente con la tecnología más avanzada. ¡Prepárate para vivir en un hogar inteligente y conectado!"}
       products={products}
      />
    </div>
  );
};