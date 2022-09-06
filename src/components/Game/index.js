import React from "react";

import styles from "./Game.module.scss";

const Game = () => {
  return (
    <>
      <div className={styles.progress}>
        <div style={{ width: "50%" }} className={styles.progress__inner}></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это когда на ты никому не нужен</li>
      </ul>
    </>
  );
};

export default Game;
