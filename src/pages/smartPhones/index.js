import HeadS from "@components/Head";
import Page from "../../templates/Page";

import products from "@smartphones/products";

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={" ¡Explora la Tecnología de Punta con Nuestra Selección de Teléfonos Inteligentes!"}
        description={" Encuentra los mejores teléfonos inteligentes en línea. Descubre una amplia selección de smartphones con características avanzadas y rendimiento excepcional."}
      />
      <Page 
       title={"Teléfonos Inteligentes - Encuentra los Mejores"}
       description={"Entra en el mundo de la innovación con nuestros teléfonos inteligentes. Desde cámaras de alta resolución hasta procesadores potentes, cada detalle está diseñado para superar tus expectativas. Mantente conectado, disfruta de una experiencia multimedia inigualable y lleva tu productividad al siguiente nivel. ¡Descubre la maravilla de la tecnología móvil ahora!"}
       products={products}
      />
    </div>
  );
};
