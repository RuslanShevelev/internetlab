import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
// import { getImages } from "../../../imagesApi";
import styles from "./slider.module.scss";
// import Arrows from "./components/Controls/Arrows";
// import Dots from "./components/Controls/Dots";

import SlidesList from "./slidelist";

export const SliderContext = createContext();

const items = [
  {
    src: "",
    name: "Константинов Михаил Павлович",
    city: "Санкт-Петербург",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ",
  },
  {
    src: "",
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    src: "",
    name: "Артем Корнилов",
    city: "Самара",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
  },
];

export const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  //   const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  //   useEffect(() => {
  //     const loadData = async () => {
  //       const images = await getImages();
  //       setItems(images);
  //     };
  //     loadData();
  //   }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); // when images uploaded or slide changed manually we start timer

  return (
    <div
      style={{ width, height }}
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        {/* <Arrows /> */}
        <SlidesList />
        {/* <Dots /> */}
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
};
