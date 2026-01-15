import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import todoReducer from "./todoSlice";

// Store 생성 - 전역 상태 저장소
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

// TypeScript 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
