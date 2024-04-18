import React from "react";
import styles from "./item.module.scss";

export const SecondBlockItem = ({ svg, title, text }) => {
  return (
    <li className={styles.item}>
      <div className={styles.item__image}>
      <img src={require(`../../public/images/${svg}`)} alt={svg} />
      </div>
      <div className={styles.item__title}>{title}</div>
      <div className={styles.item__text}>{text}</div>
    </li>
  );
};
