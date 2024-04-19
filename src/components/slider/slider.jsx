import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
import styles from "./slider.module.scss";
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
    src: "https://s3-alpha-sig.figma.com/img/d81c/e9cb/db5f1aa6994f0a3a6a7e19557191c7d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IS9tnZWpu1LEA-S8giZIMI9tYLjxJB4zg--sCPiUlWBiHriAeg-cS6-dlUbFCCKewAfQBFcxICtF9-mv1Xk72NNv08xsk~SoKgHrA7Utrv5h5kWlT~3joKI3DEJiykmjciU8~Byjl6FmJs93Pj6WtvwJ4BV~06MpJheRDew4jFy4dOfpp84nmFMSCGyQc~klI2PY0XdCRaTVqOv0yrw87gPa27Gjs38s5Lqy-pdMWrq4ZDBKAbGvqRadRJUQjUHSPoZaNtCzv-MVTmZ9wKvW1aCVlofCdZ7FWiTiCQKmmSbnzKvgXGA1pQ6HqJ~CvkcJA2xzYtIcxW5k3XiAHyFI6A__",
    name: "Иван Иванов",
    city: "Санкт-Петербург",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/a60c/3e4a/ad8622a80fadc9dc9dc3f30e3e065f14?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e1LYk-JPFOHWNb-apzAEa5T7syVNmiCcnYZQShIw494iBpgcZ~I2600BVxTS6RLF~QBtc~FRnRsdaiBY046oluwk0Z0sHUGn2tq8qeqW3ePv4l1lnbraYizduOQkUJ7Zf~kRi0QHtN77QU-P30EPV-dGhGVItD1pWnpVVxEQGmbN1us~M-ki7MfYIiUfNLXfwRyUVmAIouJcf53IO82zP3tmQjqsEWtFyWdet8RCacLJf99-3vNTXy7ksSrfSyHwAHYlXWk08ixyLxDQ7qKyLTOFcRHsU59eLEsgxLsKlKnjo0wfjskzdguYRPSK1VuFgzWAG4Ibro6icf6pCP8CcQ__",
    name: "Артем Корнилов",
    city: "Самара",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/6e47/2065/71794539905ca790f2eb34b568b73c47?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPlfKfiFm9Ro6clrwJ2FVnJwPayLF2QYFPafZozT~4gGdXGct00qcOnnA3ePuD~gP9tkgiAV3gcRZ~FTDTl3uVzot7jQsGiVdK2XImqr5WOQXP7CGL6tWqXwi38XbIRZRT4T2FcXvniQXqiWefqQDhR41aBIi1gobdFm0AAnwWejMNUfNQ2g3r6NB8yqnCIkrVa~ss-sJbxlpuCpQ~gnXdFNACIfdWw93AyPh02C0DaHRWY~fGRUsUTqVaFeacfB64hbpRIGNvrI0VIsR1xKC1lhNp4yhoMM0cjqXp5XtjkAGYi9gCcWKOcLTwJAZTMzh7RzrxbzuFsg76Dlvh48Yw__",
    name: "Иван Иванов",
    city: "Санкт-Петербург, ИП Иванов",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/d81c/e9cb/db5f1aa6994f0a3a6a7e19557191c7d9?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IS9tnZWpu1LEA-S8giZIMI9tYLjxJB4zg--sCPiUlWBiHriAeg-cS6-dlUbFCCKewAfQBFcxICtF9-mv1Xk72NNv08xsk~SoKgHrA7Utrv5h5kWlT~3joKI3DEJiykmjciU8~Byjl6FmJs93Pj6WtvwJ4BV~06MpJheRDew4jFy4dOfpp84nmFMSCGyQc~klI2PY0XdCRaTVqOv0yrw87gPa27Gjs38s5Lqy-pdMWrq4ZDBKAbGvqRadRJUQjUHSPoZaNtCzv-MVTmZ9wKvW1aCVlofCdZ7FWiTiCQKmmSbnzKvgXGA1pQ6HqJ~CvkcJA2xzYtIcxW5k3XiAHyFI6A__",
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
  {
    src: "https://s3-alpha-sig.figma.com/img/6e47/2065/71794539905ca790f2eb34b568b73c47?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPlfKfiFm9Ro6clrwJ2FVnJwPayLF2QYFPafZozT~4gGdXGct00qcOnnA3ePuD~gP9tkgiAV3gcRZ~FTDTl3uVzot7jQsGiVdK2XImqr5WOQXP7CGL6tWqXwi38XbIRZRT4T2FcXvniQXqiWefqQDhR41aBIi1gobdFm0AAnwWejMNUfNQ2g3r6NB8yqnCIkrVa~ss-sJbxlpuCpQ~gnXdFNACIfdWw93AyPh02C0DaHRWY~fGRUsUTqVaFeacfB64hbpRIGNvrI0VIsR1xKC1lhNp4yhoMM0cjqXp5XtjkAGYi9gCcWKOcLTwJAZTMzh7RzrxbzuFsg76Dlvh48Yw__",
    name: "Иван Иванов",
    city: "Санкт-Петербург, ИП Иванов",
    review:
      "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
  },
];

export const Slider = function ({ autoPlay, autoPlayTime }) {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      // slideNumber = items.length - 1;
      return;
    } else if (slide + direction === items.length) {
      slideNumber = 0;
    } else {
      slideNumber = slide + direction;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.targetTouches[0].clientX;

    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }
    const currentPosition = e.targetTouches[0].clientX;
    const direction = touchPosition - currentPosition;
    console.log(direction);
    if (Math.abs(direction) < 10) {
      return;
    }
    if (direction >= 10) {
      changeSlide(1);
    }
    if (direction <= -10) {
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
  }, [items.length, slide]);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < items.length; i++) {
      dots.push(
        <div
          key={`dot-${i}`}
          className={slide === i ? styles.selected : styles.dot}
          onClick={() => goToSlide(i)}
        />
      );
    }
    return dots;
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Отзывы</h2>
      <div className={styles.slider}>
        <div className={styles.arrow} onClick={() => changeSlide(-1)}>
          <svg
            width="16"
            height="32"
            viewBox="0 0 16 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8387 2.27597C15.0816 2.0245 15.216 1.6877 15.2129 1.3381C15.2099 0.988509 15.0697 0.654093 14.8225 0.406882C14.5753 0.159671 14.2408 0.0194457 13.8912 0.0164078C13.5417 0.0133699 13.2049 0.147762 12.9534 0.39064L2.05738 11.2866C0.807572 12.5368 0.105469 14.2322 0.105469 16C0.105469 17.7677 0.807572 19.4631 2.05738 20.7133L12.9534 31.6093C13.2049 31.8522 13.5417 31.9866 13.8912 31.9835C14.2408 31.9805 14.5753 31.8403 14.8225 31.5931C15.0697 31.3459 15.2099 31.0114 15.2129 30.6618C15.216 30.3122 15.0816 29.9754 14.8387 29.724L3.94271 18.828C3.19283 18.0779 2.77157 17.0606 2.77157 16C2.77157 14.9393 3.19283 13.9221 3.94271 13.172L14.8387 2.27597Z"
              fill={slide === 0 ? "#C2C8CD" : "#2A6CEA"}
            />
          </svg>
        </div>

        <div
          className={styles.container}
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
            <SlidesList />
          </SliderContext.Provider>
        </div>
        <div
          className={styles.arrow}
          style={
            {
              //           transform: `rotate(
              // 180deg)`,
            }
          }
          onClick={() => changeSlide(1)}
        >
          <svg
            width="17"
            height="32"
            viewBox="0 0 17 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.39143 29.724C1.26408 29.847 1.1625 29.9941 1.09262 30.1568C1.02275 30.3194 0.985964 30.4944 0.984425 30.6714C0.982887 30.8485 1.01662 31.024 1.08366 31.1879C1.1507 31.3518 1.24971 31.5006 1.3749 31.6258C1.50009 31.751 1.64896 31.85 1.81282 31.9171C1.97668 31.9841 2.15226 32.0178 2.32929 32.0163C2.50633 32.0148 2.68129 31.978 2.84397 31.9081C3.00664 31.8382 3.15376 31.7367 3.27676 31.6093L14.1728 20.7133C15.4209 19.4623 16.1219 17.7672 16.1219 16C16.1219 14.2328 15.4209 12.5377 14.1728 11.2866L3.27676 0.39064C3.02529 0.147762 2.68849 0.0133699 2.33889 0.0164078C1.9893 0.0194457 1.65488 0.159671 1.40767 0.406882C1.16046 0.654093 1.02023 0.988509 1.01719 1.3381C1.01416 1.6877 1.14855 2.0245 1.39143 2.27597L12.2874 13.172C13.0373 13.9221 13.4586 14.9393 13.4586 16C13.4586 17.0606 13.0373 18.0779 12.2874 18.828L1.39143 29.724Z"
              fill="#2A6CEA"
            />
          </svg>
        </div>
      </div>
      <div className={styles.dots}>{renderDots()}</div>
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
};
