import React from "react";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.main}>
          <div className={styles.content}>
            <h1 className={styles.content__title}>Говорят, никогда не поздно сменить профессию</h1>
            <p className={styles.content__text}>Сделай круто тестовое задание и у тебя получится</p>
            <button className={styles.content__button}>Проще простого!</button>
          </div>
          </div>
           </div>
      </div>
    </div>
  );
}

export default App;
