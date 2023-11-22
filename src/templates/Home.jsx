import React, { useState, useEffect, lazy, Suspense } from 'react';
import Slider from "../components/Slider";

import HomeBlogComponent from "../components/HomeBlog";
import Ofert from "../components/Ofert";

import products from "../assets/amazon/products";

const ProductList = lazy(() => import('../containers/ProductList'));
const BlogSection = lazy(() => import('../hooks/infinitiScrolling'));
const ReviewOfert = lazy(() => import('../components/ReviewOfert'));
const CategorieOfert = lazy(() => import('../components/CategorieOfert'));


const Home = ({ blogs, categorie, locale }) => {

  const [blogOne, setBlogOne] =  useState(blogs[0]);

  useEffect(() => {
  	
  	const randomIndex = Math.floor(Math.random() * blogs.length);
    setBlogOne(blogs[randomIndex]);
  
  }, []);

	return (
		<>
		  <Ofert/>
	      <Slider products={products} />
	      <HomeBlogComponent mostViewedBlogs={blogs} featuredBlog={blogOne} dailyOffers={products} />
	      <Suspense fallback={<div>Loading...</div>}>
	        <ProductList products={products}/>
	        <ReviewOfert blogs={blogs} />
	        <BlogSection locale={locale} />
          <CategorieOfert categorie={categorie} />
        </Suspense>
		</>
	);
};

export default Home;
