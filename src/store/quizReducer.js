import { createSlice } from "@reduxjs/toolkit";
import questionsData from "../utils/questions.json";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    step: 0,
    correctAnswers: 0,
    passPercentage: 0,
  },
  reducers: {
    setStep(state, actions) {
      state.step = state.step + 1;
    },
    setPassPercentage(state, actions) {
      state.passPercentage = (state.step / questionsData.length) * 100;
    },
    setAmountCorrectAnswers(state, actions) {
      const { index } = actions.payload;
      if (questionsData[state.step].correct === index) {
        state.correctAnswers = state.correctAnswers + 1;
      }
    },
    startOver(state, actions) {
      state.step = 0;
      state.correctAnswers = 0;
      state.passPercentage = 0;
    },
  },
});

export const {
  setStep,
  setAmountCorrectAnswers,
  startOver,
  setPassPercentage,
} = quizSlice.actions;
export default quizSlice.reducer;
