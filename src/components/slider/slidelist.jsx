import React, { useContext } from "react";
import { Slide } from "./slide";
import { SliderContext } from "./slider";

import styles from './slider.module.scss';

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className={styles.slide_list}
      style={{ transform: `translateX(-${slideNumber * 100}%)` }}
    >
      {items.map((slide, index) => (
        <Slide key={index} data={slide} />
      ))}
    </div>
  );
}