import React from 'react';
import ProductList from '@containers/ProductList';

import Slider from "@components/Slider";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

import products from "@amazon/products";
import categories from '@amazon/categories';


import productsb from '@blogs/products';

const Home = () => {
	return (
		<>
		  <HeadPage 
            title={"JCshop"}
            description={"Productos minusiosamente comparados de bajo costo y alta calidad"} 
          />
	      <Slider products={products} />
	      <ProductList products={products}/>
	      <ReviewOfert product={productsb} />
          <CategorieOfert categorie={categories} />
		</>
	);
};

export default Home;
