import { useState } from "react";


import styles from '@styles/Slider.module.scss';



import Image from "next/image";
import Link from "next/link";

import Products from "@amazon/products";


const Silder = ({ products }) => {
  

  const product = products ? products : Products;

  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = (direction)=>{
    if(direction === 'left'){  
      setSliderIndex(sliderIndex > 0 ? sliderIndex - 100 : 0);

    }
    else{
      setSliderIndex(sliderIndex < 600 ? sliderIndex + 100 : 600);
    }  
  };
  
	return(
     <div className={styles.Contenedor}>
       <div 
         className={styles.Arrow} 
         direction='left' 
         style={{ left: "10px" }} 
         onClick={()=> handleClick("left")}
         onKeyUp={()=> handleClick("left")}
         role="button"
         tabIndex={0}
       >
         <Image 
           src={"https://pics.freeicons.io/uploads/icons/png/10840070941540882605-512.png"}
           layout="fill"
           alt="arrow" 
         />
       </div>
       <div 
         className={styles.Wrapper} 
         style={{ transform: `translateX(-${sliderIndex}vw)` }}>
         {product.slice(0,8).map(slider =>
          <div className={styles.Slide}  style={{backgroundColor: "#f1f3f9" }} key={slider.id}>
            <div className={styles.ImgContainer}>
              <Image  
                  src={slider.imagen} 
                  alt={slider.title} 
                  layout="responsive"
                  width={50} 
                  height={30} 
              />
            </div>
            <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>{slider.titulo.substring(0, 60)}...</h1>
              <p className={styles.Description}>{slider.descripcion.substring(0, 120)}...</p>          
              <Link href={slider.url}  itemId={slider._id}>
                <button className={styles.Button}>shop now</button>
              </Link>  
            </div>
          </div>
          )}   
       </div>      
       <div 
         className={styles.Arrow} 
         direction='right' 
         style={{ right: "10px" }} 
         onClick={()=> handleClick("right")}
         onKeyDown={()=> handleClick("right")}
         role="button"
         tabIndex={0}
       >         
        <Image 
          src={"https://pics.freeicons.io/uploads/icons/png/8827153231540882605-512.png"}
          layout="fill"
          alt="arrow"
        />
       </div>
     </div>                                       
	);
};

export default Silder;