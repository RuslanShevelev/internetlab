import React from "react";
import styles from "./slider.module.scss";

export function Slide({ data: { src, name, city, review } }) {
  return (
    <div className={styles.slide}>
      <div className={styles.slide__content}>
        <div className={styles.slide__author}>
          <img src={src} alt={src} className={styles.slide__image} />
          <div>
            <h4 title={styles.slide__name}>{name}</h4>
            <p title={styles.slide__city}>{city}</p>
          </div>
        </div>
        <div className={styles.slide__review}>{review}</div>
      </div>
    </div>
  );
}
