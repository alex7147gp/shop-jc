import React from 'react';
import ProductList from '../containers/ProductList';

import Slider from "../components/Slider";


import ReviewOfert from "../components/ReviewOfert";
import CategorieOfert from "../components/CategorieOfert";

import Ofert from "../components/Ofert";
import products from "../assets/amazon/products";




const Home = ({ blogs, categorie }) => {

  
	return (
		<>
		  <Ofert/>
	      <Slider products={products} />
	      <ProductList products={products}/>
	      <ReviewOfert blogs={blogs} />
          <CategorieOfert categorie={categorie} />
		</>
	);
};

export default Home;
