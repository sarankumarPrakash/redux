import { createStore } from "redux";
import { CakeReducer } from "./CakeReducer";
import { combineReducers } from "redux";
import Reducers from '../IceCreamRedux/Reducers'

const rootReducer=combineReducers({
    cakes:CakeReducer,
    iceCream:Reducers
});
 const store=createStore(rootReducer)
 export default store