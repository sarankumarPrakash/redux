const redux=require('redux')
const createStore=redux.legacy_createStore


const BUY_CAKE="BUY_CAKE"


// action

function buyCake(){
    return {
        type:BUY_CAKE,
        info:"first redux action "
    }
}

// reducers

// (prevState,action )=> newState


/* syntax 

const reducers =(state=initialState,action)=>{
switch (action.type){
    case value:
        return 
}
}
*/
const initalState={
    no_of_cakes:10
}



const reducers =(state=initalState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return ({
                ...state,
                no_of_cakes:state.no_of_cakes-1
            })
            default:return state
    }
}



// store 
const store=createStore(reducers)
console.log(store.getState());

const un_subscribe=store.subscribe(()=>console.log(store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
un_subscribe()