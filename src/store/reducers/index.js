import { combineReducers } from "redux";

import filtersReducer from "./filters-reducer.js";
import goodsReducer from "./goods-reducer.js";
import cartReducer from "./cart-reducer.js";

const rootReducer = combineReducers({
    filters: filtersReducer,
    goods: goodsReducer,
    cart: cartReducer,
});

export default rootReducer;
