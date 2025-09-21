import { combineReducers } from "redux";
import productListReducer from "./productList.reduce";
import productsCardReducer from "./productCart.reduce";

const rootReducer = combineReducers({
    productList: productListReducer,
    productsCard: productsCardReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer