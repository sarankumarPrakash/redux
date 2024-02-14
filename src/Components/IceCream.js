import React from "react";
import { Action } from "../IceCreamRedux/Actions";
import { connect } from "react-redux";

const IceCream = (props) => {
  return (
    <div>
      <h2>IceCreamCOunt :{props.numofIceCream} </h2>
      <button onClick={props.buyicream}>Click Me </button>
    </div>
  );
};

const MapStateToProps=state=>{
    return {
        numofIceCream:state.iceCream.numOfIceCream
    }
}
const MapDispatchToProps=dispatch=>{
    return{
        buyicream:()=>dispatch(Action())
    }
}

export default connect(MapStateToProps,MapDispatchToProps) (IceCream);
