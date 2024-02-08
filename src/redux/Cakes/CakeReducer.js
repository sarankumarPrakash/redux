import { BUY_CAKE } from "./CakeTypes"

const initalState={
    numOfCakes:10
}
export const CakeReducer=(state=initalState,action)=>{
    console.log(action);
    switch(action.type){
    case BUY_CAKE:
        return{
            ...state,numOfCakes: state.numOfCakes - 1
        }
     default:
        return state;
    }
    
}
