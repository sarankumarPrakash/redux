import React from "react";
import { buycake } from "../redux/Cake/CakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
    console.log(props);
    return (
        <div>
            <h2>CakeContainer: {props.numOfCakes} </h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buycake())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
