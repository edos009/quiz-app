import React from "react";

import Game from '../Game'
import Result from '../Result'

import styles from "./Quiz.module.scss";

const Quiz = () => {
  return <div className={styles.wrapper}>
    <Game/>
    {/* <Result/> */}
  </div>;
};

export default Quiz;
