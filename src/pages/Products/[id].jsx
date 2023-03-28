import ProductInfo from "@components/ProductInfo";


import { useRouter } from 'next/router';


import Products from '@amazon/products';

import HeadS from "@components/Head";




const Product = () => {

    const router = useRouter();
    const currentId = router.query.id;

    const product = Products.find(item => item.id === currentId);


	return( 
      <div>
          <HeadS
            title={product && product.titulo}
            description={product && product.descripcion}
            img={product && product.imagen}
          />
        <ProductInfo product={product && product}/>
      </div>
	);
};

export default Product;
