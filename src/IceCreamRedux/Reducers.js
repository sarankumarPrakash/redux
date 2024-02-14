import {BUY_ICECREAM} from './ActionTypes'

const initalState={
    numOfIceCream : 20
}


const Reducers=(state=initalState,action)=>{
    switch(action.type){
       case BUY_ICECREAM:
        return{
            ...state,numOfIceCream:state.numOfIceCream-1
        }
        default:
            return state;
    }
}
export default Reducers