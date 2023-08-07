import React from 'react';
import ProductList from '@containers/ProductList';

import Slider from "@components/Slider";
import HeadPage from "@components/HeadPage";

import ReviewOfert from "@components/ReviewOfert";


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
		</>
	);
};

export default Page;