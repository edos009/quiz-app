import React from "react";
import { useSelector } from "react-redux";

import Game from "../Game";
import Result from "../Result";
import questionsData from "../../utils/questions.json";

import styles from "./Quiz.module.scss";

const Quiz = () => {
  const { step } = useSelector((state) => state.quiz);
  return (
    <div className={styles.wrapper}>
      {step !== questionsData.length ? <Game /> : <Result />}
    </div>
  );
};

export default Quiz;
