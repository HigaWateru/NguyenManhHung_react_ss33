import { combineReducers } from "redux";
import productListReducer from "./productList.reduce";
import productsCartReducer from "./productCart.reduce";
import messageReducer from "./messenge.reduce";

const rootReducer = combineReducers({
    productList: productListReducer,
    productsCart: productsCartReducer,
    messenge: messageReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer