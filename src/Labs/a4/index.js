import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";

const Assignment4 = () => {
    function sayHello(){
        alert('Hello');
    }

    return(
        <>
        <h1>Assignment 4</h1>
        <Add a={1} b={2}/>
        <ClickEvent/>
        <PassingFunctions theFunction={sayHello}/>
        <PassingDataOnEvent/>
        <EventObject/>
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        </>
    );
};


export default Assignment4;