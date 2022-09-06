import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAmountCorrectAnswers,
  setPassPercentage,
  setStep,
} from "../../store/quizReducer";

import questionsData from "../../utils/questions.json";

import styles from "./Game.module.scss";

const Game = () => {
  const { step, passPercentage } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const question = questionsData[step];

  return (
    <>
      <div className={styles.progress}>
        <div
          style={{ width: `${passPercentage}%` }}
          className={styles.progress__inner}
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li
            key={index}
            onClick={() => {
              dispatch(setAmountCorrectAnswers({ index }));
              dispatch(setStep());
              dispatch(setPassPercentage());
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
