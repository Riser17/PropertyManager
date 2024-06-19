import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../api/slice/authSlice/authApiSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
