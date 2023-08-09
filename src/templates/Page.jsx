import React from 'react';
import ProductList from '@containers/ProductList';

import Slider from "@components/Slider";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";
import CategorieOfert from "@components/CategorieOfert";

const Page = ({ title, description, products }) => {
	return (
		<>
		  <HeadPage 
            title={title}
            description={description} 
          />
	      <Slider products={products} />
          <ProductList products={products}/>
          <ReviewOfert />
          <CategorieOfert />
		</>
	);
};

export default Page;