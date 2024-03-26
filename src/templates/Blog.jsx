import React, { useState, useEffect, lazy, Suspense } from 'react';


import HomeBlogComponent from "../components/HomeBlog";
import Ofert from "../components/Ofert";

import SecondHeader from "../components/SecondHeader";

import products from "../assets/amazon/products";

const ProductList = lazy(() => import('../containers/ProductList'));
const BlogSection = lazy(() => import('../hooks/infinitiScrolling'));
const ReviewOfert = lazy(() => import('../components/ReviewOfert'));
const CategorieOfert = lazy(() => import('../components/CategorieOfert'));


const Blog = ({ blogs, categorie, news, tutorials, locale }) => {

  const [blogOne, setBlogOne] =  useState(blogs[0]);

  useEffect(() => {
  	
  	const randomIndex = Math.floor(Math.random() * blogs.length);
    setBlogOne(blogs[randomIndex]);
  
  }, []);

	return (
		<>
		  <SecondHeader />
		  <Ofert/> 
	      <HomeBlogComponent mostViewedBlogs={blogs} featuredBlog={blogOne} dailyOffers={products} />
	      <Suspense fallback={<div>Loading...</div>}>
	        <ReviewOfert blogs={blogs} />
	        <ProductList products={products}/>
	        <ReviewOfert blogs={news} type={'news'} urlN={'news'}/>
	        <ReviewOfert blogs={tutorials} type={'tutorials'} urlN={'tutorials'}/>
	        <BlogSection locale={locale} />
          <CategorieOfert categorie={categorie} /> 
        </Suspense>
		</>
	);
};

export default Blog;