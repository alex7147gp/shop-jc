import React from 'react';
import ProductList from '@containers/ProductList';

import Slider from "@components/Slider";
import HeadPage from "@components/HeadPage";

import CategorieOfert from "@components/CategorieOfert";
import ReviewOfert from "@components/ReviewOfert"

import products from "@amazon/products";

const Home = () => {
	return (
		<>
		  <HeadPage 
            title={"Mejores ofertados"}
            description={"Productos minusiosamente comparados de bajo costo y alta calidad"} 
          />
	      <Slider products={products} />
	      <ProductList products={products}/>
          <CategorieOfert />
          <ReviewOfert />
		</>
	);
};

export default Home;
