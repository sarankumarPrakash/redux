import { createStore,applyMiddleware } from "redux";
import { CakeReducer } from "./CakeReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import Reducers from '../IceCreamRedux/Reducers'


const rootReducer=combineReducers({
    cakes:CakeReducer,
    iceCream:Reducers
});

 const store=createStore(rootReducer, applyMiddleware(logger));
 export default store