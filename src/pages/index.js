import ProductList from "@containers/ProductList";


import HeadS from "@components/Head";
import HeadPage from "@components/HeadPage";

import Slider from "@components/Slider";


import Newslatter from "@components/Newslatter";
import CategorieOfert from "@components/CategorieOfert";


export default function Home() {
  return (
    <div style={{
      padding: "0px",
      margin: "0px",
      }}>
      <HeadS
        title={"JC shop"}
        description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
      />
      <HeadPage 
        title={"Mejores ofertados"}
        description={"Productos minusiosamente comparados de bajo costo y alta calidad"} 
      />
      <Slider />
      <ProductList />
      <CategorieOfert />
      <Newslatter />  
    </div>
  );
};
