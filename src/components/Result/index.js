import React from "react";

import styles from "./Result.module.scss";

const Result = () => {
  return (
    <div className={styles.result}>
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="victory"/>
      <h2>Вы отгадали 3 ответа из 10</h2>
      <button>Попробовать снова</button>
    </div>
  );
};

export default Result;
