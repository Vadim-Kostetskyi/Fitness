import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authSlice } from "./auth/authReduser";
import { exercisesSlice } from "./exercises/exercisesReduser";

const persistConfig = {
  // key: authSlice.name, //auth
  key: "auth",
  storage: AsyncStorage,
};

// const authReducerr = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  // exercises: exercisesSlice.reducer,
  exercises: exercisesSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
