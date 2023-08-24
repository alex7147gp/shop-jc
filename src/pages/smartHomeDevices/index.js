import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@smartHomeDevices/products";
import smartHome from "@images/smart-home.jpg";

export default function SmartHomeDevices() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"¡Transforma tu Hogar con la Tecnología Inteligente de Nuestros Dispositivos para Hogar!"}
        description={"Automatiza tu hogar con los mejores dispositivos para hogar inteligente. Descubre una amplia gama de productos que hacen que tu vida sea más cómoda y conveniente."}
        keywords={"Dispositivos inteligentes para el hogar, Tecnología para el hogar, Domótica, Automatización del hogar, Dispositivos conectados, Hogar inteligente, SmartHome, Control doméstico, Internet de las cosas en el hogar, Asistentes virtuales para el hogar, Sistemas de seguridad inteligentes, Luces inteligentes, Termostatos inteligentes, Cerraduras inteligentes, Cámaras de seguridad para el hogar, Enchufes inteligentes, Altavoces inteligentes, Asistentes de voz para el hogar, Ecosistema de dispositivos para el hogar, Automatización de luces, Gestión remota del hogar, Dispositivos para hogares conectados, Hogar automatizado, Dispositivos IoT para el hogar"}
        urlC={"/smartHomeDevices"}
        url={"/smartHomeDevices"}
        img={smartHome}
      />
      <Page 
       title={"Dispositivos para Hogar Inteligente - Automatiza tu Hogar"}
       description={"Bienvenido al futuro del hogar. Nuestros dispositivos para hogar inteligente te permiten controlar y automatizar todo, desde las luces hasta la seguridad, con un simple toque. Descubre una experiencia de vida más cómoda y eficiente con la tecnología más avanzada. ¡Prepárate para vivir en un hogar inteligente y conectado!"}
       products={products}
      />
    </div>
  );
};