import { combineReducers } from "redux";
import ProductsReducer from "./ProductsList/Reducer";
import cartReducer from "./Cart/cart";

const rootReducer = combineReducers({
  products: ProductsReducer,
  cart: cartReducer,
});

export default rootReducer;
