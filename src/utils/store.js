import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    searchSlice: searchSlice,
    chatSlice: chatSlice
  },
});

export default store;
