import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizReducer";

export default configureStore({
  reducer: {
    quiz: quizReducer
  }
})