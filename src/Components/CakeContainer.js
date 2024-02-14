import React from "react";
import { connect } from "react-redux";
import { CakeAction } from "../redux/CakeAction";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>CakeContainer:{props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Add Cake </button>
    </div>
  );

  
};
const MapStateToProps= state=>{
  return {
    numOfCakes:state.numOfCakes
  }
}
const MapDispatchToProps=dispatch=>{
  return{
      buyCake:()=> dispatch(CakeAction())
  }
}
export default connect(MapStateToProps,MapDispatchToProps) (CakeContainer);
