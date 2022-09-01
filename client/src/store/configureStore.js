import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducer";
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
