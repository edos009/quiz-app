import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startOver } from "../../store/quizReducer";

import questionsData from "../../utils/questions.json";

import styles from "./Result.module.scss";

const Result = () => {
  const { correctAnswers } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  return (
    <div className={styles.result}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="victory"
      />
      <h2>
        Вы отгадали {correctAnswers} ответа из {questionsData.length}
      </h2>
      <button onClick={() => dispatch(startOver())}>Попробовать снова</button>
    </div>
  );
};

export default Result;
