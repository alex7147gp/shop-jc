import React, { useState, useEffect } from 'react';
import ProductList from '../containers/ProductList';

import Slider from "../components/Slider";
import BlogSection from "../hooks/infinitiScrolling";

import ReviewOfert from "../components/ReviewOfert";
import CategorieOfert from "../components/CategorieOfert";
import HomeBlogComponent from "../components/HomeBlog";

import Ofert from "../components/Ofert";
import products from "../assets/amazon/products";




const Home = ({ blogs, categorie }) => {

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
	      <ProductList products={products}/>
	      <ReviewOfert blogs={blogs} />
	      <BlogSection/>
         <CategorieOfert categorie={categorie} />
		</>
	);
};

export default Home;
