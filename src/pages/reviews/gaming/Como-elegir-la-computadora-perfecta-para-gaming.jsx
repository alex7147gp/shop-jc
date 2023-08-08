import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

import CategorieOfert from "@components/CategorieOfert";
import gaming from "@images/gaming.jpg";

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"Cómo Elegir la Computadora Perfecta para Gaming - Guía Completa"}
        description={" Encuentra la guía completa para elegir la computadora perfecta para gaming. Aprende sobre componentes esenciales y consideraciones clave para una experiencia de juego excepcional."}
      />
      <BlogPage 
        titulo={"Cómo Elegir la Computadora Perfecta para Gaming"}
        intro={"El mundo del gaming ha experimentado un crecimiento explosivo en los últimos años, y con él, la demanda de computadoras diseñadas específicamente para satisfacer las necesidades de los jugadores más exigentes. Elegir la computadora perfecta para gaming es una decisión crucial, ya que afectará directamente tu experiencia de juego. En este artículo, te brindaremos una guía completa para seleccionar la computadora ideal que te permita sumergirte en emocionantes aventuras virtuales y obtener el máximo rendimiento en tus juegos favoritos."}
        img={gaming}
      />
      <CategorieOfert />
    </div>
  );
}; 