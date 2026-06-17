import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../shared/api/baseApi";
import { menuReducer } from "../features/BurgerMenu";

const rootReducer = combineSlices(baseApi, {
  menu: menuReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
