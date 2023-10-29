import { useState, useEffect } from "react";

import styles from "../styles/Slider.module.scss";

import Image from "next/image";
import Link from "next/link";

import { useTranslation } from 'next-i18next';

import Products from "../assets/amazon/products";

const Slider = ({ products }) => {

  const { t } = useTranslation(['ofert']);

  const product = products ? products : Products;

  const [sliderIndex, setSliderIndex] = useState(0);

  // Agrega un estado para controlar la dirección del slider
  const [direction, setDirection] = useState("right");

  // Función para cambiar la dirección del slider
  const toggleDirection = () => {
    setDirection(direction === "right" ? "left" : "right");
  };

  const handleClick = (newDirection) => {
    setDirection(newDirection);
    toggleDirection();
  };

  // Esta función se ejecuta cada vez que cambia el índice o la dirección
  useEffect(() => {
    const interval = setInterval(() => {
      if (direction === "left") {
        setSliderIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 100 : 600));
      } else {
        setSliderIndex((prevIndex) =>
          prevIndex < 600 ? prevIndex + 100 : 0
        );
      }
    }, 3000); // Cambia cada 3 segundos (ajusta el intervalo según tus necesidades)

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [sliderIndex, direction]);

  return (
    <div className={styles.Contenedor}>
      <div
        className={styles.Arrow}
        direction="left"
        style={{ left: "10px" }}
        onClick={() => handleClick("left")}
        onKeyUp={() => handleClick("left")}
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
        style={{ transform: `translateX(-${sliderIndex}vw)` }}
      >
        {product.slice(0, 8).map((slider) => (
          <div className={styles.Slide} style={{ backgroundColor: "#f1f3f9" }} key={slider.id}>
            <div className={styles.ImgContainer}>
              <Image src={slider.imagen} alt={slider.titulo} layout="responsive" width={50} height={30} />
            </div>
            <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>{slider.titulo.substring(0, 60)}...</h1>
              <p className={styles.Description}>{slider.descripcion.substring(0, 120)}...</p>
              <Link href={slider.url} itemID={slider._id} target="_blank">
                <button className={styles.Button}>{t('shop')}</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles.Arrow}
        direction="right"
        style={{ right: "10px" }}
        onClick={() => handleClick("right")}
        onKeyDown={() => handleClick("right")}
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

export default Slider;