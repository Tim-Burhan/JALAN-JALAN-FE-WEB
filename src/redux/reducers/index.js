import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import product from "./product";

const persistAuth = {
  storage,
  key: "auth",
};
const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  product,
});

export default rootReducer;

