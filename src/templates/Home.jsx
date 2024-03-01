import React, { lazy, Suspense } from 'react';



import Ofert from "../components/Ofert";

import SecondHeader from "../components/SecondHeader";

import ProductGrid from "../components/ProductGrid";
import ProductSecond from "../components/ProductSecond";

import Products from "../assets/amazon/products";

import offert from "../assets/amazon/offert";

import recommend from "../assets/amazon/recommend";

const ProductList = lazy(() => import('../containers/ProductList'));

const ReviewOfert = lazy(() => import('../components/ReviewOfert'));
const CategorieOfert = lazy(() => import('../components/CategorieOfert'));


const Home = ({ blogs, categorie }) => {

	return (
		<>
		  <SecondHeader />
		  <Ofert/> 
	      <ProductGrid products={offert}/>
        <ProductSecond products1={recommend} products2={Products}/>
	      <Suspense fallback={<div>Loading...</div>}>
	        <ReviewOfert blogs={blogs} />
	        <ProductList products={Products}/>
          <CategorieOfert categorie={categorie} /> 
        </Suspense>
		</>
	);
};

export default Home;
