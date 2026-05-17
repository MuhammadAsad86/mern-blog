import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import themeReducer from "./themeSlice";
import { persistStore, persistReducer } from "redux-persist";

const storage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },

  setItem: (key, value) => {
    return Promise.resolve(localStorage.setItem(key, value));
  },

  removeItem: (key) => {
    return Promise.resolve(localStorage.removeItem(key));
  },
};

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  version: 1,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);