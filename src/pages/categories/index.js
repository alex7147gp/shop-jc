import CategoriesList from "@components/CategoriesList";
import HeadS from "@components/Head";

import HeadPage from "@components/HeadPage";


const Category = () => {
	
	
	return(
      <div>
        <div style={{
          padding: "0px",
          margin: "0px",
          }}>
          <HeadS
            title={"ofertas de amazon"}
            description={"Los mejores productos comparados minusiosamente para que conpre los mejores"}
          />
          <HeadPage 
            title={"Categorias"}
            description={"Productos minusiosamente comparados de bajo costo y alta calidad"} 
          />
          <CategoriesList/>
        </div>  
      </div>
	);
};

export default Category;