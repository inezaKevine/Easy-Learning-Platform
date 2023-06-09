import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./features/courses/courseSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, courseReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
