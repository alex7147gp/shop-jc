import styles from '@styles/SliderItems.module.scss';


import Image from "@next/image";



const SliderPg = (props) =>{ 
return(
          <div className={styles.Slide} bg='fcf1ed' style={{ backgroundColor: "fcf1ed" }}>
            <div className={styles.ImgContainer}>
              <Image  src={props.img} alt="image" />
            </div>
            <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>{props.title}</h1>
              <p className={styles.Description}>{props.desc}</p>          
              <button className={styles.Button}> shop now</button>
            </div>
          </div>
  );
};

export default SliderPg;