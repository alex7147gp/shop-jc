import HeadS from "@components/Head";
import BlogPage from "../../../templates/BlogPage";

export default function SmartPhones() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"SmartPhones"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <BlogPage 
        titulo={"Cómo Elegir la Computadora Perfecta para Gaming"}
        intro={"El mundo del gaming ha experimentado un crecimiento explosivo en los últimos años, y con él, la demanda de computadoras diseñadas específicamente para satisfacer las necesidades de los jugadores más exigentes. Elegir la computadora perfecta para gaming es una decisión crucial, ya que afectará directamente tu experiencia de juego. En este artículo, te brindaremos una guía completa para seleccionar la computadora ideal que te permita sumergirte en emocionantes aventuras virtuales y obtener el máximo rendimiento en tus juegos favoritos."}
        
      />
    </div>
  );
}; 